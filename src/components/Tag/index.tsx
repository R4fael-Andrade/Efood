import {TagContainer} from './styles'

export type Props = {
    size: 'small' | 'normal'
    children: string
}

const Tag = ({children}: Props) => (
    <TagContainer size='small'>{children}</TagContainer>
)

export default Tag