import * as S from './styles'

export type Props = {
    type?: 'button' | 'link' | 'submit'
    title: string
    onClick?: () => void
    children: string
    disabled?: boolean
    to?: string
}

const Button = ({children, disabled, title, onClick, to, type}: Props) => {
    if(type === 'button' || type === 'submit') {
        return (
            <S.ButtonContainer
            title={title}
            disabled={disabled}
            onClick={onClick}
            >
            {children}
            </S.ButtonContainer>
        )
    }

    return (
        <S.ButtonLink to={to as string} title={title} onClick={onClick}>
            {children}
        </S.ButtonLink>
    )
}

export default Button