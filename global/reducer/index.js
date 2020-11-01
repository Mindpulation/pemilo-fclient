import { actionModal, actions } from '../actions/index';

const OBJ_MODAL1 = actionModal("Modal1");
const OBJ_ACTIONS = actions();

export function reduceModal1(state, action){

  switch (action.tipe) {

    case OBJ_MODAL1.SHOW_MODAL:      
      state = true;
      return state;

    case OBJ_MODAL1.HIDE_MODAL:
      state = false;      
      return state;
  
    default:
      return state;      

  }

}

export const reducer = (state, action) => {

  switch (action.tipe) {

    case OBJ_ACTIONS.CHANGE_DATA_GROUP_DESC:      
      return { groupDesc : action.payload };
  
    default:
      return state;

  }

}
