import { useFormik } from 'formik';
import * as yup from 'yup';
import MyDropzoneComponent from './DragAndDropCv';

const candidateSchema = yup.object({
  first_name: yup.string().min(1).max(255).required('Campo obligatorio'),
  last_name: yup.string().min(1).max(255).required('Campo obligatorio'),
  age: yup.number().max(100).integer().positive('Debe ser un número positivo').required('Campo obligatorio'),
  phone_number: yup.string().min(1).max(20).required('Campo obligatorio'),
  has_own_transport: yup.boolean(),
  has_work_experience: yup.boolean(),
  current_position: yup.string().min(1).max(255).required('Campo obligatorio'),
  education_id: yup.number().integer().positive('Debe ser un número positivo').required('Campo obligatorio'),
  availability_id: yup.number().integer().positive('Debe ser un número positivo').required('Campo obligatorio'),
  location_id: yup.number().integer().positive('Debe ser un número positivo').required('Campo obligatorio'),

});

const CandidateForm = () => {
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      age: 0,
      phone_number: '',
      has_own_transport: false,
      has_work_experience: false,
      current_position: '',
      education_id: 0,
      availability_id: 0,
      location_id: 0
    },
    validationSchema: candidateSchema,
    onSubmit: (values) => {
      // Aquí puedes manejar la lógica para enviar los datos del formulario
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className='max-w-md mx-auto text'>
      <div className="relative z-0 w-full mb-5 group">
        <label htmlFor="first_name">Nombre:</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
          value={formik.values.first_name}
        />
      </div>
      {formik.touched.first_name && formik.errors.first_name ? (
        <div>{formik.errors.first_name}</div>
      ) : null}
  
      <label htmlFor="last_name" >Apellido:</label>
      <input
        type="text"
        id="last_name"
        name="last_name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.last_name}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 

      />
      {formik.touched.last_name && formik.errors.last_name ? (
        <div>{formik.errors.last_name}</div>
      ) : null}
  
      <label htmlFor="age">Edad:</label>
      <input
        type="number"
        id="age"
        name="age"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.age}
      />
      {formik.touched.age && formik.errors.age ? (
        <div>{formik.errors.age}</div>
      ) : null}
  
      <label htmlFor="phone_number">Teléfono:</label>
      <input
        type="text"
        id="phone_number"
        name="phone_number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone_number}
      />
      {formik.touched.phone_number && formik.errors.phone_number ? (
        <div>{formik.errors.phone_number}</div>
      ) : null}
  
      <label htmlFor="has_own_transport">¿Tiene transporte propio?</label>
      <input
        type="checkbox"
        id="has_own_transport"
        name="has_own_transport"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        checked={formik.values.has_own_transport}
      />

      <label htmlFor="has_work_experience">¿Tiene experiencia?</label>
      <input
        type="checkbox"
        id="has_work_experience"
        name="has_work_experience"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        checked={formik.values.has_work_experience}
      />
      <label>
        Choose a browser from this list:
        <input
          list="current_position"
          name="current_position"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.current_position}
        />
      </label>
      <datalist id="current_position">
        {
          
        }
        <option value="Chrome"></option>
        <option value="Firefox"></option>
        <option value="Internet Explorer"></option>
        <option value="Opera"></option>
        <option value="Safari"></option>
        <option value="Microsoft Edge"></option>
      </datalist>
      {formik.touched.current_position && formik.errors.current_position ? (
        <div>{formik.errors.current_position}</div>
      ) : null}
      {/* Agrega aquí más campos según tu esquema de validación */}
  

      <div className="flex w-full items-center justify-center">
        <MyDropzoneComponent/>
    </div>
      <button type="submit">Enviar</button>
    </form>
  );
  
  
};

export default CandidateForm;
