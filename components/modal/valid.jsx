import s from '../../styles/components/Valid.module.css'
import React from 'react'
import { useContext } from 'react';
import { MODALCONTEXT1 } from '../../global/context/val';
import { actionModal } from '../../global/actions/index';
import ImageBlur from '../../components/image/blur';

import { useRouter } from 'next/router';

import Socket from  '../../lib/socket';

import { delAll, get } from '../../hooks/localStorage';
import { changeStatusAnggota } from '../../api';

const OBJ_MODAL1 = actionModal("Modal1");

const soc = new Socket();
const eng = soc.con("https://pemilo.id");
//const eng = soc.con("http://34.101.95.115:9999");
//const eng = soc.con("http://127.0.0.1:9999");
//const eng = soc.con("http://20bf55cfbc86.ngrok.io");

const { STATEMODALCONTEXT1, DISPATCHMODALCONTEXT1 } = MODALCONTEXT1;

const Valid = React.memo(() => {
  
  const router = useRouter();

  const modalState1 = useContext(STATEMODALCONTEXT1);

  const modalDispatch1 = useContext(DISPATCHMODALCONTEXT1);

  const validModalHide = () => {
    modalDispatch1( {tipe : OBJ_MODAL1.HIDE_MODAL } )
  }

  // const atClick = () => {
  //   eng.emit("test");
  // }

  const atSure = async () => {          
    alert("Boom");
    const ch = get("Choosen");
    const anggota = get("Anggota");    
    console.log(ch);          
    console.log(anggota);
    await changeStatusAnggota({codeRoom:anggota.codeRoom, email:anggota.email}, {status:true});
    //eng.emit("sendVote", null);
    ch.forEach(e => { (e.choose != null) ? eng.emit("sendVote", {codeTicket : anggota.codeTicket, codeRoom : anggota.codeRoom, idCandidate : e.choose.id}) : null });
    delAll();
    router.push("/page/end");    
  }

  if(modalState1 === true){
    return(  
      <div className={s.wrap}>
        <div className={s.outer} onClick={validModalHide}></div>    
        <div className={s.card}>
          <div className={s.row}>
            <ImageBlur src={"/icon/alert.svg"} width="40px" height="40px"/>
          </div>
          <div className={s.row}>
            <h2 align="center">tunggu dulu!</h2>
          </div>
          <div className={s.row}>
            <p align="center" className={s.desc}>kamu udah yakin <b> memilih </b> para <b> kandidat </b> ini? kalo <b> sudah yakin, </b> maka <b> tidak bisa memilih </b> lagi</p>
          </div>
          <div className={s.row}>
            <input type="button" value="sudah yakin" className={s.btn} onClick={atSure}/>
            <input type="button" value="tidak yakin" className={s.btn1} onClick={validModalHide}/>
          </div>
        </div>
      </div>  
    )
  }
  else{
    return(
      <div></div>
    );
  }
  
  }
)
export default Valid