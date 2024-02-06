import Loading from "../Loading"
import PropTypes from 'prop-types';


const ButtonSubmitCandidate = ({ formik }) => {

  return (

    <button type="submit" className='w-full h-9 bg-pink-600 rounded-lg text-white' disabled={formik.isSubmitting}>
      {formik.isSubmitting ? <Loading className='size-6 m-auto'/> : 'Enviar' }
    </button>
    
  )
}

ButtonSubmitCandidate.propTypes = {
  formik: PropTypes.object,
  className: PropTypes.string 
}


export default ButtonSubmitCandidate