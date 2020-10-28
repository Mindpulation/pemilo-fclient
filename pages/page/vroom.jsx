import Head from 'next/head'
import s from '../../styles/page/Vroom.module.css'
import Mobile from '../../layout/mobile'
import React from 'react'
import ImageBlur from '../../components/image/blur'
import Link from 'next/link'

const Vroom = React.memo(
  () => {
    return(
      <React.Fragment>
        
        <Head>
          <title>Page Room Validate</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
  
        <Mobile>
            
          <div className={s.container}>
            <div className={s.icon}>
              <ImageBlur src={"/pemilo.svg"} ></ImageBlur>
            </div>
            <div className={s.title}>
              <h1>hallo! selamat datang di pemilo</h1>
            </div>
            <div className={s.instruction}>
              <p>Ini adalah tahap <strong> pertama </strong> kamu, untuk menjadi pemilih</p>
              <p>sepertinya kamu butuh <strong> Room Code, </strong> kamu bisa meminta <strong> Room Code </strong> kepada panitia</p>
            </div>
            <div className={s.column}>
  
              <input type="text" name="code" id="Rcode" className={s.input} placeholder="Room Code"/>
  
              <input type="text" name="password" id="Rpassword" className={s.input} placeholder="Room Password"/>
  
              <Link href="/page/vmail"><input type="button" value="masuk" className={s.btn}/></Link>
              
              <div className={s.row}>
                <span className={s.link}> Ingin menjadi admin </span>
              </div>
  
            </div>
          </div>
  
        </Mobile>
  
      </React.Fragment>
    )
  }
)

export default Vroom;