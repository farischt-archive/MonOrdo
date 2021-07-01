import UserModel from "./User"
import AuthTokenModel from "./AuthToken"
import AccountConfirmationTokenModel from "./AccountConfirmationToken"
import PasswordResetTokenModel from "./PasswordResetToken"
import AssetModel from "./Asset"
import DoctorModel from "./Doctor"

export default (sequelize) => {
  const User = UserModel(sequelize)
  const AuthToken = AuthTokenModel(sequelize, User)
  const AccountConfirmationToken = AccountConfirmationTokenModel(
    sequelize,
    User
  )
  const PasswordResetToken = PasswordResetTokenModel(sequelize, User)
  const Asset = AssetModel(sequelize)
  const Doctor = DoctorModel(sequelize, Asset)

  return {
    User,
    AuthToken,
    AccountConfirmationToken,
    PasswordResetToken,
    Asset,
    Doctor,
  }
}
