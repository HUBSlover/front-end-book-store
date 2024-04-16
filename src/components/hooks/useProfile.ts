import { errorCatch } from '@/api/api.helper'
import { IFullUser } from '@/interfaces/full.user.interface'
import { UserService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

export const useProfile = () => {
	//const { user } = useAuth()
	const { data } = useQuery({
		queryKey: ['get profile'],
		queryFn: () => {
			UserService.getProfile(),
				{
					select: ({ data }) => data,
					onError: (error: any) => {
						console.log(errorCatch(error))
					}
					//enabled: !!user
				}
		}
	})

	// const { data } = useQuery(['get profile'], () => UserService.getProfile(), {
	// 	select: ({ data }) => data,
	// 	onError: (error) => {
	// 		console.log(errorCatch(error))
	// 	}
	// })

	return { profile: data || ({} as IFullUser) }
}
