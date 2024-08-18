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
                <ListItem src={instagram} />
            </li>
            <li>
                <ItemCenter src={facebook} />
            </li>
            <li>
                <ListItem src={twitter} />
            </li>
        </List>
        <Description>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
        </Description>
    </FooterContainer>
)

export default Footer