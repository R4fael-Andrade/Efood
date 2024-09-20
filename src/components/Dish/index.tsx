import Tag from '../Tag'
import { Restaurante } from '../../pages/Home'

import star from '../../assets/images/estrela.png'
import * as S from './styles'

const Dish = ({id, avaliacao, capa, cardapio, destacado, tipo, titulo, descricao}: Restaurante) => {
        
    return (
        <>
            <S.Card>
                <S.Image src={capa} alt={titulo} />
                <S.Infos>
                    <Tag size='small'>{tipo}</Tag>
                </S.Infos>
                <S.ContainerTitle>
                    <S.Title>{titulo}</S.Title>
                    <div style={{display: 'flex'}}>
                    <S.Assessment>{avaliacao}</S.Assessment>
                    <S.Star src={star} alt={titulo} />
                    </div>
                </S.ContainerTitle>
                <S.Description>
                    {descricao}
                </S.Description>
                <S.ButtonLink to={`/food/${id}`}>Saiba mais</S.ButtonLink>
            </S.Card>
        </>
    )
}

export default Dish