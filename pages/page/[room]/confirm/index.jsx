import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Mobile from '../../../../layout/mobile'
import St from '../../../../styles/page/Confirm.module.css';

import { useRouter } from 'next/router'
import { useLink } from '../../../../hooks/index';

const Confirm = () => {

  const router = useRouter();

  const { room } = useLink();

  return(
    <React.Fragment>

      <Mobile>
        <div className={St.container}>  
          <div className={St.row1}>
            
            <div className={St.frameimg}>
              <Image className={St.content} src={"/pemilo.svg"} alt={"Logo Pemilo"} width={75} height={75}></Image>
            </div>
            
            <div className={St.txthead1}>
              <span>yay ! kamu sudah sampai di tahap akhir</span>
            </div>
            
            <div className={St.txt}>
              <span>kamu bisa melihat ulang tentang <b> kandidat </b> pilihanmu, caranya <b> tekan </b> nama/photo <b> kandidat </b> mu</span>
            </div>

          </div>

          <div className={St.row2}>

            <div className={St.profile}>
              <div className={St.profileHead}>
                <span className={St.blue}>Ketua</span>
              </div>
              <div className={St.frameimg}>
                <Image className={St.content} src={"/pemilo.svg"} alt={"Logo Pemilo"} width={75} height={75}></Image>
              </div>
              <div className={St.txt}>
                <span>Amardito Khairi</span>
              </div>
            </div>
            
            <div className={St.profile}>
              <div className={St.profileHead}>
                <span className={St.blue}>Wakil Ketua</span>
              </div>
              <div className={St.frameimg}>
                <Image className={St.content} src={"/pemilo.svg"} alt={"Logo Pemilo"} width={75} height={75}></Image>
              </div>
              <div className={St.txt}>
                <span>Amardito Khairi Test Nama Panjang</span>
              </div>
            </div>
            
            <div className={St.profile}>
              <div className={St.profileHead}>
                <span className={St.blue}>Anonym</span>
              </div>
              <div className={St.frameimg}>
                <Image className={St.content} src={"/pemilo.svg"} alt={"Logo Pemilo"} width={75} height={75}></Image>
              </div>
              <div className={St.txt}>
                <span>Amardito Khairi</span>
              </div>
            </div>

         </div>

          <div className={St.row3}>
            <button onClick={()=>{}} className={St.btn}>Selesai</button>
            <div className={St.framelink}>
              <Link href={{ pathname : '/page/[room]', query : { room : room } }}>Kembali ke tahap ke-3</Link>
            </div>
          </div>
        </div>
      </Mobile>

    </React.Fragment>
  );
}

export default Confirm;