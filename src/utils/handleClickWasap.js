export const handleClickWasap = (number) => {

  const sendwasap = `https://api.whatsapp.com/send?phone=${number}`

  window.open(sendwasap)

}