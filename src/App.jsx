import { AuthContextProvider } from "./context/AuthContext.jsx";
import { EntrepreneurContextProvider } from "./context/EntrepreneurContext.jsx";
import MyRouter from "./router/router.jsx";

function App() {
  return (
    <AuthContextProvider>
      <EntrepreneurContextProvider>
        <MyRouter />
      </EntrepreneurContextProvider>
    </AuthContextProvider>
  );
}

export default App;
