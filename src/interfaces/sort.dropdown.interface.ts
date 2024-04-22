import { EnumProductSort } from '@/types/enum.product.sort'
import { Dispatch, SetStateAction } from 'react'

export interface ISortDropdown {
	sortType: EnumProductSort
	setSortType: Dispatch<SetStateAction<EnumProductSort>>
}
