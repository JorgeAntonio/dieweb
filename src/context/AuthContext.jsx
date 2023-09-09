import { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  async function signInWithEmail({ email, password }) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error)
        throw new Error("A ocurrido un error durante la autenticación");
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function signout() {
    const { error } = await supabase.auth.signOut();
    if (error)
      throw new Error("A ocurrido un error durante el cierre de sesión");
  }

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("event", event);
        if (session == null) {
          Navigate("/signin", { replace: true });
        } else {
          Navigate("/admin", { replace: true });
        }
      }
    );
  }, []);

  return (
    <AuthContext.Provider value={{ signInWithEmail, signout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
