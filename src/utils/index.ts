import { CardapioItem } from "../pages/Home"

export const getTotalPrice = (itens: CardapioItem[]) => {
    return itens.reduce((acumulador: number, valorAtual) => {
        return (acumulador += valorAtual.preco!)
    }, 0)
}