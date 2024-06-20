import { Route, Routes } from 'react-router-dom'
import './App.css'
import TableCandidates from './pages/TableCandidates'
import UploadCandidate from './pages/UploadCandidate'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import UploadCandidateOk from './pages/UploadCandidateOk'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/tabla' element={<TableCandidates/>}/>
        <Route path='/reclutar' element={<UploadCandidate/>}/>
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/ok" element={<UploadCandidateOk/>} />
      </Routes>

    </>
  )
}

export default App
