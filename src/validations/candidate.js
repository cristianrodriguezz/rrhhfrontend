import * as yup from 'yup';

export const candidateSchema = yup.object({
  first_name: yup.string().min(1).max(50, 'Debe tener 50 caracteres como máximo').required('Debes completar el nombre'),
  last_name: yup.string().min(1).max(50, 'Debe tener 50 caracteres como máximo').required('Debes completar el apellido'),
  age: yup.number().max(100).integer().required('Debes completar tu edad'),
  cuil: yup.string().matches(/^\d{11}$/, 'El CUIL debe contener exactamente 11 dígitos').required('Debes completar tu CUIL'),
  phone_number: yup.string().min(1).max(25, 'Debe tener 25 caracteres como máximo').required('Debes completar tu número de teléfono'),
  has_own_transport: yup.boolean(),
  has_work_experience: yup.boolean(),
  current_position_id: yup.number().integer().required('Debes completar tu posición'),
  education_id: yup.number().integer().required('Debes completar tu educación'),
  availability_id: yup.number().integer().required('Debes completar tu disponibilidad'),
  location_id: yup.number().integer().required('Debes completar tu localidad'),
  cv: yup.string().required('El curriculum es requerido'),
  email: yup.string().email('Tiene que ser un email').max(40, 'Debe tener 40 caracteres como máximo').required('Debes completar tu email')
})