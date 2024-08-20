import Food from '../../models/Dish'
import CardFood from '../CardFood'
import {List} from './styles'

export type Props = {
    food: Food[]
}

const CardFoodList = ({food}: Props) => (
    <div className='container'>
        <List>
        {food.map((f) => ( 
            <CardFood 
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