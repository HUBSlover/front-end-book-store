import { ICategory } from './category.interface'
import { IReview } from './review.interface'

export interface IProduct {
	id: string
	name: string
	author: string
	slug: string
	description: string
	price: number
	reviews: IReview[]
	images: string[]
	createdAt: string
	category: ICategory
}
