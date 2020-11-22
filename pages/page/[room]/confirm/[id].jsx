import React, {useEffect} from 'react';
import Image from 'next/image';
import Mobile from '../../../../layout/mobile';
import St from '../../../../styles/page/ConfirmID.module.css';

import { useRouter } from 'next/router';
import { get } from '../../../../hooks/localStorage';
import useSWR from 'swr';

export function getServerSideProps(context){
  const {id, room} = context.params;    
  return{
    props : {
      id, room
    }
  }
}

const ConfirmID = ({id, room}) => {  

  const { data } = useSWR(`/local/getChoosen/${id}`, ()=>{ return get("Choosen") });

  const router = useRouter();  

  useEffect(()=>{
    const tmpget = get("Room");        
    if(tmpget === null){
      router.push("/page/vroom");
    }
  },[]);

  const atClickBack = () => {
    router.push(`/page/${room}/confirm`);
  }    
  
  const changeToList = (param = new String()) => {
    const changeData = param.replace(/\|}|{|}|"/g,'');     
    const spl = changeData.split(',');
    return spl;
  }

  let obj = null;
  if(data != undefined){
    obj = data[id].choose;      
  }

  if(obj != null){
    return(
      <React.Fragment>
        <Mobile>
          <div className={St.container}>
            <div className={St.row1}>
              <div className={St.txthead}>
                <span>Position<span className={St.blue}> {obj.position} </span></span>
              </div>
            </div>
  
            <div className={St.row2}>
              <div className={St.frameimg}>
                <Image className={St.content} src={ (obj.photo === "") ? "/pemilo.svg" : obj.photo } alt={"Logo Pemilo"} width={100} height={100}></Image>            
              </div>
              <div className={St.frametxt}>            
                <div className={St.txt}>
                  <span>{ obj.name }</span>
                </div>                
              </div>
            </div>
  
            <div className={St.row3}>
              
              <div className={St.visi}>
                <div className={St.txthead}>
                  <span className={St.blue}>Visi</span>
                </div>
                <div className={St.txt}>
                  <span>
                    { obj.vision }
                  </span>
                </div>            
              </div>
  
              <div className={St.visi}>
                <div  className={St.txthead}>
                  <span className={St.blue} >Misi</span>
                </div>
                <div className={St.txt}>
                  {
                    changeToList(obj.mission).map((e, i)=>(
                      <div key={i}>
                        <span>{e}</span>
                      </div>                
                    ))
                  }
                </div>
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
  else{
    return(
      <React.Fragment>
        <div>Loading..</div>
      </React.Fragment>
    )
  }
}

export default ConfirmID;