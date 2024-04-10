import { IProduct } from './product.inteface'

export interface ICartItem {
	id: string
	product: IProduct
	quantity: number
	price: number
}
