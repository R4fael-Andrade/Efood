
import CardFoodList from "../../components/CardFoodList"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

import {informations} from '../Home'

const Profile = () => (
    <>
        <Header />
        <CardFoodList food={informations} />
        <Footer />
    </>
    
)

export default Profile