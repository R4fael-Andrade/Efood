import { useDispatch } from "react-redux";
import * as S from "./styles";
import {ButtonAdicionar} from '../../styles'

import { adicionar } from "../../store/reducers/carrinho";

import close from "../../assets/images/fechar.png";
import { useState } from "react";
import { CardapioItem } from '../../pages/Home'

export const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(preco)
}

const CardFood = ({
    descricao,
    foto,
    id,
    nome,
    preco,
    porcao
}: CardapioItem) => {
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    
    const handleAdicionarAoCarrinho = () => {
    const item = {
            descricao,
            foto,
            id,
            nome,
            preco,
            porcao
        };
    dispatch(adicionar(item));
    };

    return (
    <>
        <li key={id}>
            <S.Card onClick={() => setModalOpen(true)}>
                <S.Image src={foto} />
                <S.Title>{nome}</S.Title>
                <S.Description>{descricao.slice(0, 240) + '...'}</S.Description>
                <ButtonAdicionar onClick={handleAdicionarAoCarrinho}>
                    Adicionar ao carrinho
                </ButtonAdicionar>
            </S.Card>
        </li>
        <S.Modal className={modalOpen ? "visivel" : ""}>
            <S.ModalContent className="container">
                <header>
                <img
                    src={close}
                    alt="Icone de fechar"
                    onClick={() => setModalOpen(false)}
                />
                </header>
                <div className="inforCard">
                <img src={foto} alt={nome} />
                <div>
                    <h3>{nome}</h3>
                    <p>{descricao}</p>
                    <p>Serve de {porcao} </p>
                    <ButtonAdicionar onClick={handleAdicionarAoCarrinho}>
                    Adicionar ao carrinho - {formataPreco(preco)}
                    </ButtonAdicionar>
                </div>
            </div>
            </S.ModalContent>
        <div className="overlay" onClick={() => setModalOpen(false)}></div>
        </S.Modal>
    </>
    );
};

export default CardFood;
