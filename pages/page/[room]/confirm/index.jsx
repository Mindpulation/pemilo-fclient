import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'
import St from '../../../../styles/page/Confirm.module.css';

import { useLink } from '../../../../hooks/index';

const Confirm = () => {

  const router = useRouter();

  const { room } = useLink();

  return(
    <React.Fragment>

      <div className={St.row1}>
        
        <div className={St.frameimg}>
          <Image className={St.content} src={"/pemilo.svg"} alt={"Logo Pemilo"} width={75} height={75}></Image>
        </div>
        
        <div className={St.txthead1}>
          <span></span>
        </div>
        
        <div className={St.txthead2}>
          <span></span>
        </div>

      </div>

      <div className={St.row2}>        
        {null}
      </div>

      <div className={St.row3}>
        <div className={St.frambtn}>
          <button onClick={()=>{}}>Selesai</button>
        </div>
        <div className={St.framlink}>
          <Link href={{ pathname : '/page/[room]', query : { room : room } }}>Kembali ke tahap ke-3</Link>
        </div>
      </div>

    </React.Fragment>
  );
}

export default Confirm;