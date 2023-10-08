import { Routes, Route } from 'react-router-dom'

import { Login } from "./auth-components/login";
import { Register } from "./auth-components/register";
import { Header } from "./base-components/header";
import { Home } from "./base-components/home";
import { Catalog } from "./game-components/catalog";
import { Create } from "./game-components/create";
import { Details } from "./game-components/details";
import { Edit } from "./game-components/edit";
import { Logout } from './auth-components/logout';

function App() {
    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/logout" element={<Logout />}/>
                    <Route path="/games" element={<Catalog />}/>
                    <Route path="/games/create" element={<Create />}/>
                    <Route path="/games/edit" element={<Edit />}/>
                    <Route path="/games/:gameId" element={<Details />}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
