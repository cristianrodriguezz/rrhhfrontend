import Loading from "../Loading"
import PropTypes from 'prop-types';


const ButtonSubmitCandidate = ({ formik }) => {

  return (

    <button type="submit" disabled={formik.isSubmitting}>
      {formik.isSubmitting ? <Loading/> : 'Enviar' }
    </button>
    
  )
}

ButtonSubmitCandidate.propTypes = {
  formik: PropTypes.object, 
}


export default ButtonSubmitCandidate