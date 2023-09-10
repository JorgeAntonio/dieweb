import MyRouter from "./router/router.jsx";
import {AuthContextProvider} from "./context/AuthContext.jsx";
import {EntrepreneurContextProvider} from "./context/EntrepreneurContext.jsx";

function App() {
    return (
        <AuthContextProvider>
            <EntrepreneurContextProvider>
                <MyRouter/>
            </EntrepreneurContextProvider>
        </AuthContextProvider>
    );
}

export default App;

