import logo from '../../assets/images/logoEfood.png'
import instagram from '../../assets/images/instagramIcon.png'
import facebook from '../../assets/images/facebookIcon.png'
import twitter from '../../assets/images/twitterIcon.png'

import * as S from './styles'

const Footer = () => (
    <S.FooterContainer>
            <S.LogoImg src={logo} />
            <S.List>
                <li>
                    <a href="https://www.instagram.com/">
                        <S.ListItem src={instagram} />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/">
                        <S.ItemCenter src={facebook} />
                    </a>
                </li>
                <li>
                    <a href="https://x.com/">
                        <S.ListItem src={twitter} />
                    </a>
                </li>
            </S.List>
            <S.Description>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
            </S.Description>
    </S.FooterContainer>
)

export default Footer