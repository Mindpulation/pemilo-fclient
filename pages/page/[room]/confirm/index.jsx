import React, {useCallback, useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Mobile from '../../../../layout/mobile'
import St from '../../../../styles/page/Confirm.module.css';

import { useRouter } from 'next/router'
import { get } from '../../../../hooks/localStorage';

export function getServerSideProps(context){
  const {room} = context.params;
  return {
    props : {
      room
    }
  }
}

const Confirm = ({room}) => {

  const router = useRouter();  

  const [listData, setListData] = useState([]);

  console.log("Render");

  useEffect(()=>{    
    setListData(get("Choosen"));        
  },[]);  

  const navigatePreview = (index = 0 )=>{
        
    router.push({
      pathname: '/page/[room]/confirm/[id]',
      query : {
        room : room,
        id : index
      }
    });

  };

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
            {
              listData.map((e,i)=>{
                return(
                  <div className={St.profile} key={i}>
                    <div className={St.profileHead}>
                      <span className={St.blue}>{e.position}</span>
                    </div>
                    <div className={St.frameimg}>
                      <Image onClick={()=>{navigatePreview(i)}} className={St.content} src={(e.choose.photo == "")?"/pemilo.svg":e.choose.photo} alt={"Logo Pemilo"} width={75} height={75}></Image>
                    </div>
                    <div className={St.txt} onClick={()=>{navigatePreview(i)}}>                    
                      <span>{e.choose.name}</span>
                    </div>
                  </div>
                );
              })
            }                                
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