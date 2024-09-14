import * as S from './styles'
import {ButtonAdicionar} from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import {close, remove, hidden} from '../../store/reducers/carrinho'
import { formataPreco } from '../CardFood'
import Checkout from '../Checkout'
import { useState } from 'react'

const Cart = () => {
    const {isOpen, itens, isHidden} = useSelector((state: RootReducer) => state.carrinho)
    const dispatch = useDispatch()
    const [continuarEntrega, setContinuarEntrega] = useState(false)

    const closeCart = () => {
        dispatch(close())
    }

    const getTotalPrice = () => {
        return itens.reduce((acumulador: number, valorAtual) => {
            return (acumulador += valorAtual.preco!)
        }, 0)
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const exibirEntrega = () => {
        dispatch(hidden())
    }

    return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
            <S.Sidebar>
                <div className={!isHidden ? '' : 'hidden-cart'}>
                <ul>
                    {itens.map((item) => (
                <>
                    <S.Cartitem key={item.id}>
                        <img src={item.foto} alt={item.nome} />
                        <div>
                            <h3>{item.nome}</h3>
                            <p>{formataPreco(item.preco)}</p>
                        </div>
                        <button type='button' onClick={() => removeItem(item.id)} />
                    </S.Cartitem>
                </>
                    ))}
                </ul>
                    <S.BarInfor>
                        <p>Valor total</p>
                        <span>{formataPreco(getTotalPrice())}</span>
                    </S.BarInfor>
                <ButtonAdicionar onClick={exibirEntrega}>Continuar com a entrega</ButtonAdicionar>
                </div>
                    {isHidden && (
                        <Checkout />
                    )}
                
            </S.Sidebar>      
    </S.CartContainer >
    )
}

export default Cart