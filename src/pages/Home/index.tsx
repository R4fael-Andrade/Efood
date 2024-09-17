import { useEffect, useState } from 'react'
import DishList from '../../components/DishList'

import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

export type CardapioItem = {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao?: string
}

export  type Restaurante = {
    avaliacao: number
    capa: string
    cardapio: CardapioItem[]
    destacado?: boolean
    id: number
    tipo: string
    titulo: string
    descricao: string
}

const Home = () => {
    const [restaurant, setRestaurant] = useState<Restaurante[]>([])
    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then((res) => res.json().then((res) => setRestaurant(res)))
    }, [])

    return (
        <>
            <Hero />
            <DishList dish={restaurant} />
            <Footer />
        </>
    )
}

export default Home