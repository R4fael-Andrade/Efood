import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioItem } from '../../pages/Home'

type CarrinhoState = {
    itens: CardapioItem[]
    isOpen: boolean
    isHidden: boolean
    menuCardOpen: boolean
}

const initialState: CarrinhoState = {
    itens: [],
    isOpen: false,
    isHidden: false,
    menuCardOpen: false
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
        },
        remove: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter((item) => item.id !== action.payload) 
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },
        hidden: (state) => {
            state.isHidden = true
        },
        display: (state) => {
            state.isHidden = false
        },
        paymentOpen: (state) => {
            state.menuCardOpen = true
        },
        clear: (state) => {
            state.itens = []
        }
    }
})

export const { adicionar, close, open, remove, hidden, display, paymentOpen, clear } = carrinhoSlice.actions
export default carrinhoSlice.reducer