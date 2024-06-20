export const getLocation = async (idProvincia) => {
 
  const url = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${idProvincia}&campos=id,nombre&max=100`
  
  const response =  await fetch(url)

  return response
}
