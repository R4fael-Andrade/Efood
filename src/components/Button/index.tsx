export type Props = {
    type?: 'button' | 'link' | 'submit'
    title: string
    onClick?: () => void
    children: string
    disabled: boolean
}

const Button = ({children, disabled, title, onClick}: Props) => {
    return (
        <button
        title={title}
        disabled={disabled}
        onClick={onClick}
        >
        {children}
        </button>
    )
}

export default Button