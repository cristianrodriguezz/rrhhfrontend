import {  useState } from "react";
import { useDropzone } from "react-dropzone";
import Pdf from "../Pdf";
import PropTypes from 'prop-types';


const DragAndDropCv = ({  formik }) => {
  const [uploadedFiles, setUploadedFiles] = useState(null)
  const [error, setError] = useState("")

  const onDrop = (acceptedFiles) => {

    if (acceptedFiles.length === 1) {

      const file = acceptedFiles[0]

      if (file.name.toLowerCase().endsWith(".pdf") || file.name.toLowerCase().endsWith(".docx") ||  file.name.toLowerCase().endsWith(".jpg")||  file.name.toLowerCase().endsWith(".jpeg") ) {

        setError("")

        setUploadedFiles(acceptedFiles)

        formik.setFieldValue("cv", acceptedFiles);// Llama a la función del componente padre con la información del archivo
      } else {
        setError("El archivo no tiene una extensión válida (debe ser .pdf, .docx o .jpg).")
      }
    } else {
      setError("Solo se permite un archivo.")
    }
  }
  
  const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 1 })

  return (
    <div className="flex flex-col w-full my-2 cursor-pointer">
      <div {...getRootProps()} className=" text-gray-700 flex items-center justify-center w-full h-48 border-dashed border-2 bg-pink-300 rounded-3xl border-pink-500">
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full *:text-center">
          {
            !uploadedFiles ?
            <>
              <svg className="w-8 h-8 mb-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
              <p className="mb-2 text-sm "><span className="font-semibold">Haz clic para seleccionar su CV </span> o arrastra y suelta aquí</p>
              <p className="text-xs">solo se admite archivo (PDF, DOCX, JPG, JPEG)</p>
            </>
            :
            <Pdf size={uploadedFiles[0]?.size} name={uploadedFiles[0]?.name} />
          }      
        </div>
      </div>
      <p className="text-error text-pretty">{error}</p>
      {
        formik.touched.cv && formik.errors.cv 
        ? 
        <div className='text-error text-pretty'>{formik.errors.cv}</div>
        : 
        null
      }
    </div>
  )
}


DragAndDropCv.propTypes = {
  onFileUpload: PropTypes.func,
  formik: PropTypes.object, 
}

export default DragAndDropCv