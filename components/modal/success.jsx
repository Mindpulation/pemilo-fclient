import s from '../../styles/components/Success.module.css'
import React from 'react'
import { useContext } from 'react';
import { MODALCONTEXT1 } from '../../global/context/val';
import ImageBlur from '../../components/image/blur';
import Link from 'next/link'

const { STATEMODALCONTEXT1, DISPATCHMODALCONTEXT1 } = MODALCONTEXT1;

const Success = React.memo(
  ({children}) => {
  
    const modalState1 = useContext(STATEMODALCONTEXT1);
  
    if(modalState1 === true){
      return(  
        <div>
          <div className={s.outer}>
            <div className={s.card}>
              <div className={s.row}>
                <ImageBlur src={"/icon/success.svg"} width="40px" height="40px"/>
              </div>
              <div className={s.row}>
                <h3 align="center">terima kasih telah berpartisipasi</h3>
              </div>
              <div className={s.row}>
                <p align="center" className={s.desc}>kami akan sangat menghargai kalian yang sudah memilih, tolong bagikan apps ini ke teman-teman mu ya!</p>
              </div>
              <div className={s.row}>
                <Link href="/page/vroom"><input type="button" value="sampai jumpa !" className={s.btn}/></Link>
              </div>
            </div>
          </div>    
          {children}
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
export default Success