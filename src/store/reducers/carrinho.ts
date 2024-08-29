import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CardapioItem } from '../../pages/Home'

type CarrinhoState = {
    itens: CardapioItem[]
}

const initialState: CarrinhoState = {
    itens: []
}

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<CardapioItem>) => {
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