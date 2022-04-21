import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, TextField, CardActionArea, CardActions } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { usePedidoContexto } from "../../../context/globalContext";
import { formatarMoeda } from "../../../Shared/Utils";

interface ICardProps {
  nomeItem: string;
  valor: number;
  descricaoItem: string;
  quantidadeItem: number;
  id: number;
}

const CardItem: FC<ICardProps> = ({
  nomeItem,
  valor,
  descricaoItem,
  quantidadeItem,
  id,
}) => {
  const { pedido, setPedido } = usePedidoContexto();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nomeItem} {formatarMoeda(valor)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descricaoItem}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid item xs={2}>
          <TextField
            label="quantidade"
            variant="outlined"
            sx={{ maxWidth: "90%" }}
            inputProps={{
              maxLength: 4,
            }}
            defaultValue="0"
            type="number"
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
              const quantidade = parseInt(event.target.value);
              const novosItens =
                pedido?.item?.length &&
                pedido.item.map((item) => {
                  if (item.idItem === id)
                    return { ...item, quantidadeItem: quantidade };
                  else return item;
                });
              setPedido({
                ...pedido,
                item: novosItens,
              });
            }}
          />
        </Grid>
      </CardActions>
    </Card>
  );
};
export default CardItem;
