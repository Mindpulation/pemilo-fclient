import s from '../../styles/components/Valid.module.css'
import React from 'react'
import { useContext } from 'react';
import { MODALCONTEXT1 } from '../../global/context/val';
import { actionModal } from '../../global/actions/index';
import ImageBlur from '../../components/image/blur';

const OBJ_MODAL1 = actionModal("Modal1");

const { STATEMODALCONTEXT1, DISPATCHMODALCONTEXT1 } = MODALCONTEXT1;

const Valid = React.memo(
  () => {
  
    const modalState1 = useContext(STATEMODALCONTEXT1);

    const modalDispatch1 = useContext(DISPATCHMODALCONTEXT1);
  
    const validModalHide = () => {
      modalDispatch1( {tipe : OBJ_MODAL1.HIDE_MODAL } )
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
              <p align="center" className={s.desc}>kamu udah yakin <strong> memilih </strong> para <strong> kandidat </strong> ini? kalo <strong> sudah yakin, </strong> maka <strong> tidak bisa memilih </strong> lagi</p>
            </div>
            <div className={s.row}>
              <input type="button" value="sudah yakin" className={s.btn}/>
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