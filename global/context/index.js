import { MODALCONTEXT1 } from './val';
import { useMemo, useReducer } from 'react';
import { reduceModal1 } from '../reducer/index';

const { STATEMODALCONTEXT1, DISPATCHMODALCONTEXT1 } = MODALCONTEXT1;

const GLOBALCONTEXT = ({children}) => {

  const [stateModal1, disModal1] = useReducer(reduceModal1, false);

  const wrapStateModal1 = useMemo( 
    ()=>({
      stateModal1
    },[stateModal1])
  );

  return(
    <DISPATCHMODALCONTEXT1.Provider value={disModal1}>
      <STATEMODALCONTEXT1.Provider value={wrapStateModal1}>
        {children}
      </STATEMODALCONTEXT1.Provider>
    </DISPATCHMODALCONTEXT1.Provider>
  );
}

export default GLOBALCONTEXT;