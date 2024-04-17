import { EnumProductSort } from '@/types/enum.product.sort'
import { FC } from 'react'

const SortDropdown: FC = () => {
	return (
		<div className="text-right mb-5">
			<select className="appearance-none py-1 px-2 bg-white border-gray">
				{(
					Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
				).map((key) => {
					return (
						<option value={EnumProductSort[key]}>{EnumProductSort[key]}</option>
					)
				})}
			</select>
		</div>
	)
}

export default SortDropdown
