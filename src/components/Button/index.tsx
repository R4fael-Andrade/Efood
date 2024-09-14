import {ButtonContainer} from './styles'

export type Props = {
    type?: 'button' | 'link' | 'submit'
    title: string
    onClick?: () => void
    children: string
    disabled: boolean
}

const Button = ({children, disabled, title, onClick}: Props) => {
    return (
        <ButtonContainer
        title={title}
        disabled={disabled}
        onClick={onClick}
        >
        {children}
        </ButtonContainer>
    )
}

export default Button