import * as yup from 'yup';

export const candidateSchema = yup.object({
  first_name: yup.string().min(1).max(255).required('Debes completar el nombre'),
  last_name: yup.string().min(1).max(255).required('Debes completar el apellido'),
  age: yup.number().max(100).integer().required('Debes completar tu edad'),
  phone_number: yup.string().min(1).max(20).required('Debes completar tu número de teléfono'),
  has_own_transport: yup.boolean(),
  has_work_experience: yup.boolean(),
  current_position_id: yup.number().integer().required('Debes completar tu posición'),
  education_id: yup.number().integer().required('Debes completar tu educación'),
  availability_id: yup.number().integer().required('Debes completar tu disponibilidad'),
  location_id: yup.number().integer().required('Debes completar tu localidad'),
  cv: yup.string().required('El curriculum es requerido'),

});