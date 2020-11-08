import Head from 'next/head'
import s from '../../styles/page/Vmail.module.css'
import Mobile from '../../layout/mobile'
import React, { useEffect, useState } from 'react'
import ImageBlur from '../../components/image/blur'

import { set, get } from '../../hooks/localStorage';
import { findAnggota, findRoom } from '../../api/index';
import { useRouter } from 'next/router';

const Vmail = () => {  

  const router = useRouter();  

  const [room, setRoom] = useState("");

  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  useEffect(()=>{
    setRoom(()=>{return get("Room")});
  },[]);

  const atClick = async () => {

    const rom = await findRoom({codeRoom:room, password:pass});    
    const ang = await findAnggota(room, mail);

    if(rom.data.res != null && ang.data.res != null){}
    else{
      alert("Password atau Email kamu salah");
    }

    set("Status", true);

    router.push({
      pathname: '/page/[room]',
      query : {room : room}
    });

  }

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
              <p className={s.medium}>{room}</p>
              <p>di tahap ke <b> dua </b> kamu harus memasukan <b> email </b> yang kamu daftarkan kepada <b> panitia </b> sebelum <b> room </b> dimulai</p>
            </div>
            <div className={s.column}>
  
              <input onChange={(e)=>{setMail(e.target.value)}} type="email" name="mail" id="Rmail" className={s.input} placeholder="Email address"/>

              <input onChange={(e)=>{setPass(e.target.value)}} type="password" name="pass" id="Rpass" className={s.input} placeholder="Password Room"/>
  
              <input onClick={()=>{atClick()}} type="button" value="lanjut" className={s.btn}/>
  
            </div>
          </div>
  
        </Mobile>
  
      </React.Fragment>
    )
  }


export default Vmail;