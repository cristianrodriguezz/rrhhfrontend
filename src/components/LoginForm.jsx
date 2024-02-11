import { useFetchLogin } from "../hooks/useFetch"
import Loading from "./Loading";


const LoginForm = () => {

  const {loading, error, handleSubmit} = useFetchLogin()


  return (
    <form onSubmit={handleSubmit} className="sm:w-96 w-full sm:border-2 rounded-xl sm:px-10 sm:pb-10 p-0.5">
      <div>
        <div className="h-5 pb-10 pt-2 text-center text-error">
          {error}
        </div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@email.com" required/>
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Contraseña</label>
        <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required/>
      </div>
      <button type="submit" disabled={loading ? true : false} className="text-white h-12 flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
        {loading ? <Loading className='w-7 h-7'/> : 'Entrar'}
      </button>
    </form>
  )
}

export default LoginForm