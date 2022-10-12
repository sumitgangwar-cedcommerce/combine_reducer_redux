const initialState = {numberOfCake : 10}

export const CakeReducer = (state = initialState , action)=>{
    switch(action.type){
        case 'buyCake' : 
            if(Number(action.payload)<=state.numberOfCake){
                return{...state , numberOfCake : Number(state.numberOfCake) - action.payload}
            }
            else{ 
                alert('Insufficient Stock')
                return {...state}
            }
        default :
            return {...state}
    }
} 