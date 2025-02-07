import User from "./user";
import Post from "./post";

User.hasMany(Post, {foreignKey: 'userId'});
Post.belongsTo(User, {foreignKey: 'userId'});

export {User, Post};
