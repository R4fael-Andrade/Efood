import DishClass from '../../models/Dish'
import Dish from '../Dish'
import { List,Container } from './styles'

export type Props = {
    dish: DishClass[]
}

const DishList = ({dish}: Props) => (
    <Container>
        <List>
            {dish.map((infor) => (
                <Dish 
                    key={infor.id}
                    title={infor.title}
                    description={infor.description}
                    assessment={infor.assessment}
                    infos={infor.infos}
                    image={infor.image}
                />
            ))}
        </List>
    </Container>
)

export default DishList