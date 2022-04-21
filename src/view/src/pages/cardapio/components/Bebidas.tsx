import { Grid, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { PRIMARY, SECONDARY, SECONDARY2 } from "../../../config/theme";
import { usePedidoContexto } from "../../../context/globalContext";
import Repository from "../../../repositories/Repository";
import { IRefeicao } from "../../../Shared/interfaces/IRefeicao";
import CardItem from "./CardItem";

const Bebidas: FC = () => {
  const { pedido, setPedido } = usePedidoContexto();
  const [itemCardapio, setItemCardapio] = useState<IRefeicao[]>();

  const list = async () => {
    const copiaCardapio = await Repository.listarCardapio();
    setItemCardapio(copiaCardapio);
    if (setPedido)
      setPedido({
        ...pedido,
        item: [...copiaCardapio],
      });
  };

  useEffect(() => {
    list();
  }, []);

  return (
    <Grid
      container
      width="95%"
      margin="2rem"
      alignItems="center"
      direction="row"
      sx={{ minHeight: "10vh", backgroundColor: SECONDARY }}
    >
      <Grid item xs={12} marginLeft="1rem">
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "1.5rem",
            color: SECONDARY2,
          }}
        >
          Bebidas
        </Typography>
      </Grid>
      {pedido?.item?.length &&
        pedido.item.map((item) => (
          <Grid item sx={{ backgroundColor: PRIMARY }} padding="0.5rem">
            <CardItem
              key={item.idItem}
              id={item.idItem}
              nomeItem={item.nomeItem}
              valor={item.valorItem}
              descricaoItem={item.descricaoItem}
              quantidadeItem={item.quantidadeItem}
            />
          </Grid>
        ))}
    </Grid>
  );
};
export default Bebidas;
