const initialState = {numberOfIcecream : 200}

export const icecreamReducer = (state = initialState , action)=>{
    switch(action.type){
        case 'buyIcecream' : 
            if(Number(action.payload)<=Number(state.numberOfIcecream)){
                return{...state , numberOfIcecream : Number(state.numberOfIcecream) - action.payload}
            }
            else {
                alert('Insufficient Stock')
                return {...state}
            }
        default :
            return {...state}
    }
} 