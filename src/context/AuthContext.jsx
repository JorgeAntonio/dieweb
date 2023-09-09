import {createContext, useContext, useEffect, useState} from "react";
import { supabase } from "../supabase/supabase.client.jsx";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null); // Nuevo estado para los errores

    async function login({ email, password }) {
        try {
            setError(null); // Limpiar el error antes de realizar el inicio de sesión
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
            if (error) {
                setError("Error al iniciar sesión: " + error.message); // Guardar el error en el estado
            }
            return data;
        } catch (error) {
            setError("Error al iniciar sesión: " + error.message); // Guardar el error en el estado
        }
    }

    async function logout() {
        try {
            setError(null); // Limpiar el error antes de cerrar la sesión
            const { error } = await supabase.auth.signOut();
            localStorage.removeItem("hasSeenAlert");
            if (error) throw new Error("Error al cerrar sesión: " + error.message);
        } catch (error) {
            setError("Error al cerrar sesión: " + error.message); // Guardar el error en el estado
        }
    }

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                console.log("event", event);
                const currentUser = session?.user;
                console.log("data del usuario", session?.user);
                setUser(currentUser ?? null);
                console.log("currentUser", currentUser);
                setError(null); // Limpiar el error al cambiar el estado de la autenticación
                if (currentUser) {
                    navigate("/admin", { replace: true });
                } else {
                    navigate("/", { replace: true });
                }
            }
        );
        return () => {
            authListener.subscription;
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};
