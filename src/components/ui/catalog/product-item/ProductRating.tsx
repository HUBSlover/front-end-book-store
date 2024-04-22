import { IProduct } from '@/interfaces/product.inteface'
import { calculateAverageRating } from '@/utils/averageReview'
import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
	const [rating, setRating] = useState(calculateAverageRating(product))

	return (
		<div className="mb-2">
			{!!product.reviews.length && (
				<span className="mr-1 inline-flex items-center">
					<Rating
						readonly
						initialValue={rating}
						SVGstyle={{
							display: 'inline-block'
						}}
						size={20}
						allowFraction
						transition
					/>

					<span
						style={{
							color: 'yellow'
						}}
						className="text-sm m1-1"
					>
						{rating}
					</span>
				</span>
			)}

			<span className="text-xs">({product.reviews.length} reviews)</span>
		</div>
	)
}
