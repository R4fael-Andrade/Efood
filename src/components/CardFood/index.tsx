import { useDispatch } from "react-redux";
import * as S from "./styles";

import { adicionar } from "../../store/reducers/carrinho";

import close from "../../assets/images/fechar.png";
import { useState } from "react";

type Props = {
    image: string;
    title: string;
    description: string;
    id: number;
    infos: string[];
    assessment: string;
};

const CardFood = ({
    image,
    title,
    description,
    id,
    infos,
    assessment,
}: Props) => {
    const dispatch = useDispatch();

    const handleAdicionarAoCarrinho = () => {
    const item = {
        image,
        title,
        description,
        id,
        assessment,
        infos,
        };
    dispatch(adicionar(item));
    };

    const [modalOpen, setModalOpen] = useState(false);
    return (
    <>
        <S.Card onClick={() => setModalOpen(true)}>
        <S.Image src={image} />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.ButtonAdicionar onClick={handleAdicionarAoCarrinho}>
            Adicionar ao carrinho
        </S.ButtonAdicionar>
        </S.Card>
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
            <img src={image} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <S.ButtonAdicionar onClick={handleAdicionarAoCarrinho}>
                Adicionar ao carrinho
                </S.ButtonAdicionar>
            </div>
        </div>
        </S.ModalContent>
        <div className="overlay" onClick={() => setModalOpen(false)}></div>
        </S.Modal>
    </>
    );
};

export default CardFood;
