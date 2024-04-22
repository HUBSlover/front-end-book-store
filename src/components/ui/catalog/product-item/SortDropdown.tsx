import { ISortDropdown } from '@/interfaces/sort.dropdown.interface'
import { MapProductSortEn, MapProductSortRu } from '@/types/map.product.sorts'
import { FC } from 'react'

const SortDropdown: FC<ISortDropdown> = ({ setSortType, sortType }) => {
	return (
		<div className="text-right mb-5">
			<select
				value={sortType}
				onChange={(e) => {
					setSortType(e.target.value as any)
				}}
				className="appearance-none py-1 px-2 bg-white border-gray"
			>
				{Array.from(MapProductSortRu).map(([key, value]) => {
					console.log(key, value)
					return (
						<option key={key} value={value}>
							{value}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default SortDropdown
