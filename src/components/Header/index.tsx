import {HeaderContainer, Titles, LogoImg, ContainerPresentation, TagPresentation, TitlePresentation} from './styles'

import fundoHeader from '../../assets/images/fundo.png'
import logoImg from '../../assets/images/logoEfood.png'
import apresentacao from '../../assets/images/imgApresentacao.png'
const Header = () => (
    <>
        <HeaderContainer style={{backgroundImage: `url(${fundoHeader})`}} >
        <Titles>Restaurantes</Titles>
        <LogoImg src={logoImg} />
        <Titles>0 produto(s) no carrinho</Titles>
        </HeaderContainer>
        <ContainerPresentation style={{backgroundImage: `url(${apresentacao})`}}>
            <TagPresentation>
                Italiana
            </TagPresentation>
            <TitlePresentation>
                La Dolce Vita Trattoria
            </TitlePresentation>
        </ContainerPresentation>
    </>
    
)

export default Header