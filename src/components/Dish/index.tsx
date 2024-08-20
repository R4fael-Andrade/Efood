import {Card, Infos, ContainerTitle, Title, Star, Description, Assessment, Image, More, ButtonLink} from './styles'
import Tag from '../Tag'
import star from '../../assets/images/estrela.png'

type Props = {
    image?: string
    title: string
    description: string
    infos: string[]
    assessment: string
}

const Dish = ({title, description, image, infos, assessment}: Props) => (
    <Card>
        <Image src={image} alt={title} />
        <Infos>
            {infos.map((info) => (
                <Tag size='small' key={info}>{info}</Tag>
            ))}
        </Infos>
        <ContainerTitle>
            <Title>{title}</Title>
            <div style={{display: 'flex'}}>
            <Assessment>{assessment}</Assessment>
            <Star src={star} alt={title} />
            </div>
        </ContainerTitle>
        <Description>
            {description}
        </Description>
        <ButtonLink to="/food">Saiba mais</ButtonLink>
    </Card>
)

export default Dish