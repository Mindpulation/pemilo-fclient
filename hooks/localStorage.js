import { en, de } from '../controller/enc'
import md5 from 'md5';

const enc = new SecureString();

export const set = ( key = new String(), values ) => {
  
  const keySecure = md5(key);

  const valuesSecure = en(JSON.stringify(values));

  localStorage.setItem(keySecure, valuesSecure);

}

export const get = ( key = new String() ) => {

  const keySecure = md5(key);
  
  const returnSecure = JSON.parse(de(localStorage.getItem(keySecure)));

  return returnSecure;

}

export const del = (key = new String()) => {
  const keySecure = md5(key);
  localStorage.removeItem(keySecure);
}