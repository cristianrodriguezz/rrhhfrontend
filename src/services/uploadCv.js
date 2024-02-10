

  export const uploadFile = async (file) => {
    
    const URLuploadCv = `${URL}api/upload-cv`
    try {

      // await axios.post(URLuploadCv, file, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // })
      return true
    } catch (error) {
      return false
    } 
}


