import MyRouter from "./router/router.jsx";
import {AuthContextProvider} from "./context/AuthContext.jsx";

function App() {
    return (
        <AuthContextProvider>
            <MyRouter />
        </AuthContextProvider>
    );
}

export default App;

