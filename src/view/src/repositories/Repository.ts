import axios from "axios";
import { IPedidoCompleto } from "../Shared/interfaces/IPedidoCompleto";
import { IRefeicao } from "../Shared/interfaces/IRefeicao";

class Repository {
  async listarCardapio(): Promise<IRefeicao[]> {
    const response = await axios.get("http://localhost:3333/");
    return response.data;
  }

  async listarPedidos(): Promise<IPedidoCompleto[]> {
    const response = await axios.get("http://localhost:3333/");
    return response.data;
  }

  async inserirItemCardapio(item: IRefeicao) {
    const response = await axios.post("http://localhost:3333/", {
      name: item.nomeItem,
      description: item.descricaoItem,
      calories: item.calorias,
      price: item.valorItem,
      quantity: item.quantidadeItem,
    });
    return response.data;
  }

  async removerItemCardapio(item: IRefeicao) {
    const response = await axios.delete(`http://localhost:3333/${item.idItem}`);
    return response.data;
  }

  async editarItemCardapio(item: IRefeicao) {
    const response = await axios.put(`http://localhost:3333/${item.idItem}`, {
      name: item.nomeItem,
      description: item.descricaoItem,
      calories: item.calorias,
      price: item.valorItem,
      quantity: item.quantidadeItem,
    });
    return response.data;
  }

  async enviarPedido(pedido: IPedidoCompleto) {
    const response = await axios.post(
      "http://localhost:3333/",
      pedido.idPedido
    );
    return response.data;
  }
}

export default new Repository();
