// models/product.ts

import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT, // You can adjust the data type based on your requirements
        allowNull: false
    },
    image: {
        type: DataTypes.STRING, // Assuming you store image paths; you might consider using BLOB for actual image data
        allowNull: true
    }
});
