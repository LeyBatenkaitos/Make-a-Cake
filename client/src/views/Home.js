import { useNavigate } from "@reach/router";
import Nav from "../components/Nav";

const Home = () => {
  const navigate = useNavigate();

  const clickNavigator = () => {
    navigate("/ingresarPedido");
  };
  return (
    <>
      <Nav />
      <h1>Has click para crear tu propio Pastel</h1>
      <button onClick={clickNavigator}>Crear Pastel</button>
    </>
  );
};

export default Home;
