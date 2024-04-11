export interface IUser {
	id: string
	email: string
	name: string
	avatarPath: string
	phone: string
}

export interface IAuthResponse {
	user: IUser
}
