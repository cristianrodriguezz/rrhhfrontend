
export const nameFilterFormater = (name) => {
  const formater = {
    'phone_number' : 'Teléfono',
    'cuil': 'Cuil',
    'name': 'Localidad'
  }

  return formater[name]
}