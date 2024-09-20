import bannerImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logoEfood.png'

import * as S from './styles'

const Hero = () => (
    <S.HeroContainer style={{backgroundImage: `url(${bannerImg})`}} >
        <S.LogoImg src={logo} />
        <S.Title>
            Viva experiências gastronômicas no conforto da sua casa
        </S.Title>
    </S.HeroContainer>
)

export default Hero