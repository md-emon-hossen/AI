import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../componnent/Header'
import TextArea from '../componnent/TextArea'
import { useEffect, useRef, useState } from 'react'
import ChatLog from '../componnent/ChatLog'
import { useAllContext } from '../context/allContext'
import Link from 'next/link'

export default function Home() {

  const {Logs}=useAllContext();
  const ref=useRef(null);

  useEffect(() => {
    if (ref) {
      ref.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top:target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])


  return (
    <main className={styles.main}>
    <Header/>
      <section ref={ref} className={styles.wrper}>
        {
          Logs.map((item,index)=>{
            return <ChatLog uqnic={index} avatar={item.user} messege={item.prompt}/>
          })
        }  
      </section>
      <div className={styles.berWrpewr}>
       <TextArea/>
       <p className={styles.developer}>Developed By <Link href="https://codemon.netlify.app/">MD Emon Hossen</Link> </p>
      </div>
    </main>
  )
}
