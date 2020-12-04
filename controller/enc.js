const cry = require('crypto-js');
const secret = "4rZ9ps0IlLZ1rjJz3XNFElR4C2/9EZHw8JFW8WFzJNs="

const ivSize = 128;
const keySize = 256;
const iterations = 100;

export const en = (param = new String()) => {
  
  if(param === undefined || param === null){
    return null;
  }

  const salt  = cry.lib.WordArray.random(128/8);
  
  const key   = cry.PBKDF2(secret ,salt, { 
    keySize: keySize/32, 
    iterations: iterations 
  }); 
  
  const iv    = cry.lib.WordArray.random(ivSize/8);
  
  const hsl   = cry.AES.encrypt(param,key,{
      iv: iv,
      padding: cry.pad.Pkcs7,
      mode:cry.mode.CBC
  });

  const res   = salt.toString() + iv.toString() + hsl.toString();                
  
  return res;
}

export const de = (param = new String()) => {

  if(param === undefined || param === null){
    return null;
  }

  const salt      = cry.enc.Hex.parse(param.substr(0, 32));
  const iv        = cry.enc.Hex.parse(param.substr(32, 32))
  const encrypted = param.substring(64);
  
  const key = cry.PBKDF2(secret, salt, {
      keySize     : keySize/32,
      iterations  : iterations
  });

  const res = cry.AES.decrypt(encrypted, key, { 
      iv          : iv, 
      padding     : cry.pad.Pkcs7,
      mode        : cry.mode.CBC      
  })
  
  const hsl = res.toString(cry.enc.Utf8);

  return hsl;

}
