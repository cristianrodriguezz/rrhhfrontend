import { Route, Routes } from 'react-router-dom'
import './App.css'
import TableCandidates from './pages/TableCandidates'
import UploadCandidate from './pages/UploadCandidate'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<TableCandidates/>}/>
        <Route path='/upload-candidate' element={<UploadCandidate/>}/>

      </Routes>
    </>
  )
}

export default App
