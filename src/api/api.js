const host = 'http://127.0.0.1:8000/api';

async function request(url, options) {
    try {
        const response = await fetch(host + url, options)
        // host + url = full address


        if (response.ok !== true) {
            if (response.status === 403) {
               localStorage.removeItem('userData')
            //    wrong token
            }
            const error = await response.json()
            const message = Object.values(error)[0][0]
            throw new Error(message)
        }

        if (response.status === 204) {
            //204 is no content status
            return response
        } else {
            return response.json()
        }

    } catch (error) {
        alert(error)
    }
}

function createOptions(method = 'get', data) {

    const options = {
        method,
        headers: {}
    }

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
    }

    const userData = JSON.parse(sessionStorage.getItem('userData'))
    if (userData !== null) {
        options.headers['Authorization'] = `Token ${userData.token}`
    }

    return options
}

export async function get(url) {
    return request(url, createOptions())
}

export async function post(url, data) {
    return request(url, createOptions('post', data))
}

export async function put(url, data) {
    return request(url, createOptions('put', data))
}

export async function del(url) {
    return request(url, createOptions('delete'))
}

export async function login(username, password) {
    const result = await post('/auth/login/', {username, password})

    return result
}

export async function register(username, password) {
    const result = await post('/auth/register/', {username, password})

    return result
}

export async function logout() {
    await get('/auth/logout/');
}