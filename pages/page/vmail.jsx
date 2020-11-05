import Head from 'next/head'
import s from '../../styles/page/Vmail.module.css'
import Mobile from '../../layout/mobile'
import React from 'react'
import ImageBlur from '../../components/image/blur'
import Link from 'next/link'

const Vmail = () => {
  console.log(`welcome to validate email`)
    return(
      <React.Fragment>
        
        <Head>
          <title>Page Email Validate</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
  
        <Mobile>
            
          <div className={s.container}>
            <div className={s.icon}>
              <ImageBlur src={"/pemilo.svg"} ></ImageBlur>
            </div>
            <div className={s.title}>
              <p>kamu sudah masuk room</p>
            </div>
            <div className={s.instruction}>
              <p className={s.medium}>Pemilihan Osis 2000</p>
              <p>di tahap ke <b> dua </b> kamu harus memasukan <b> email </b> yang kamu daftarkan kepada <b> panitia </b> sebelum <b> room </b> dimulai</p>
            </div>
            <div className={s.column}>
  
              <input type="email" name="mail" id="Rmail" className={s.input} placeholder="Email address"/>
  
              <Link href={"/page/uwu"}><input type="button" value="lanjut" className={s.btn}/></Link>
  
            </div>
          </div>
  
        </Mobile>
  
      </React.Fragment>
    )
  }


export default Vmail;