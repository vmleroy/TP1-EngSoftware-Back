import { Button, Grid, Typography } from "@mui/material";
import { FC, MouseEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRIMARY, SECONDARY } from "../../../config/theme";
import Repository from "../../../repositories/Repository";
import { IPedidoCompleto } from "../../../Shared/interfaces/IPedidoCompleto";
import { formatarCalorias, formatarMoeda } from "../../../Shared/Utils";

const Historico: FC = () => {
  const navegar = useNavigate();

  const onClickCardapio: MouseEventHandler<HTMLButtonElement> = () => {
    navegar("/");
  };

  const list = async () => {
    const copiaPedido = await Repository.listarPedidos();
    setPedido(copiaPedido);
  };
  useEffect(() => {
    list();
  }, []);

  const [pedido, setPedido] = useState<IPedidoCompleto[]>([]);

  return (
    <>
      {pedido.length &&
        pedido.map((item) => {
          return (
            <Grid
              container
              direction="column"
              sx={{
                minWidth: "100vh",
                minHeight: "100vh",
                backgroundColor: PRIMARY,
              }}
              alignItems="center"
            >
              <Grid
                container
                item
                justifyContent="center"
                marginTop="2rem"
                marginBottom="2rem"
                alignItems="center"
              >
                <Grid item>
                  <img
                    src="logoVeggie2world.png"
                    alt="Logo veggie to world"
                    width="48px"
                    height="48px"
                  />
                </Grid>
                <Grid item>
                  <Typography
                    fontWeight="700"
                    fontSize="1.5rem"
                    marginLeft="1rem"
                    sx={{ color: SECONDARY }}
                  >
                    Histórico de pedidos do Veggie2World:
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                item
                borderRadius="4px"
                direction="row"
                rowSpacing={2}
                sx={{
                  backgroundColor: SECONDARY,
                  width: "900px",
                  paddingBottom: "16px",
                  paddingLeft: "16px",
                  fontWeight: "500",
                  fontSize: "1rem",
                  color: PRIMARY,
                }}
              >
                <Grid item xs={8}>
                  Cliente: {item.cliente.nome}
                </Grid>
                <Grid item xs={4}>
                  Número do pedido: {item.idPedido}
                </Grid>

                {item.item.length &&
                  item.item.map((refeicao) => (
                    <Grid container item>
                      <Grid item xs={6}>
                        {refeicao.nomeItem}
                      </Grid>
                      <Grid item xs={2}>
                        {formatarCalorias(refeicao.calorias)}
                      </Grid>
                      <Grid item xs={2}>
                        {formatarMoeda(refeicao.valorItem)}
                      </Grid>
                      <Grid item xs={2}>
                        {refeicao.quantidadeItem}
                      </Grid>
                    </Grid>
                  ))}
              </Grid>
              <Grid
                container
                item
                direction="row"
                justifyContent="center"
                marginBottom="1rem"
                marginTop="1rem"
              >
                <Button
                  sx={{
                    backgroundColor: SECONDARY,
                    width: "250px",
                    color: PRIMARY,
                  }}
                  onClick={onClickCardapio}
                >
                  Voltar para o cardápio
                </Button>
              </Grid>
            </Grid>
          );
        })}
    </>
  );
};

export default Historico;
