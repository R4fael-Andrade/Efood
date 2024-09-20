import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { RootReducer } from '../../store'
import {close, remove, hidden} from '../../store/reducers/carrinho'

import { formataPreco } from '../CardFood'
import Checkout from '../Checkout'
import Button from '../Button'

import { usePurchaseMutation } from '../../services/api'
import { getTotalPrice } from '../../utils'

import * as S from './styles'
import React from 'react'

const Cart = () => {
    const {isOpen, itens, isHidden} = useSelector((state: RootReducer) => state.carrinho)
    const [ purchase, {isSuccess } ] = usePurchaseMutation()
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const exibirEntrega = () => {
        if (itens.length === 0 && !isSuccess) {
            setShouldRedirect(true); 
        } else {
            dispatch(hidden())
        }
    }

    if (shouldRedirect) {
        return <Navigate to="/" />;
    }

    return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
            <S.Sidebar>
                <div className={!isHidden ? '' : 'hidden-cart'}>
                <ul>
                    {itens.map((item) => (
                <React.Fragment key={item.id}>
                    <S.Cartitem>
                        <img src={item.foto} alt={item.nome} />
                        <div>
                            <h3>{item.nome}</h3>
                            <p>{formataPreco(item.preco)}</p>
                        </div>
                        <button type='button' onClick={() => removeItem(item.id)} />
                    </S.Cartitem>
                </React.Fragment>
                    ))}
                </ul>
                    <S.BarInfor>
                        <p>Valor total</p>
                        <span>{formataPreco(getTotalPrice(itens))}</span>
                    </S.BarInfor>
                <Button
                type='button'
                title='Clique para continuar com a entrega'
                onClick={exibirEntrega}>Continuar com a entrega</Button>
                </div>
                    {isHidden && (
                        <Checkout />
                    )}
            </S.Sidebar>      
    </S.CartContainer >
    )
}

export default Cart