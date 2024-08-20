import * as S from './styles'

type Props = {
    image: string,
    title: string,
    description: string
}

const CardFood = ({image, title, description}: Props) => (
    <S.Card>
        <S.Image src={image} />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.ButtonAdicionar>Adicionar ao carrinho</S.ButtonAdicionar>
    </S.Card>
)

export default CardFood