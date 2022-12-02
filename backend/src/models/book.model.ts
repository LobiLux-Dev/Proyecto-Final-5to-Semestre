import sequelize from '../database'
import { DataTypes } from 'sequelize'

const Book = sequelize.define(
  'Book',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    isbn: {
      type: DataTypes.STRING(42),
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(81),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(47),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    editorial: {
      type: DataTypes.STRING(47),
      allowNull: false,
    },
    printingDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'printing_date',
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at',
    },
  },
  {
    timestamps: true,
  }
)

export default Book
