import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/carrinho'

import fundoHeader from '../../assets/images/fundo.png'
import logoImg from '../../assets/images/logoEfood.png'
import apresentacao from '../../assets/images/imgApresentacao.png'

import * as S from './styles'

const Header = () => {
    const itens = useSelector((state:RootReducer) => state.carrinho.itens)
    const dispatch = useDispatch()

    const openCart = () => {
        dispatch(open())
    }

    return (
        <>
            <S.HeaderContainer style={{backgroundImage: `url(${fundoHeader})`}} >
                <div className="container">
                <S.LinkTitle to="/">Restaurantes</S.LinkTitle>
                <S.LogoImg src={logoImg} />
                <S.Titles onClick={openCart} > {itens.length} produto(s) no carrinho</S.Titles>
                </div>
            </S.HeaderContainer>
            <S.ContainerPresentation style={{backgroundImage: `url(${apresentacao})`}}>
                <div className="container">
                    <S.TagPresentation>
                        Italiana
                    </S.TagPresentation>
                    <S.TitlePresentation>
                        La Dolce Vita Trattoria
                    </S.TitlePresentation>
                </div>
            </S.ContainerPresentation>
        </>
    )
}

export default Header