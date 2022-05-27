import TiendaProvider from "./app/CartContext";
import RoutesConfig from "./app/RoutesConfig";

const App = () => (
  <TiendaProvider>
    <RoutesConfig />
  </TiendaProvider>
);

export default App;
