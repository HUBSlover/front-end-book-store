import { IProduct } from './product.inteface'
import { IUser } from './user.interface'

export interface IFullUser extends IUser {
	favorites: IProduct[]
}
