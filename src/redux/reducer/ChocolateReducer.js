const initialState = {numberOfChocolate : 500}

export const chocolateReducer = (state = initialState , action)=>{
    switch(action.type){
        case 'buyChocolate' : 
            if(Number(action.payload)<=state.numberOfChocolate){
                return{...state , numberOfChocolate : Number(state.numberOfChocolate) - action.payload}
            }
            else{
                alert('Insufficient Stock')
                return {...state}
            }
        default :
        
            return {...state}
    }
} 