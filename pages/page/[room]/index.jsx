import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Mobile from '../../../layout/mobile';

import St from '../../../styles/page/Room.module.css';

import { useLink } from '../../../hooks/index';

const Room = () => {

  const { room } = useLink();

  return(
    <React.Fragment>
      
      <Head>
        <title>Welcome to {room}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Mobile>        
        <div className={St.container}>
          <div className={St.row1}>          
            <div className={St.frameimg}>
              <Image alt={"Logo Pemilo"} className={St.content} src={"/pemilo.svg"} width={100} height={100}></Image>
            </div>

            <div className={St.txthead1}>
              <span>Hey! kamu udah tau blom siapa kandidatnya?</span>
            </div>

            <div className={St.txt}>
              <span>Di tahap ke <b>tiga</b> ini kamu akan melihat para <b>kandidat</b> dan akan <b>memilih</b> siapa <b>kandiat</b> mu</span>
            </div>

            <div className={St.txt}>
              <span>Dari <b>posisi</b> ini mana yang ingin kamu lihat terlebih dahulu</span>
            </div>
          </div>

          <div className={St.row2}>
            {null}
          </div>

          <div className={St.row3}>
            <button onClick={()=>{}} className={St.btn}>Lanjut</button>
            <div className={St.framelink}>
              <Link href={"/page/vmail"}>Kembali ke tahap ke-2</Link>
            </div>
          </div>
        </div>
      </Mobile>

    </React.Fragment>
  );

}

export default Room;