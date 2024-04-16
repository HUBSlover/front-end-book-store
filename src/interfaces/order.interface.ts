import { EnumOrderStatus } from '../types/order.status'
import { ICartItem } from './cart.interface'
import { IUser } from './user.interface'

export interface IOrder {
	id: number
	createdAt: string
	items: ICartItem[]
	status: EnumOrderStatus
	user: IUser
}
