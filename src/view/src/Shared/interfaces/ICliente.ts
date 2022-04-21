import { IEndereco } from "./IEndereco";

export interface ICliente {
  nome: string;
  cpf?: number;
  endereco: IEndereco;
}
