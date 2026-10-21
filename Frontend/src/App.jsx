import {Routes, Route } from 'react-router-dom';
import Registration from '../Components/Registration';
import Home from '../Components/Home';
import SubjectDetails from '../Components/SubjectDetails';
import ChapterDetail from '../Components/ChapterDetails';
 import { useContext } from 'react';
 import { proContext } from '../Provider/Provider';

 
function App(){

   
  return(
    <>
      <Routes>
        <Route path='/' element={<Registration />}/>
        <Route path='/home' element={<Home /> }/>
        <Route path="/subjectdetail" element={<SubjectDetails /> }/>
        <Route path="/chapterdetail/:id" element={<ChapterDetail /> }/>
      
      </Routes>
    </>
  )
}
export default App;