import '../styles/globals.css';
import {AllContextProvider}from "../context/allContext";
import { useState } from 'react';

export default function App({ Component, pageProps }) {

  const [isloading,setisloading]=useState(false);
  const [text,settext]=useState('');
  const [data,setdata]=useState('');
  const [Logs,setLogs]=useState([]);

  const passValue={
    isloading,
    text,
    data,
    Logs,
    setisloading,
    settext,
    setdata,
    setLogs
  }


  return (
    <AllContextProvider value={passValue}>
      <Component {...pageProps} />
    </AllContextProvider>
  )
}
