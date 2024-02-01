import Loading from "../Loading"
import PropTypes from 'prop-types';


const ButtonSubmitCandidate = ({ formik, className }) => {

  return (

    <button type="submit" disabled={formik.isSubmitting} className={className}>
      {formik.isSubmitting ? <Loading/> : 'Enviar' }
    </button>
    
  )
}

ButtonSubmitCandidate.propTypes = {
  formik: PropTypes.object,
  className: PropTypes.string 
}


export default ButtonSubmitCandidate