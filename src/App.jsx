import { Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import AdminNavBar from "./layouts/components/AdminNavbar";
import Footer from "./layouts/components/Footer";
import AdminPage from "./pages/admin/AdminPage";
import EntrepreneursPage from "./pages/admin/EntrepreneursPage";
import EventPage from "./pages/admin/EventPage";
import SigInPage from "./pages/admin/SigninPage";
import HomePage from "./pages/client/home_page";
import ErrorPage from "./pages/error/ErrorPage";

function App() {
  return (
    <>
      <AdminNavBar />
      <main className="container max-w-screen-2xl mx-auto">
        <Routes>
          <Route element={<AuthRoute />}>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/updatepassword" element={<h1>password update</h1>} />
            {/* PROVIDER */}
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/emprendedor" element={<EntrepreneursPage />} />
            <Route path="/eventos" element={<EventPage />} />
            <Route path="/blog" element={<h1>blog</h1>} />
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<SigInPage />} />
          <Route path="/register" element={<h1>Register</h1>} />
          <Route path="/passwordreset" element={<h1>Password reset</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
