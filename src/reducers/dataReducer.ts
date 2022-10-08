interface actionProps {
    type: string,
    payload: string
}

export const dataReducer = (state: any, action: actionProps) => {

  switch (action.type) {
    case 'DATA': { 
      return { ...state, data: action.payload } 
    } 
  }
}
