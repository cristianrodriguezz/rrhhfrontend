import LoginForm from "../components/LoginForm"


const Login = () => {
  return (
    <div className="h-dvh w-full flex flex-col justify-center sm:items-center sm:justify-center">
      <h1 className="text-center font-semibold sm:text-4xl text-xl sm:mb-5">Login</h1>
      <LoginForm/>
    </div>
  )
}

export default Login