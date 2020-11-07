import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Local from '../controller/localStorage';

const local = new Local();

export const useSecureLocal = (k = new String(), initialValue = new String()) => {
  
  const [value, setValue] = useState(()=>{local.get(k, initialValue)});

  useEffect(()=>{
    local.set(k, value);
  },[value]);

  return [value, setValue];
}

export const useLink = () => {
  const router = useRouter();
  return router.query;
}