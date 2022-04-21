import {
  AodOutlined,
  PersonOutlineOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { SECONDARY, SECONDARY2 } from "../../config/theme";

const Cabecalho: FC = () => {
  return (
    <Grid
      container
      width="95%"
      alignItems="center"
      direction="row"
      sx={{ minHeight: "10vh", backgroundColor: SECONDARY }}
    >
      <Grid item xs={2} marginLeft="1rem">
        ICONE
      </Grid>
      <Grid item xs={7}>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "1.5rem",
            color: SECONDARY2,
          }}
        >
          CyberPizza
        </Typography>
      </Grid>
      <Grid container item xs={2} justifyContent="space-around">
        <ShoppingCartOutlined fontSize="large" sx={{ color: SECONDARY2 }} />
        <PersonOutlineOutlined fontSize="large" sx={{ color: SECONDARY2 }} />
        <AodOutlined fontSize="large" sx={{ color: SECONDARY2 }} />
      </Grid>
    </Grid>
  );
};
export default Cabecalho;
