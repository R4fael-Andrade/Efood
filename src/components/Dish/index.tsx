
import {Card, Infos, ContainerTitle, Title, Star, Description, Assessment, Image, ButtonLink} from './styles'
import Tag from '../Tag'
import star from '../../assets/images/estrela.png'
import { Restaurante } from '../../pages/Home'


const Dish = ({id, avaliacao, capa, cardapio, destacado, tipo, titulo, descricao}: Restaurante) => {
        
    return (
        <>
            <Card>
                <Image src={capa} alt={titulo} />
                <Infos>
                    <Tag size='small'>{tipo}</Tag>
                </Infos>
                <ContainerTitle>
                    <Title>{titulo}</Title>
                    <div style={{display: 'flex'}}>
                    <Assessment>{avaliacao}</Assessment>
                    <Star src={star} alt={titulo} />
                    </div>
                </ContainerTitle>
                <Description>
                    {descricao}
                </Description>
                <ButtonLink to={`/food/${id}`}>Saiba mais</ButtonLink>
            </Card>
        </>
    )
}

export default Dish