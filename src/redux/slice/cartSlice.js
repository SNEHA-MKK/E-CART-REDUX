import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cartSlice',
    initialState:[],
    reducers:{
         //actions
        //1)to add items to cart
        addCartItem :(state, actions)=>{
            state.push(actions.payload)
         },

          //2) to remove items from cart
        removeCartItem : (state,actions)=>{
            return state.filter((item)=>item.id!=actions.payload)
        },
        emptyCart:(state)=>{
            return state = []
        }


    }

})

export const {addCartItem,removeCartItem,emptyCart} = cartSlice.actions
export default cartSlice.reducer