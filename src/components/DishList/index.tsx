import Dish from '../Dish'
import { Restaurante } from '../../pages/Home'

import * as S from './styles'

export type Props = {
    dish: Restaurante[]
}

const DishList = ({ dish }: Props) => {
    return (
    <S.Container>
        <S.List>
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
        </S.List>
    </S.Container>
)}

export default DishList