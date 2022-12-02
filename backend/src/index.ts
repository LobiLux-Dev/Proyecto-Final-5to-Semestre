import app from './app'
import { PORT } from './config'
import { connectDB } from './database'

const main = async () => {
  await connectDB()
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
  })
}

main()
