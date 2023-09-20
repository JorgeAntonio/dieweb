import { Route, Routes } from "react-router-dom";
import AuthRoute from "./components/auth/AuthRoute";
import EntrepreneurProvider from "./context/EntrepreneurProvider";
import EventProvider from "./context/EventProvider";
import PostProvider from "./context/PostProvider";
import AdminLayout from "./layouts/AdminLayout";
import AdminPage from "./pages/admin/AdminPage";
import BlogPage from "./pages/admin/BlogPage";
import EntrepreneurPage from "./pages/admin/EntrepreneurPage";
import EventPage from "./pages/admin/EventPage";
import { BlogDetailPage } from "./pages/client/BlogDetailPage";
import ClientBlogPage from "./pages/client/ClientBlogPage";
import HomePage from "./pages/client/HomePage";
import Login from "./pages/client/Login";
import PasswordReset from "./pages/client/PasswordReset";
import Register from "./pages/client/Register";
import ServiciosPage from "./pages/client/ServicesPage.jsx";
import UpdatePassword from "./pages/client/UpdatePassword";
import ErrorPage from "./pages/error/ErrorPage";

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/passwordreset" element={<PasswordReset />} />
      <Route path="/update-password" element={<UpdatePassword />} />
      <Route path="/" element={<AdminLayout />}>
        <Route element={<AuthRoute />}>
          <Route path="/" element={<AdminPage />} />
          <Route path="/home" element={<AdminPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/emprendedor"
            element={
              <EntrepreneurProvider>
                <EntrepreneurPage />
              </EntrepreneurProvider>
            }
          />
          <Route
            path="/eventos"
            element={
              <EventProvider>
                <EventPage />
              </EventProvider>
            }
          />
          <Route
            path="/blog"
            element={
              <PostProvider>
                <BlogPage />
              </PostProvider>
            }
          />
        </Route>
      </Route>
      <Route path="/landing" element={<HomePage />} />
      <Route path="/servicios" element={<ServiciosPage />} />
      <Route
        path="/publicaciones"
        element={
          <PostProvider>
            <ClientBlogPage />
          </PostProvider>
        }
      />
      <Route
        path="publicaciones/:id"
        element={
          <PostProvider>
            <BlogDetailPage />
          </PostProvider>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
