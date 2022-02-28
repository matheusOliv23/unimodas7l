import { popularProducts } from "../data";
import ProdutoItem from "./ProdutoItem";
import { Container } from "./styles";

function Produtos() {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProdutoItem key={item.id} item={item} />
      ))}
    </Container>
  );
}

export default Produtos;
