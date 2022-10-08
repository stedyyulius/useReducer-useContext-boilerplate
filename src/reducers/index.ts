import { dataReducer } from "./dataReducer"

const combineReducer = (reducers: any) => {
  return (state: any, action: any) => {
    return Object.keys(reducers).reduce(
      (acc, prop) => {
        return ({
          ...acc,
          ...reducers[prop]({ [prop]: acc[prop] }, action),
        })
      },
      state,
    )
  }
}


export const initialState = {
  data: 'default data'
}

export const combinedReducers = combineReducer({
  data: dataReducer
})
