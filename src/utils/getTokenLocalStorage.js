const getTokenLocalStorage = () => {
  const storedData = window.localStorage.getItem('user');
  const token = storedData ? JSON.parse(storedData)?.token : null;
  return token
}

export default getTokenLocalStorage