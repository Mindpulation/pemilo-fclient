import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Mobile from '../../../layout/mobile';

import St from '../../../styles/page/Room.module.css';

import { del, get, set } from '../../../hooks/localStorage';
import { useRouter } from 'next/router';

import { findPositionCandidate } from '../../../api/index';

import useSWR from 'swr';

export function getServerSideProps(context){
  const { room } = context.params
  return { props: { room } };
}

const Room = ({room}) => {  
    
  const router = useRouter();    

  useEffect(()=>{
    const tmpget = get("Room");
    if(tmpget === null){
      router.push("/page/vroom");      
    }
    //console.log(get("Choosen"));
  },[]);


  const atBack = () => {
    //del("Anggota");  
    del("Choosen");
    router.reload();
  }

  const atNext = () => {
    const tmp = get("Choosen");
    let count = 0;
    tmp.map(e=>{
      if(e.sta === true){
        count++;
      }
    });
    if(count > 0){
      router.push({
        pathname:'/page/[room]/confirm',
        query:{
          room : room
        }
      });
    }
  }
  
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
              <span>Dari <b>posisi</b> ini mana yang ingin kamu pilih</span>
            </div>
          </div>

          <div className={St.col}>
            <ListRoom room={room}></ListRoom>
          </div>

          <div className={St.row3}>
            <button onClick={atNext} className={St.btn}>Lanjut</button>
            <div className={St.framelink}>
              <a onClick={atBack}>Pilih Ulang</a>
            </div>
          </div>
        </div>
      </Mobile>

    </React.Fragment>
  );

}

const ListRoom = React.memo(({room})=>{

  const router = useRouter();  

  const { data } = useSWR("/api/candidate/getRoom", async ()=>{return await findPositionCandidate(room)});

  useEffect(()=>{    
    if(data != undefined){
      const tmp = get("Choosen");            
      let arr = [];
      if(tmp === null){        
        data.forEach( e =>{
          const obj = {
            position : e.position,
            sta : false,
            choose : null
          }
          arr.push(obj);
        });        
        set("Choosen", arr);        
      }
    }
  });

  const atListClick = (position = new String()) => {
    const tmp = get("Choosen");                   
    let count = 0;
    tmp.map(e=>{
      if(e.sta === true){
        count++;
      }
    });    
    if(count > 0){
      alert("Kamu hanya bisa memilih satu dari 2 posisi tersebut");
    }
    else if(count == 0){
      tmp.forEach(e => {                  
        if(e.sta === false && e.choose === null){
          router.push({
            pathname: '/page/[room]/[group]',
            query:{
              room : room,
              group : position
            }
          });
        }
        else{
          alert("Sudah memilih pada bagian position ini!!");        
        }
      });
    }
    // if(e.position === position){
    // }     
    console.log(position);
    console.log(get("Choosen"));
  }

  if(data === undefined){
    return(
      <div></div>
    );
  }
  else{    
    return(
      <React.Fragment>      
        {
          data.map((e,i)=>{
            return(
              <div className={St.row3} key={i}>
                <input onClick={()=>{atListClick(e.position)}} type="button" value={e.position} className={St.btn}/>
              </div>
            )
          })
        }
      </React.Fragment>
    );
  }

});

export default Room;