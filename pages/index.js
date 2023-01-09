import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../componnent/Header'
import TextArea from '../componnent/TextArea'
import { useEffect, useRef, useState } from 'react'
import ChatLog from '../componnent/ChatLog'
import { useAllContext } from '../context/allContext'

export default function Home() {

  const {Logs}=useAllContext();

  return (
    <main className={styles.main}>
    {/* <Header/> */}
      <section className={styles.wrper}>
        {
          Logs.map((item,index)=>{
            return <ChatLog uqnic={index} avatar={item.user} messege={item.prompt}/>
          })
        }  
      </section>
      <div className={styles.berWrpewr}>
       <TextArea/>
      </div>
    </main>
  )
}
