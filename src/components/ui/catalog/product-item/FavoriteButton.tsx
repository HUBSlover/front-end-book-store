import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import cn from 'clsx'
import { useProfile } from '@/components/hooks/useProfile'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'orange' | 'light'
}

const FavoriteButton: FC<{ productId: string }> = ({ productId }) => {
	const { profile } = useProfile()

	//const isExists = profile.favorites.some(favorite.id === productId)

	return (
		<div className="text-primary">
			<button>Button</button>
		</div>
	)
}

export default FavoriteButton
