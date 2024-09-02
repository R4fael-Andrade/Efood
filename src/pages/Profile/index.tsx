
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import CardFoodList from "../../components/CardFoodList"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { CardapioItem } from "../Home"
import Cart from "../../components/Cart"


const Profile = () => {
    const { id } = useParams()
    
    const [pratos, setPratos] = useState<CardapioItem[]>([])
    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json()).then((data) => setPratos(data.cardapio))
        .catch((error) => console.error('Error fetching data:', error));
    }, [id])

    if (!pratos) {
        return <h2>Carregando...</h2>
    }

    return (
        (
            <>
            
                <Header />
                <CardFoodList food={pratos} />
                <Cart />
                <Footer />
            </>
        )
        
    )
}
export default Profile