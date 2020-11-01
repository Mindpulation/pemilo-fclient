import { OBJMODAL, OBJACTIONS } from './val';

export function actionModal(param = new String()){
  let OBJ = OBJMODAL;
  OBJ.SHOW_MODAL = OBJ.SHOW_MODAL + param;
  OBJ.HIDE_MODAL = OBJ.HIDE_MODAL + param;
  return OBJ;
}

export const actions = () => OBJACTIONS;
