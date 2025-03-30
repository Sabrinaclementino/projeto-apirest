import Header from "./components/Header";
import CadastroProduto from "./pages/Produto/CadastroProduto";
import ListaProduto from "./pages/Produto/ListaProduto";

const App = () => {
  return (
    <div className="App">
      <Header />;
      <ListaProduto />
      <CadastroProduto />
    </div>
  );
};

export default App;
