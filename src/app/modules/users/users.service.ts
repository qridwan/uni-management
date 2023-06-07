import config from '../../../config'
import ApiError from '../../../errors/ApiError'
import { logger } from '../../../shared/logger'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createuser = await User.create(user)
  logger.info('createuser: ', createuser)
  //auto generate increamental id
  const id = await generateUserId()
  user.id = id
  // default password
  if (!user.password) {
    user.password = config.default_user_password as string
  }

  if (!createuser) {
    throw new ApiError(400, 'Failed to create user')
  }
  return createuser
}

export default {
  createUser,
}
