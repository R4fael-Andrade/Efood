import {FooterContainer, List,ListItem,LogoImg, ItemCenter, Description} from './styles'

import logo from '../../assets/images/logoEfood.png'
import instagram from '../../assets/images/instagramIcon.png'
import facebook from '../../assets/images/facebookIcon.png'
import twitter from '../../assets/images/twitterIcon.png'

const Footer = () => (
    <FooterContainer>
            <LogoImg src={logo} />
            <List>
                <li>
                    <a href="https://www.instagram.com/">
                        <ListItem src={instagram} />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/">
                        <ItemCenter src={facebook} />
                    </a>
                </li>
                <li>
                    <a href="https://x.com/">
                        <ListItem src={twitter} />
                    </a>
                </li>
            </List>
            <Description>
            A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
            </Description>
    </FooterContainer>
)

export default Footer