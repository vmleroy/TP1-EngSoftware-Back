import React, { Dispatch, SetStateAction, useContext } from "react";
import { IPedidoCompleto } from "../Shared/interfaces/IPedidoCompleto";

interface IPedidoContexto {
  setPedido: Dispatch<SetStateAction<any>>;
  pedido: IPedidoCompleto;
}

export const PedidoContexto = React.createContext<IPedidoContexto>({
  setPedido: () => {},
  pedido: {
    idPedido: 0,
    cliente: {
      nome: "",
      cpf: undefined,
      endereco: {
        cep: undefined,
        logradouro: "",
        numero: undefined,
        complemento: "",
      },
    },
    item: [],
    idFormaPagamento: 0,
  },
});

export const usePedidoContexto = () => useContext(PedidoContexto);
