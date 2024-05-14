import { createSlice } from "@reduxjs/toolkit"


const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        //actions
        //1)to add items to wishlist
        addWishlistItem :(state, actions)=>{
           state.push(actions.payload)
        },
        //2) to remove items from wishlist
        removewishlistItem : (state,actions)=>{
            return state.filter((item)=>item.id!=actions.payload)
        }
    }
})

export const {addWishlistItem,removewishlistItem} = wishlistSlice.actions

export default wishlistSlice.reducer