import Check from "../components/icons/Check"


const UploadCandidateOk = () => {
  return (
    <section className="flex h-dvh items-center justify-center">
      <article className="bg-white flex flex-col items-center justify-center h-2/6 rounded-2xl p-5 sm:p-10 text-balance text-center">
        <p className="text-lg">Tus datos han sido registrados con éxito. ¡Gracias! </p>
        <Check/>
      </article>
    </section>
  )
}

export default UploadCandidateOk