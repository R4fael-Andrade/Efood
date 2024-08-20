import Dish from '../../models/Dish'
import CardFood from '../CardFood'
import {List} from './styles'

type Props = {
    food: Dish[]
}

const CardFoodList = ({food}: Props) => (
    <div className='container'>
        <List>
        {food.map((f) => ( 
            <CardFood 
                id={f.id}
                assessment={f.assessment}
                infos={f.infos}
                image={f.image}
                title={f.title}
                description={f.description}
                key={f.id}
            />
                
        ))}
        </List>
    </div>
)

export default CardFoodList