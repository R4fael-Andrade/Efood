import DishClass from '../../models/Dish'
import DishList from '../../components/DishList'

import sushi from '../../assets/images/sushi.png'
import macarronada from '../../assets/images/macarronada.png'
import calabresa from '../../assets/images/pizzaCalabreza.jpg'
import massaCozida from '../../assets/images/massaCozida.jpg'
import lasanha from '../../assets/images/lasanha.jpg'
import sorvete from '../../assets/images/sorvete.jpg'
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
        title: 'Pizza Calabresa',
        description: 'Deliciosa combinação de fatias generosas de calabresa temperada, cebolas frescas, orégano e queijo derretido sobre uma massa crocante, assada à perfeição. Sabor clássico e irresistível!',
        assessment: '4.8',
        image: calabresa,
        infos: ['Pizza']
    },
    {
        id: 4,
        title: 'Massa Cozida',
        description: 'Massa al dente, cozida à perfeição e acompanhada de um molho de sua escolha. Simples, saborosa e preparada com ingredientes frescos para uma refeição leve e deliciosa!',
        assessment: '4.9',
        image: massaCozida,
        infos: ['Italiana']
    },
    {
        id: 5,
        title: 'Lasanha à Bolonhesa',
        description: 'Camadas generosas de massa fresca intercaladas com um rico molho de carne bolonhesa, molho de tomate caseiro e uma cobertura gratinada de queijo derretido. Uma explosão de sabor em cada garfada!',
        assessment: '4.5',
        image: lasanha,
        infos: ['Massas']
    },
    {
        id: 6,
        title: 'Sorvete de Morango',
        description: 'Cremoso e refrescante, feito com morangos frescos e selecionados, trazendo o equilíbrio perfeito entre doçura e sabor frutado. Uma sobremesa irresistível para qualquer momento!',
        assessment: '4.0',
        image: sorvete,
        infos: ['Sorvetes']
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