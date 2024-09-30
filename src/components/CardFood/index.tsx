import { useDispatch } from "react-redux";
import { useState } from "react";
import {ButtonAdicionar} from '../../styles'

import { adicionar } from "../../store/reducers/carrinho";
import { open } from "../../store/reducers/carrinho";

import { CardapioItem } from '../../pages/Home'
import Button from "../Button";

import close from "../../assets/images/fechar.png";
import * as S from "./styles";

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
    dispatch(open())
    };

    return (
    <>
        <li key={id}>
            <S.Card onClick={() => setModalOpen(true)}>
                <S.Image src={foto} />
                <S.Title>{nome}</S.Title>
                <S.Description>{descricao.slice(0, 240) + '...'}</S.Description>
                <Button 
                type="button"
                title="Adicionar ao carrinho"
                onClick={() => setModalOpen(true)}>
                    Adicionar ao carrinho
                </Button>
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
