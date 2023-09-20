export const initialState={
    basket:[],
}

export const  getBasketTotal =(basket)=> basket?.reduce((amount,item)=> item.price + amount,0);



function reducer(state,action){
    switch (action.type) {
        case "ADD-TO-BASKET":
            return {...state,
            basket:[...state.basket,action.item]}
            
            case "REMOVE-FROM-BASKET":
                let newBasket=[...state.basket];
                const index = state.basket.findIndex((basketItem)=>basketItem.id=== action.id)

                if(index >= 0){
                 newBasket.splice(index,1);
                }else{
                    console.warn(`cant remove produce (id:${action.id})`)
                }

                return{...state,basket:newBasket,}



            
            
        
        default:
            return state;
            
    }
}

export default reducer

