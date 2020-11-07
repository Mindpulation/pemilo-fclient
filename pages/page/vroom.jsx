import Head from 'next/head'
import s from '../../styles/page/Vroom.module.css'
import Mobile from '../../layout/mobile'
import React, { useCallback, useState } from 'react'
import ImageBlur from '../../components/image/blur'

import { useRouter } from 'next/router';
import { findRoom } from '../../api/index';

const Vroom = () => {
  
  const [txtroom, settxtroom] = useState("");

  const router = useRouter();

  const atClick = useCallback( async (param = new String())=>{        
    console.log("Render Function");
    console.log(settxtroom);
    const res = await findRoom(param);  
    if (res === null || res === undefined){ console.log("NULL"); }
    else{    
      console.log(res);
      //router.push('/page/vmail');
    }
  },[]);

  console.log(`welcome to validate room`)

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
              <p>hallo! selamat datang di pemilo</p>
            </div>
            <div className={s.instruction}>
              <p>Ini adalah tahap <b> pertama </b> kamu, untuk menjadi pemilih</p>
              <p>sepertinya kamu butuh <b> Room Code, </b> kamu bisa meminta <b> Room Code </b> kepada panitia</p>
            </div>
            <div className={s.column}>
  
              <input onChange={(e)=>{settxtroom(e.target.value)}} type="text" name="code" id="Rcode" className={s.input} placeholder="Room Code"/>              
                
              <input onClick={()=>{atClick(txtroom)}} type="button" value="masuk" className={s.btn}/>
              
              <div className={s.row}>
                <span className={s.link}> Ingin menjadi admin </span>
              </div>
  
            </div>
          </div>
  
        </Mobile>
  
      </React.Fragment>
    )
  }

export default Vroom;