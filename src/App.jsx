import { Route, Routes } from 'react-router-dom'
import './App.css'
import TableCandidates from './pages/TableCandidates'
import UploadCandidate from './pages/UploadCandidate'
import Filters from './components/Filters'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<TableCandidates/>}/>
        <Route path='/upload-candidate' element={<UploadCandidate/>}/>
        <Route path='/asd' element={<Filters/>}/>

      </Routes>
    </>
  )
}

export default App
