import { instance } from '@/api/api.interceptor'
import { IEmailPassword } from '@/store/user/user.interface'
import { ICategory } from '@/types/category.interface'
import { IOrder } from '@/types/order.interface'
import { IReview } from '@/types/review.interface'
import axios from 'axios'

const ORDERS = 'orders'

export const OrderService = {
	async getAll() {
		return instance<IOrder[]>({
			url: ORDERS,
			method: 'GET'
		})
	}
}
