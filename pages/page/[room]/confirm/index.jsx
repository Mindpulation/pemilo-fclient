import { useContext } from 'react';
import React from 'react'
import { MODALCONTEXT1 } from '../../../../global/context/val';
import { actionModal } from '../../../../global/actions/index';
import ModalSuccess from '../../../../components/modal/success.jsx';

const OBJ_MODAL1 = actionModal("Modal1");

const { STATEMODALCONTEXT1, DISPATCHMODALCONTEXT1 } = MODALCONTEXT1;

const Confirm = React.memo(
  () => {
  
    const modalDispatch1 = useContext(DISPATCHMODALCONTEXT1);
  
    const atShowModal = () => {
      modalDispatch1( {tipe : OBJ_MODAL1.SHOW_MODAL } )
    }
  
    return(
      <div>
        <ModalSuccess></ModalSuccess>
        <button onClick={atShowModal} >Show Modal</button>
      </div>
    )
  }
)

export default Confirm;