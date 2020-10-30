import { useContext } from 'react';
import React from 'react'
import { MODALCONTEXT1 } from '../../../../global/context/val';
import { actionModal } from '../../../../global/actions/index';
import ModalValid from '../../../../components/modal/valid';
import ModalSuccess from '../../../../components/modal/success';

const OBJ_MODAL1 = actionModal("Modal1");

const { STATEMODALCONTEXT1, DISPATCHMODALCONTEXT1 } = MODALCONTEXT1;

const Confirm = React.memo(
  () => {
  
    const modalDispatch1 = useContext(DISPATCHMODALCONTEXT1);
  
    const validModalShow = () => {
      modalDispatch1( {tipe : OBJ_MODAL1.SHOW_MODAL } )
    }
  
    return(
      <React.Fragment>
        
        <ModalValid></ModalValid>
        <button onClick={validModalShow} >Show Modal</button>
      </React.Fragment>
    )
  }
)

export default Confirm;