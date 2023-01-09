import styles from "../styles/Header.module.css";
import {AiOutlinePlus}from "react-icons/ai"
import {GoGrabber}from "react-icons/go";
import { useAllContext } from "../context/allContext";

export default function Header() {

  const {setLogs}=useAllContext();

  function handleClick(e){
    e.preventDefault();
    alert("This menuber is under developing");
  }

  return (
    <div className={styles.headerWrp}>
      <div>
      <GoGrabber onClick={(e)=>handleClick(e)} className={styles.iconber}/>
      <h3>New Chat</h3>
      <AiOutlinePlus onClick={()=>setLogs([])} className={styles.icon}/>
      </div>
    </div>
  )
}
