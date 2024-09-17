import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
    id: number
    price: number 
}

type PurchasePayload = {
    products: Product[]
    delivery: {
        receiver: string
        adress: {
            description: string
            city: string
            zipCode: string
            numberHouse: number
            complement: string
        }
    }
    payment: {
        card: {
            name: string
            numberCard: string
            code: number
            expires: {
                month: number
                year: number
            }
        }
    }
}

type PurchaseResponse = {
    orderId: string
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
    }),
    endpoints: (builder) => ({
        purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        })
    })
})

export const { usePurchaseMutation } = api
export default api

