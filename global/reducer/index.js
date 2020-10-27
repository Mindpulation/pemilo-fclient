import { actionModal } from '../actions/index';

const OBJ_MODAL1 = actionModal("Modal1");

export function reduceModal1(state, action){
  
  console.log(action);

  switch (action.tipe) {

    case OBJ_MODAL1.SHOW_MODAL:      
      state = true;
      console.log("Hello");
      return state;

    case OBJ_MODAL1.HIDE_MODAL:
      state = false;      
      return state;
  
    default:
      return state;      

  }

}
