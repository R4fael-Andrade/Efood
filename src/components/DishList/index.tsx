
import Dish from '../Dish'
import { List, Container } from './styles'
import { Restaurante } from '../../pages/Home'
import { useEffect } from 'react'

export type Props = {
    dish: Restaurante[]
}

const DishList = ({ dish }: Props) => {


    return (
    <Container>
        <List>
            {dish.map((infor) => (
                <Dish 
                    avaliacao={infor.avaliacao}
                    titulo={infor.titulo}
                    tipo={infor.tipo}
                    capa={infor.capa}
                    key={infor.id}
                    id={infor.id}
                    cardapio={infor.cardapio}
                    destacado={infor.destacado}
                    descricao={infor.descricao}
                />
            ))}
        </List>
    </Container>
)}

export default DishList