import styles from "../styles/ChatLog.module.css";
import { useEffect,useRef, useState } from "react";
import Typewriter from "typewriter-effect";


export default function ChatLog({avatar,messege,uqnic}) {

  const scrollMessege=useRef();
  var y = window.scrollY;

  useEffect(() => {
    var element = document.querySelector('.cls');
    console.log(element.scrollHeight);
    window.scroll({
        top: element.scrollHeight,
    })  
  }, [])



  return (
    <div key={uqnic} className={`cls ${styles.chatlogWrp}`}>
        <div className={`${styles.avatar} ${avatar === "me" ? styles.meAvatar : null}`}>{avatar}</div>
        <div className={`${styles.messege} ${avatar === "me" ? styles.meMessege : null}`}>
        <Typewriter 
  options={{
    strings: messege,
    autoStart: true,
    loop: false,
    delay:20,
    cursor:""
  }}
          />
        </div>
    </div>
  )
}
