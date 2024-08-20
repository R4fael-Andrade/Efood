import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Dish from '../../models/Dish'

type CarrinhoState = {
    itens: Dish[]
}

const initialState: CarrinhoState = {
    itens: []
}

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<Dish>) => {
            const item = action.payload

            if(state.itens.find((i) => i.id === item.id)) {
                alert('O item já está no carrinho')
            } else {
                state.itens.push(item)
            }
        }
    }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer