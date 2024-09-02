import {HeaderContainer, Titles, LogoImg, ContainerPresentation, TagPresentation, TitlePresentation, LinkTitle} from './styles'

import fundoHeader from '../../assets/images/fundo.png'
import logoImg from '../../assets/images/logoEfood.png'
import apresentacao from '../../assets/images/imgApresentacao.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/carrinho'

const Header = () => {
    const itens = useSelector((state:RootReducer) => state.carrinho.itens)
    const dispatch = useDispatch()

    const openCart = () => {
        dispatch(open())
    }

    return (
        <>
            <HeaderContainer style={{backgroundImage: `url(${fundoHeader})`}} >
                
                <div className="container">
                <LinkTitle to="/">Restaurantes</LinkTitle>
                <LogoImg src={logoImg} />
                <Titles onClick={openCart} > {itens.length} produto(s) no carrinho</Titles>
                </div>
                
            </HeaderContainer>
            <ContainerPresentation style={{backgroundImage: `url(${apresentacao})`}}>
                <div className="container">
                <TagPresentation>
                    Italiana
                </TagPresentation>
                <TitlePresentation>
                    La Dolce Vita Trattoria
                </TitlePresentation>
                </div>
            </ContainerPresentation>
        </>
    )
}

export default Header