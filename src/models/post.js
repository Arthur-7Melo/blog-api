import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(35),
    allowNull: false,
    defaultValue: "Sem título",
    validate: {
      len: {args: [3, 30]}
    },
  },
  content: {
    type: DataTypes.STRING(500),
    allowNull: false,
    validate: {
      len: {args: [3, 500]}
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Post;