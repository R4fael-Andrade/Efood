import CardFood from '../CardFood'
import { CardapioItem } from '../../pages/Home'

import { List } from './styles'

type Props = {
    food: CardapioItem[]
}

const CardFoodList = ({food}: Props) => {
    return (
        <div className='container'>
            <List>
            {food.map((f) => ( 
                <CardFood 
                    descricao={f.descricao}
                    foto={f.foto}
                    id={f.id}
                    nome={f.nome}
                    preco={f.preco}
                    key={f.id}
                    porcao={f.porcao}
                />     
            ))}
            </List>
        </div>
    )
}

export default CardFoodList