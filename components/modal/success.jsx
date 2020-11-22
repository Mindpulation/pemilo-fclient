import React, { useEffect, useState } from 'react';
import s from '../../styles/components/Success.module.css'
import ImageBlur from '../../components/image/blur';

import { useRouter } from 'next/router';

let btnSta = 0;

const Success = React.memo(
  () => {    

    const router = useRouter();    

    const atClick = () => {      
      router.push("/page/vroom");
    }    

    return (
      <div className={s.outer}>
        <div className={s.card}>
          <div className={s.row}>
            <ImageBlur src={"/icon/success.svg"} width="40px" height="40px" />
          </div>
          <div className={s.row}>
            <h3 align="center">Terima kasih telah berpartisipasi</h3>
          </div>
          <div className={s.row}>
            <p align="center" className={s.desc}>Kami akan sangat menghargai kalian yang sudah memilih, tolong bagikan apps ini ke teman-teman mu ya!</p>
          </div>
          <div className={s.row}>
            <input onClick={atClick} type="button" value="Sampai jumpa !" className={s.btn} />
          </div>
        </div>
      </div>
    )
  });

export default Success