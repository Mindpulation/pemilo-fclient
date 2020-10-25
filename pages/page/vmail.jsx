import Head from 'next/head'
import s from '../../styles/page/Vmail.module.css'
import Mobile from '../../layout/mobile'
import React from 'react'
import ImageBlur from '../../components/image/blur'

const Vmail = () => {
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
            <h1>kamu sudah masuk room</h1>
          </div>
          <div className={s.instruction}>
            <p className={s.medium}>Pemilihan Osis 2000</p>
            <p>di tahap ke <strong> dua </strong> kamu harus memasukan <strong> email </strong> yang kamu daftarkan kepada <strong> panitia </strong> sebelum <strong> room </strong> dimulai</p>
          </div>
          <div className={s.column}>

            <input type="email" name="mail" id="Rmail" className={s.input} placeholder="Email address"/>

            <input type="button" value="lanjut" className={s.btn}/>

          </div>
        </div>

      </Mobile>

    </React.Fragment>
  )
};

export default Vmail;