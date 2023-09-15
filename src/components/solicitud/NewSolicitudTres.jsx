import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabase.client";

function SolicitudFormTres() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  setTimeout(() => {
    setError(null);
    setSuccessMessage(null);
  }, 3000);

  async function postData() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("solicitudes")
        .insert([{ name, email, phone, product }]);
      if (error) {
        setError(error.message);
      }
      if (data) setSuccessMessage(data);
      navigate("/");
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    // Limpia el formulario
    setName("");
    setEmail("");
    setPhone("");
    setProduct("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  return (
    <Container className="p-16 h-screen flex flex-col items-center justify-center bg-gray-200">
      {error && <div className="alert alert-danger">{error}</div>}

      {successMessage && (
        <div className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{successMessage}</span>
        </div>
      )}

      <h1 className="text-3xl font-semibold mb-8">
        Solicitud para la DIE UNAP
      </h1>
      <Form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <Form.Group controlId="nombre">
          <Form.Label className="text-gray-700">Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </Form.Group>

        <Form.Group controlId="correo">
          <Form.Label className="text-gray-700">Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </Form.Group>

        <Form.Group controlId="telefono">
          <Form.Label className="text-gray-700">Teléfono</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Ingrese su teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </Form.Group>

        <Form.Group controlId="productoServicio">
          <Form.Label className="text-gray-700">
            Subir enlace de documento que pruebe su pre incubación
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Ingrese los detalles de su producto o servicio"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="btn btn-primary text-white p-2 rounded-md w-full mt-4"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <span className="mr-2">Enviando...</span>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            </div>
          ) : (
            "Enviar"
          )}
        </Button>
      </Form>
    </Container>
  );
}

export default SolicitudFormTres;
