import {HeaderContainer, Titles, LogoImg, ContainerPresentation, TagPresentation, TitlePresentation} from './styles'

import fundoHeader from '../../assets/images/fundo.png'
import logoImg from '../../assets/images/logoEfood.png'
import apresentacao from '../../assets/images/imgApresentacao.png'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
const Header = () => {
    const itens = useSelector((state:RootReducer) => state.carrinho.itens)
    return (
        <>
            <HeaderContainer style={{backgroundImage: `url(${fundoHeader})`}} >
                
               <div className="container">
               <Titles>Restaurantes</Titles>
                <LogoImg src={logoImg} />
                <Titles> {itens.length} produto(s) no carrinho</Titles>
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