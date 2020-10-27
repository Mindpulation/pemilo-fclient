import s from '../../styles/components/Success.module.css'
import { FaCheckCircle } from 'react-icons/fa'

import { useContext } from 'react';
import { MODALCONTEXT1 } from '../../global/context/val';

const { STATEMODALCONTEXT1, DISPATCHMODALCONTEXT1 } = MODALCONTEXT1;

const Success = () => {

  const modalState1 = useContext(STATEMODALCONTEXT1);
  const modalDispatch1 = useContext(DISPATCHMODALCONTEXT1);

  console.log(modalState1);

  if(modalState1 === true){
    return(    
      <div className={s.outer}>
        <div className={s.card}>
          <FaCheckCircle/>
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
export default Success