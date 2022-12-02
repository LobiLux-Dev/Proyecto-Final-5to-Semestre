import { config } from 'dotenv'
config()

export const PORT = process.env.PORT || 3001
export const DATABASE_URI = process.env.DATABASE_URI || 'sqlite:database.sqlite'
