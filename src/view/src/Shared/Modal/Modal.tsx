import { ReactNode, FC, CSSProperties } from "react";
import {
  Grid,
  Typography,
  DialogContent,
  Dialog,
  DialogTitle,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export function ehString(object: unknown): object is string {
  return typeof object === "string";
}
export interface IModal {
  textoBotaoSecundario?: string;
  handleConfirmarModal?: () => void;
  textoBotaoPrincipal?: string;
  handleFecharModal: () => void;
  descricaoModal?: ReactNode | string;
  botaoConfirmacaoDesabilitado?: boolean;
  tituloModal?: string;
  modalAberto: boolean;
  confirmacao?: boolean;
  naoMostrarBotaoSecundario?: boolean;
  iconeModal?: ReactNode;
  iconeModalSvg?: string;
  estiloBotoes?: CSSProperties;
  iconeFechar?: boolean;
  desabilitarTeclaEsc?: boolean;
}

const Modal: FC<IModal> = ({
  textoBotaoSecundario,
  handleConfirmarModal,
  textoBotaoPrincipal,
  handleFecharModal,
  descricaoModal,
  botaoConfirmacaoDesabilitado,
  tituloModal,
  modalAberto,
  confirmacao,
  iconeModal,
  iconeModalSvg,
  naoMostrarBotaoSecundario,
  estiloBotoes,
  iconeFechar,
  desabilitarTeclaEsc = false,
}) => {
  return (
    <Dialog
      open={modalAberto}
      onClose={(_: any, reason: "backdropClick" | "escapeKeyDown") => {
        if (reason === "escapeKeyDown" && !desabilitarTeclaEsc) {
          handleFecharModal();
        }
      }}
      aria-labelledby="modal-titulo"
      aria-describedby="modal-descricao"
      scroll={"body"}
    >
      <DialogTitle sx={{ margin: "1rem" }}>
        {iconeFechar && (
          <IconButton
            aria-label="close"
            onClick={handleFecharModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent>
        <Grid
          container
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          direction="column"
        >
          {tituloModal && (
            <Grid item>
              {iconeModalSvg && !iconeModal && (
                <img
                  width="58px"
                  height="58px"
                  src={iconeModalSvg}
                  alt={"Icone modal"}
                />
              )}
              {iconeModal}
              <Typography fontSize={"2rem"} variant="h2">
                {tituloModal}
              </Typography>
            </Grid>
          )}
          <Grid item>
            {descricaoModal && ehString(descricaoModal) ? (
              <Typography align="center" variant="h5" sx={{ margin: "2rem" }}>
                {descricaoModal}
              </Typography>
            ) : (
              descricaoModal
            )}
          </Grid>
          <Grid
            container
            item
            justifyContent={confirmacao ? "space-between" : "center"}
          >
            {!naoMostrarBotaoSecundario && (
              <Button
                sx={{ Minwidth: "6rem", margin: "2px" }}
                variant={confirmacao ? "outlined" : "contained"}
                color="primary"
                onClick={handleFecharModal}
              >
                {textoBotaoSecundario || "Cancelar"}
              </Button>
            )}
            {confirmacao && (
              <Button
                sx={{ Minwidth: "6rem", margin: "2px" }}
                disabled={botaoConfirmacaoDesabilitado}
                variant="contained"
                color="primary"
                onClick={handleConfirmarModal}
              >
                {textoBotaoPrincipal || "principal"}
              </Button>
            )}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
