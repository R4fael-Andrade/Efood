import DishClass from '../../models/Dish'
import DishList from '../../components/DishList'

import sushi from '../../assets/images/sushi.png'

const informations: DishClass[] = [
    {
        id: 1,
        title: 'Prato 1',
        description: 'descrp Prato 1',
        assessment: '5.0',
        image: sushi,
        infos: ['Japonesa', 'Mais pedida']
    },
    {
        id: 2,
        title: 'Prato 2',
        description: 'descrp Prato 2',
        assessment: '2.0',
        image: sushi,
        infos: ['Japonesa', 'Mais pedida']
    },
    {
        id: 3,
        title: 'Prato 3',
        description: 'descrp Prato 3',
        assessment: '4.0',
        image: sushi,
        infos: ['Japonesa', 'Mais pedida']
    },
]

const Menu = () => (
    <>
        <DishList dish={informations} />
    </>
)

export default Menu