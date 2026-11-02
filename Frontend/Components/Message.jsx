import style from '../Css_folder/Message.module.css';
import { proContext } from '../Provider/Provider';
import { useContext } from 'react';
function Message(){
const { message,dispMess } = useContext(proContext);

     return(
        <>
         <div className={style.messagecontainer}><p className={style.messagechild} style={{  visibility: dispMess===true ?  "visible":"hidden",}}>{message}</p></div>
        </>
     )
}
export default Message