import { useDispatch } from 'react-redux'
import * as S from './styles'

import { adicionar } from '../../store/reducers/carrinho'

type Props = {
    image: string,
    title: string,
    description: string
    id: number
    infos: string[]
    assessment: string
}

const CardFood = ({image, title, description, id, infos, assessment}: Props) => {
    const dispatch = useDispatch();

    const handleAdicionarAoCarrinho = () => {
        const item = {
            image,
            title,
            description,
            id,
            assessment,
            infos

        };
        dispatch(adicionar(item));
    };
    return(
        <S.Card>
            <S.Image src={image} />
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <S.ButtonAdicionar
                onClick={handleAdicionarAoCarrinho}
            >Adicionar ao carrinho</S.ButtonAdicionar>
        </S.Card>
    )
}

export default CardFood