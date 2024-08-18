import DishClass from '../../models/Dish'
import DishList from '../../components/DishList'

import sushi from '../../assets/images/sushi.png'
import macarronada from '../../assets/images/macarronada.png'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

const informations: DishClass[] = [
    {
        id: 1,
        title: 'Hioki Sushi ',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        assessment: '4.9',
        image: sushi,
        infos: ['Destaque da semana', 'Japonesa']
    },
    {
        id: 2,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        assessment: '4.6',
        image: macarronada,
        infos: ['Italiana']
    },
    {
        id: 3,
        title: 'Prato 3',
        description: 'descrp Prato 3',
        assessment: '4.0',
        image: sushi,
        infos: ['Japonesa', 'Mais pedida']
    },
    {
        id: 4,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        assessment: '4.6',
        image: macarronada,
        infos: ['Italiana']
    },
    {
        id: 5,
        title: 'Prato 3',
        description: 'descrp Prato 3',
        assessment: '4.0',
        image: sushi,
        infos: ['Japonesa', 'Mais pedida']
    },
    {
        id: 6,
        title: 'Prato 3',
        description: 'descrp Prato 3',
        assessment: '4.0',
        image: sushi,
        infos: ['Japonesa', 'Mais pedida']
    },
]

const Home = () => (
    <>
        <Hero />
        <DishList dish={informations} />
        <Footer />
    </>
)

export default Home