import {HeroContainer, Title, LogoImg} from './styles'

import bannerImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logoEfood.png'
const Hero = () => (
    <HeroContainer style={{backgroundImage: `url(${bannerImg})`}} >
        <LogoImg src={logo} />
        <Title>
            Viva experiências gastronômicas no conforto da sua casa
        </Title>
    </HeroContainer>
)

export default Hero