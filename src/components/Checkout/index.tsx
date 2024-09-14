import { useFormik } from "formik"
import * as Yup from 'yup'
import { ButtonAdicionar } from "../../styles"
import * as S from './styles'
import { useDispatch, useSelector } from "react-redux"
import { display} from '../../store/reducers/carrinho'
import { usePurchaseMutation } from "../../services/api"
import { RootReducer } from "../../store"
import Button from "../Button"

const Checkout = () => {
    const [ purchase, {data, isSuccess, isLoading} ] = usePurchaseMutation()
    const {itens} = useSelector((state: RootReducer) => state.carrinho)
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
            complemento: '',
            nameCard: '',
            numberCard: '',
            codeCard: '',
            expiresMonth: '',
            expiresYear: ''
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
            purchase({
                delivery: {
                    receiver: values.destinatario,
                    adress: {
                        description: values.endereco,
                        city: values.cidade,
                        zipCode: values.cep,
                        numberHouse: Number(values.numero),
                        complement: values.complemento
                    }
                },
                payment: {
                    card: {
                        name: values.nameCard,
                        numberCard: values.numberCard,
                        code: Number(values.codeCard),
                        expires: {
                            month: Number(values.expiresMonth),
                            year: Number(values.expiresYear)
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
            type="submit"
            onClick={form.handleSubmit}
            disabled={isLoading}
            >
                Continuar com o pagamento
            </Button>
    
            <ButtonAdicionar onClick={returnCart}>
                Voltar para o carrinho
            </ButtonAdicionar>
        </S.Form>
    )
}

export default Checkout