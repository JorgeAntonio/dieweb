import { useParams } from "react-router-dom";

export default function DetailsEntrepreneurPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>Detalles de la solicitud {id}</h1>
    </div>
  );
}
