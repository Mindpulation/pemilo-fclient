import SecureString from '../controller/enc'

const enc = new SecureString();

export default function local(){}

local.prototype.get = (k = new String(), init = new String()) => {

  const savedLocal = enc.de(localStorage.getItem(k));
  if (savedLocal) return JSON.parse(savedLocal);

  if(init instanceof Function) return init();

  return init;
}

local.prototype.set = (k = new String(), value = new String()) => {  

  let tmpinit = new String();

  if(init instanceof String) tmpinit = init;
  else{
    tmpinit = JSON.stringify(init);
  }

  const secureInit = enc.en(tmpinit);

  localStorage.setItem(k, tmpinit);
}