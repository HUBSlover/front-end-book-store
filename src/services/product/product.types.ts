export const PRODUCTS = 'products'

export type TypeProductData = {
	name: string
	author: string
	price: number
	description?: string
	images: string[]
	categoryId: number
}

export type TypeProductDataFilters = {
	sort?: string
	searchTerm?: string
	page?: string | number
	perPage?: string | number
	author?: string
	priceMin?: number
	priceMax?: number
	currentProductId?: string
	category?: string
}
