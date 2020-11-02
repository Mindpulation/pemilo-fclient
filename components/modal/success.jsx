import s from '../../styles/components/Success.module.css'
import ImageBlur from '../../components/image/blur';
import Link from 'next/link'

const Success = React.memo(
  () => {

    const something = true

    if(something){
      return(  
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