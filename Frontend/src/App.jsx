import {Routes, Route } from 'react-router-dom';
import Registration from '../Components/Registration';
import Home from '../Components/Home';
import SomethingWentWrong from '../Components/SomethingWentWrong';
 import { useContext } from 'react';
 import { proContext } from '../Provider/Provider';

 
function App(){
const {createAccountStatus }=useContext(proContext)
   
  return(
    <>
      <Routes>
        <Route path='/' element={<Registration />}/>
        <Route path='/home' element={<Home /> }/>
        <Route path='/wentwrong' element={<SomethingWentWrong /> }/>
      
      </Routes>
    </>
  )
}
export default App;