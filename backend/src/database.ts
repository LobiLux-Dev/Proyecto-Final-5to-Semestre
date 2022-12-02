import { Sequelize } from 'sequelize'
import { DATABASE_URI } from './config'

const sequelize = new Sequelize(DATABASE_URI)

export const connectDB = async () => {
  try {
    console.log('\n---------- Connecting to database... ----------\n')
    await sequelize.authenticate()
    await sequelize.sync()
    console.log(
      `\n---------- Database is connected to: ${sequelize.getDatabaseName()} ----------\n`
    )
  } catch (error) {
    console.error(error)
  }
}

export default sequelize
