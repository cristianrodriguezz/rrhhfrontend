const getUserFromLocalStorage = () => {
  const storedData = window.localStorage.getItem('user');
  const user = storedData ? JSON.parse(storedData)?.user : null;
  return user
}


export default getUserFromLocalStorage