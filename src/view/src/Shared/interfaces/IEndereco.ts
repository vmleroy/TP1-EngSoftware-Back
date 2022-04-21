import { Nullable } from "../constantes/Nullable";

export interface IEndereco {
  cep?: number;
  logradouro: string;
  numero?: number;
  complemento: Nullable<string>;
}
