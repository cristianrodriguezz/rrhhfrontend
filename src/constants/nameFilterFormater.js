
export const nameFilterFormater = (name) => {
  const formater = {
    'phone_number' : 'Teléfono',
    'cuil': 'Cuil'
  }

  return formater[name]
}