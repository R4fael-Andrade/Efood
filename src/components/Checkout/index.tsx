import { useFormik } from "formik"
import * as Yup from 'yup'
import { ButtonAdicionar } from "../../styles"
import * as S from './styles'
import { useDispatch, useSelector } from "react-redux"
import { display, paymentOpen } from '../../store/reducers/carrinho'
import { usePurchaseMutation } from "../../services/api"
import { RootReducer } from "../../store"
import Button from "../Button"
import { useState } from "react"
import { formataPreco } from "../CardFood"

const Checkout = () => {
    const [ purchase, {data, isSuccess, isLoading} ] = usePurchaseMutation()
    const {itens, menuCardOpen} = useSelector((state: RootReducer) => state.carrinho)
    const [isPaymentFormVisible, setPaymentFormVisible] = useState(false)
    const dispatch = useDispatch()

    const returnCart = () => {
        dispatch(display())
    }

    const openPayment = () => {
        dispatch(paymentOpen())
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
            endereco: Yup.string().min(10 , 'O endereço precisa ter pelo menos 10 caracteres').required('O campo é obrigatório'),
            cidade: Yup.string().min(5 , 'Cidade precisa ter pelo menos 5 caracteres').required('O campo é obrigatório'),
            cep: Yup.string().min(5, 'O nome precisa ter pelo menos 5 caracteres').required('O campo é obrigatório'),
            numero: Yup.string().required('O campo é obrigatório'),
            complemento: Yup.string().required('O campo é obrigatório')
        }),
        onSubmit: (values) => {
            setPaymentFormVisible(true)
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
            numberCard: Yup.string().min(16, 'O número do cartão deve conter 16 dígitos').max(16, 'O número do cartão deve conter 16 dígitos').required('O campo é obrigatório'),
            codeCard: Yup.string().min(3, 'O código deve ter 3 dígitos').max(3, 'O código deve conter 3 dígitos').required('O campo é obrigatório'),
            expiresMonth: Yup.string().min(2, 'O campo deve ter 2 dígitos').max(2, 'O campo deve ter 2 dígitos').required('O campo é obrigatório'),
            expiresYear: Yup.string().min(2, 'O campo deve ter 2 dígitos').max(2, 'O campo deve ter 2 dígitos').required('O campo é obrigatório')

        }),
        onSubmit: (paymentsValues) => {
            purchase({
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
        }
    })

    const checkInputHasError = (fieldName: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isTouched && isInvalid
        return hasError
    }

    return (
        <>
            {!isPaymentFormVisible && (
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
            <input type="text" id="cep"
            name="cep"
            value={form.values.cep}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('cep') ? 'error' : ''}
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
    
            <ButtonAdicionar onClick={returnCart}>
                Voltar para o carrinho
                </ButtonAdicionar>
                </S.Form>
            </>
        )}

            {isPaymentFormVisible && (
                <>
                <S.Form onSubmit={paymentForm.handleSubmit}>
                    <h2>Pagamento - valor a pagar {formataPreco()} </h2>
                    <label htmlFor="nameCard">Nome no cartão</label>
                    <input type="text" id="nameCard"
                    name="nameCard"
                    value={paymentForm.values.nameCard}
                    onChange={paymentForm.handleChange}
                    onBlur={paymentForm.handleBlur}
                    className={checkInputHasError('nameCard') ? 'error' : ''}
                    />
                    <label htmlFor="numberCard">Número do cartão</label>
                    <input type="text" id="numberCard"
                    name="numberCard"
                    value={paymentForm.values.numberCard}
                    onChange={paymentForm.handleChange}
                    onBlur={paymentForm.handleBlur}
                    className={checkInputHasError('numberCard') ? 'error' : ''}
                    />
                    <label htmlFor="codeCard">CVV</label>
                    <input type="text" id="codeCard"
                    name="codeCard"
                    value={paymentForm.values.codeCard}
                    onChange={paymentForm.handleChange}
                    onBlur={paymentForm.handleBlur}
                    className={checkInputHasError('codeCard') ? 'error' : ''}
                    />
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <input type="text" id="expiresMonth"
                    name="expiresMonth"
                    value={paymentForm.values.expiresMonth}
                    onChange={paymentForm.handleChange}
                    onBlur={paymentForm.handleBlur}
                    className={checkInputHasError('expiresMonth') ? 'error' : ''}
                    />
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input type="text" id="expiresYear"
                    name="expiresYear"
                    value={paymentForm.values.expiresYear}
                    onChange={paymentForm.handleChange}
                    onBlur={paymentForm.handleBlur}
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                    />
                    <Button
                    title="Finalizar compra"
                    type="submit"
                    disabled={isLoading}
                    onClick={paymentForm.handleSubmit}
                    >
                        Finalizar compra
                    </Button>
                    <Button
                    title="Finalizar compra"
                    type="button"
                    disabled={isLoading}
                    onClick={() => setPaymentFormVisible(false)}
                    >
                        Voltar para edição de endereço 
                    </Button>
                </S.Form>
                </>
            )}

        </>
    )
}

export default Checkout