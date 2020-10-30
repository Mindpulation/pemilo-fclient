import { MODALCONTEXT1, REDUCER } from './val';
import { useMemo, useReducer } from 'react';
import { reduceModal1, reducer } from '../reducer/index';

const { STATEMODALCONTEXT1, DISPATCHMODALCONTEXT1 } = MODALCONTEXT1;
const { STATEREDUCER, DISPATCHREDUCER } = REDUCER;

const GLOBALCONTEXT = ({children}) => {

  const [stateModal1, disModal1]  = useReducer(reduceModal1, false);
  const [state, dispatch]         = useReducer(reducer, { groupDesc : 1 });

  const wrapStateModal1 = useMemo(
    ()=>{
      return stateModal1
    },[stateModal1]
  );

  const wrapState = useMemo(
    ()=>{
      return state
    },[state]
  );

  return(
    <DISPATCHREDUCER.Provider value={dispatch}>
      <STATEREDUCER.Provider value={wrapState}>
        <DISPATCHMODALCONTEXT1.Provider value={disModal1}>
          <STATEMODALCONTEXT1.Provider value={wrapStateModal1}>
            {children}
          </STATEMODALCONTEXT1.Provider>
        </DISPATCHMODALCONTEXT1.Provider>
      </STATEREDUCER.Provider>
    </DISPATCHREDUCER.Provider>
  );
}

export default GLOBALCONTEXT;