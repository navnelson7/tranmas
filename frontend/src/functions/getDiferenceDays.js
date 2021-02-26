export const getDiferenceDays = (fechaDiferida) => {
  const fechaConvertidaEnTiempo = new Date().getTime();
  const fechaFinal = new Date(fechaDiferida).getTime();
  var diferenciaDeTiempo = fechaFinal - fechaConvertidaEnTiempo;
  return Math.round(diferenciaDeTiempo / 86400000 + 1); // --> milisegundos -> segundos -> minutos -> horas -> días
};
