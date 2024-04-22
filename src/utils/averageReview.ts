import { IProduct } from '@/interfaces/product.inteface'
import { IReview } from '@/interfaces/review.interface'

export const calculateAverageRating = (product: IProduct) => {
	return (
		Math.round(
			product.reviews.reduce(
				(acc: number, review: IReview) => acc + review.rating,
				0
			) / product.reviews.length
		) || 0
	)
}
