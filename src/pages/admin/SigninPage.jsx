import { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import background from "../../assets/images/hero.webp";
import { useAuth } from "../../context/AuthProvider.jsx";

export function SigInPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      if (!passwordRef.current?.value || !emailRef.current?.value) {
        setErrorMsg("Please fill in the fields");
        return;
      }
      const {
        data: { user, session },
        error,
      } = await login(emailRef.current.value, passwordRef.current.value);
      if (error) setErrorMsg(error.message);
      if (user && session) navigate("/");
    } catch (error) {
      setErrorMsg("Email or Password Incorrect");
    }
    setLoading(false);
  };

  return (
    <div>
      <div
        className="hero min-h-screen bg-base-200 md:py-16 md:px-24"
        style={{
          backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.3)
        ), url(${background})`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse gap-16">
          <div className="text-center lg:text-left text-balance">
            <h1 className="text-2xl md:text-5xl font-bold">
              ¡Bienvenido a DIE UNAP!
            </h1>
            <p className="md:text-xl font-medium py-6">
              Proporcionando oportunidades y apoyando el espíritu empresarial
              desde la Universidad Nacional de la Amazonia Peruana.
            </p>
          </div>
          <Card style={{ maxWidth: "400px", margin: "0 auto" }}>
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                {errorMsg && (
                  <Alert
                    variant="danger"
                    onClose={() => setErrorMsg("")}
                    dismissible
                  >
                    {errorMsg}
                  </Alert>
                )}
                <div className="text-center mt-2">
                  <Button disabled={loading} type="submit" className="w-50">
                    Login
                  </Button>
                </div>
              </Form>
            </Card.Body>
            <div className="w-100 text-center mt-2">
              New User? <Link to={"/register"}>Register</Link>
            </div>
            <div className="w-100 text-center mt-2">
              Forgot Password? <Link to={"/passwordreset"}>Click Here</Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SigInPage;
