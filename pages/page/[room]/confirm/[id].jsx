import React from 'react';
import Image from 'next/image';
import Mobile from '../../../../layout/mobile';
import St from '../../../../styles/page/ConfirmID.module.css';

import { useRouter } from 'next/router';
import { useLink } from '../../../../hooks/index'

const ConfirmID = () => {

  const router = useRouter();
  const { id, room } = useLink();

  const atClickBack = () => {
    router.push(`/page/${room}/confirm`);
  }

  return(
    <React.Fragment>
      <Mobile>
        
        <div className={St.row1}>
          <span></span>
        </div>

        <div className={St.row2}>
          <div className={St.frameimg}>
            <Image className={St.content} src={"/pemilo.svg"} alt={"Logo Pemilo"} width={100} height={100}></Image>            
          </div>
          <div className={St.frametxt}>            
            <div className={St.txtname}>
              <span></span>
            </div>
            <div className={St.txtclass}>
              <span></span>
            </div>
          </div>
        </div>

        <div className={St.row3}>
          
          <div className={St.visi}>
            <div className={St.txtheadvisi}>
              <span></span>
            </div>
            <div className={St.txtvalvisi}>
              <span></span>
            </div>            
          </div>

          <div className={St.misi}>
            {null}
          </div>

        </div>

        <div className={St.row4}>
          <button onClick={()=>{atClickBack()}}>Kembali</button>
        </div>

      </Mobile>
    </React.Fragment>
  );
}

export default ConfirmID;