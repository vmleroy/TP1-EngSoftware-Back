export const formatarMoeda = (numero: number) => {
  if (!numero) return "R$ 0,00";
  const number = numero.toFixed(2).split(".");
  return "R$ " + number.join(",");
};

export const formatarCalorias = (numero: number) => {
  if (!numero) return "0 Kcal";
  return numero + " Kcal";
};
