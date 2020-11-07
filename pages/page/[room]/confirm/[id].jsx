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
        <div className={St.container}>
          <div className={St.row1}>
            <div className={St.txthead}>
              <span> Position <span className={St.blue}>1</span> </span>
            </div>
          </div>

          <div className={St.row2}>
            <div className={St.frameimg}>
              <Image className={St.content} src={"/pemilo.svg"} alt={"Logo Pemilo"} width={100} height={100}></Image>            
            </div>
            <div className={St.frametxt}>            
              <div className={St.txt}>
                <span>Amardito khairi test nama panjang</span>
              </div>
              <div className={St.txt}>
                <span>XII RPL 3</span>
              </div>
            </div>
          </div>

          <div className={St.row3}>
            
            <div className={St.visi}>
              <div className={St.txthead}>
                <span className={St.blue}>Visi</span>
              </div>
              <div className={St.txt}>
                <span>Menjadi seorang yang creatip dan menjadi imam yang baik </span>
              </div>            
            </div>

            <div className={St.misi}>
              {null}
            </div>

          </div>

          <div className={St.row4}>
            <button className={St.btn} onClick={()=>{atClickBack()}}>Kembali</button>
          </div>
        </div>
      </Mobile>
    </React.Fragment>
  );
}

export default ConfirmID;