import { ToastContainer } from "react-toastify"
import CandidateForm from "../components/CandidateForm"
import 'react-toastify/dist/ReactToastify.css';


const UploadCandidate = () => {
  return (
    <div className="flex justify-center items-center">
      <CandidateForm user_id={1}/>
      <ToastContainer
        position="top-center"
        autoClose={12000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </div>
  )
}

export default UploadCandidate