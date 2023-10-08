import { Login } from "./auth-components/login";
import { Register } from "./auth-components/register";
import { Header } from "./base-components/header";
import { Home } from "./base-components/home";
import { Catalog } from "./game-components/catalog";
import { Create } from "./game-components/create";
import { Details } from "./game-components/details";
import { Edit } from "./game-components/edit";

function App() {
    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <Home />
                <Login />
                <Register />
                <Create />
                <Edit />
                <Details />
                <Catalog />
            </main>
        </div>
    );
}

export default App;
