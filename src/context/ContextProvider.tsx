import React, { createContext, ReactElement, useReducer } from 'react';

import { combinedReducers, initialState } from '../reducers'

interface Props {
  children: ReactElement | React.ReactNode,
}

const AppContext = createContext<{
  state: typeof initialState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => undefined,
})


const GlobalContext: React.FC<Props> = (props: Props) => {

  const [state, dispatch] = useReducer(combinedReducers, initialState);

  return (
    <AppContext.Provider value={ { state, dispatch } }>
      { props.children }
    </AppContext.Provider>
  )
}

export {
  AppContext,
  GlobalContext,
}
