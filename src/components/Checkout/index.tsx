import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useFormik } from "formik"
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { clear, display } from '../../store/reducers/carrinho'
import { usePurchaseMutation } from "../../services/api"
import { RootReducer } from "../../store"

import Button from "../Button"
import { formataPreco } from "../CardFood"

import { getTotalPrice } from "../../utils"

import * as S from './styles'

const Checkout = () => {
    const [ purchase, {data, isSuccess, isLoading} ] = usePurchaseMutation()
    const { itens } = useSelector((state: RootReducer) => state.carrinho)
    const [isPaymentFormVisible, setPaymentFormVisible] = useState(false)
    const [formAdress, setFormAdress] = useState(true)
    const dispatch = useDispatch()

    const returnCart = () => {
        dispatch(display())
    }

    const form = useFormik({
        initialValues: {
            destinatario: '',
            endereco: '',
            cidade: '',
            cep: '',
            numero: '',
            complemento: ''
        },
        validationSchema: Yup.object({
            destinatario: Yup.string().min(5, 'O nome precisa ter pelo menos 5 caracteres').required('O campo é obrigatório'),
            endereco: Yup.string().required('O campo é obrigatório'),
            cidade: Yup.string().required('O campo é obrigatório'),
            cep: Yup.string().required('O campo é obrigatório'),
            numero: Yup.string().required('O campo é obrigatório'),
            complemento: Yup.string().required('O campo é obrigatório')
        }),
        onSubmit: (values) => {
            setPaymentFormVisible(true)
            setFormAdress(false)
        }
    })

    const paymentForm = useFormik({
        initialValues: {
            nameCard: '',
            numberCard: '',
            codeCard: '',
            expiresMonth: '',
            expiresYear: ''
        },
        validationSchema: Yup.object({
            nameCard: Yup.string().required('O campo é obrigatório'),
            numberCard: Yup.string().required('O campo é obrigatório'),
            codeCard: Yup.string().max(3, 'O campo deve conter 3 dígitos').required('O campo é obrigatório'),
            expiresMonth: Yup.string().required('O campo é obrigatório'),
            expiresYear: Yup.string().required('O campo é obrigatório')

        }),
        onSubmit:async (paymentsValues) => {
            try {

            
            await purchase({
                    delivery: {
                        receiver: form.values.destinatario,
                        adress: {
                            description: form.values.endereco,
                            city: form.values.cidade,
                            zipCode: form.values.cep,
                            numberHouse: Number(form.values.numero),
                            complement: form.values.complemento
                        }
                    },
                    payment: {
                        card: {
                            name: paymentsValues.nameCard,
                            numberCard: paymentsValues.numberCard,
                            code: Number(paymentsValues.codeCard),
                            expires: {
                                month: Number(paymentsValues.expiresMonth),
                                year: Number(paymentsValues.expiresYear)
                            }
                        }
                    },
                    products: itens.map((item) => ({
                        id: item.id,
                        price: item.preco
                    }))
                }) 
                
            }catch (error) {
                    console.error('Erro ao finalizar a compra', error)
                }
        }
    })

    const checkInputHasError = (fieldName: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isTouched && isInvalid
        return hasError
    }

    const checkInputPaymentsHasError = (fieldName: string) => {
        const isTouched = fieldName in paymentForm.touched
        const isInvalid = fieldName in paymentForm.errors
        const hasError = isTouched && isInvalid
        return hasError
    }

    const returnAdress = () => {
        setFormAdress(true)
        setPaymentFormVisible(false)
    }

    useEffect(() => {
        if(isSuccess) {
            dispatch(clear())
        }
    }, [isSuccess, dispatch])

    return (
        <>
            {isSuccess && data ?  (
                <S.Confirmation> 
                <h2>Pedido realizado - {data.orderId} </h2>
                <p>
                    Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido. <br/> <br/>
                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. <br/> <br/>
                Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.<br/> <br/>
                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite
                </p>
                <Button
                type="link"
                title="Concluir pedido"
                to="/"
                onClick={returnCart}
                >Concluir</Button>
                </S.Confirmation>
            ) : (
                <>
            {formAdress && (
                <>
                <S.Form>
                <h2>Entrega</h2>
                <label htmlFor="destinatario">Quem irá receber</label>
                <input type="text" id="destinatario" 
                name="destinatario"
                value={form.values.destinatario}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('destinatario') ? 'error' : ''}
                />
                <label htmlFor="endereco">Endereço</label>
                <input type="text" id="endereco"
                name="endereco"
                value={form.values.endereco}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('endereco') ? 'error' : ''}
                />
                <label htmlFor="cidade">Cidade</label>
                <input type="text" id="cidade"
                name="cidade"
                value={form.values.cidade}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cidade') ? 'error' : ''}
                />
                <div>
                <div>
                <label htmlFor="cep">CEP</label>
                <InputMask type="text" id="cep"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cep') ? 'error' : ''}
                mask="99999-999"
                />
                </div>
                <div>
                <label htmlFor="number">Número</label>
                <input type="text" id="number"
                name="numero"
                value={form.values.numero}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('numero') ? 'error' : ''}
                />
                </div>
                </div>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input type="text" id="complement"
                name="complemento"
                value={form.values.complemento}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('complemento') ? 'error' : ''}
                />
        
                <Button
                title="Clique aqui para finalizar a compra"
                type="button"
                onClick={form.handleSubmit}
                disabled={isLoading}
                >
                    Continuar com o pagamento
                </Button>
        
                <Button
                type="button"
                title="Voltar para o carrinho"
                onClick={returnCart}>
                    Voltar para o carrinho
                    </Button>
                    </S.Form>
                </>
            )}

            {isPaymentFormVisible && (
                <>
                <S.Form onSubmit={paymentForm.handleSubmit}>
                    <h2>Pagamento - valor a pagar {formataPreco(getTotalPrice(itens))} </h2>
                    <label htmlFor="nameCard">Nome no cartão</label>
                    <input type="text" id="nameCard"
                    name="nameCard"
                    value={paymentForm.values.nameCard}
                    onChange={paymentForm.handleChange}
                    onBlur={paymentForm.handleBlur}
                    className={checkInputPaymentsHasError('nameCard') ? 'error' : ''}
                    />
                    <label htmlFor="numberCard">Número do cartão</label>
                    <InputMask type="text" id="numberCard"
                    name="numberCard"
                    value={paymentForm.values.numberCard}
                    onChange={paymentForm.handleChange}
                    onBlur={paymentForm.handleBlur}
                    className={checkInputPaymentsHasError('numberCard') ? 'error' : ''}
                    mask="9999 9999 9999 9999"
                    />
                    <label htmlFor="codeCard">CVV</label>
                    <InputMask type="text" id="codeCard"
                    name="codeCard"
                    value={paymentForm.values.codeCard}
                    onChange={paymentForm.handleChange}
                    onBlur={paymentForm.handleBlur}
                    className={checkInputPaymentsHasError('codeCard') ? 'error' : ''}
                    mask="999"
                    />
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask type="text" id="expiresMonth"
                    name="expiresMonth"
                    value={paymentForm.values.expiresMonth}
                    onChange={paymentForm.handleChange}
                    onBlur={paymentForm.handleBlur}
                    className={checkInputPaymentsHasError('expiresMonth') ? 'error' : ''}
                    mask="99"
                    />
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask type="text" id="expiresYear"
                    name="expiresYear"
                    value={paymentForm.values.expiresYear}
                    onChange={paymentForm.handleChange}
                    onBlur={paymentForm.handleBlur}
                    className={checkInputPaymentsHasError('expiresYear') ? 'error' : ''}
                    mask="99"
                    />
                    <Button
                    title="Finalizar compra"
                    type="submit"
                    disabled={isLoading}
                    onClick={paymentForm.handleSubmit}
                    >
                        {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
                    </Button>
                    <Button
                    title="Finalizar compra"
                    type="button"
                    disabled={isLoading}
                    onClick={returnAdress}
                    >
                        Voltar para edição de endereço 
                    </Button>
                </S.Form>
                </>
            )}
                </>
            )}
        </>
    )
}

export default Checkout