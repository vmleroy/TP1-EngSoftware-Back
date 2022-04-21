import { Grid } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { PRIMARY, SECONDARY } from "../../../config/theme";
import Cabecalho from "../../../Shared/cabecalho/Cabecalho";
import Bebidas from "../components/Bebidas";
import Pizzas from "../components/Pizzas";
import Promocoes from "../components/Promocoes";

// sempre q quiser mudar algo no pedido da setPedido e pronto
// setPedido({...pedido, nomeCliente}) -> isso aqui atualiza o nome do cliente

const Cardapio: FC = () => {
  const navegar = useNavigate();
  /*
  const onClickPagar: MouseEventHandler<HTMLButtonElement> = () => {
    navegar("/pagamento");
  };
*/
  return (
    <Grid
      container
      direction="column"
      sx={{ minWidth: "100vh", minHeight: "100vh", backgroundColor: PRIMARY }}
    >
      <Grid
        container
        item
        justifyContent="center"
        alignItems="center"
        rowSpacing={4}
        marginTop="1rem"
      >
        <Cabecalho />
        <Promocoes />
        <Pizzas />
        <Bebidas />
      </Grid>
    </Grid>
  );
};

export default Cardapio;
