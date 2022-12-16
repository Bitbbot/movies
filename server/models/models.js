const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const UserModel = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  isAdmin: { type: DataTypes.BOOLEAN, allowNull: false, unique: false },
  login: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false, unique: false },
  name: { type: DataTypes.STRING, allowNull: false, unique: false },
  img: { type: DataTypes.STRING, allowNull: true, unique: false },
});

const AuthModel = sequelize.define("auth", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  ip: { type: DataTypes.STRING, allowNull: false, unique: false },
});

const ActorModel = sequelize.define("actor", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  sex: { type: DataTypes.STRING, allowNull: true, unique: true },
  age: { type: DataTypes.INTEGER, allowNull: true, unique: false },
  height: { type: DataTypes.INTEGER, allowNull: true, unique: false },
  text: { type: DataTypes.STRING, allowNull: true, unique: false },
  img: { type: DataTypes.STRING, allowNull: true, unique: false },
});

const JobModel = sequelize.define("job", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.STRING, allowNull: false, unique: false },
  text: { type: DataTypes.STRING, allowNull: true, unique: false },
  img: { type: DataTypes.STRING, allowNull: true, unique: false },
});

const GroupModel = sequelize.define("group", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.STRING, allowNull: false, unique: false },
  text: { type: DataTypes.STRING, allowNull: true, unique: false },
  img: { type: DataTypes.STRING, allowNull: true, unique: false },
});

const AuditionModel = sequelize.define("audition", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.STRING, allowNull: false, unique: false },
  sex: { type: DataTypes.STRING, allowNull: true, unique: true },
  age: { type: DataTypes.INTEGER, allowNull: true, unique: false },
  height: { type: DataTypes.INTEGER, allowNull: true, unique: false },
  text: { type: DataTypes.STRING, allowNull: true, unique: false },
  img: { type: DataTypes.STRING, allowNull: true, unique: false },
});

const TopicModel = sequelize.define("topic", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING, allowNull: false, unique: false },
  img: { type: DataTypes.STRING, allowNull: true, unique: false },
});

const CommentModel = sequelize.define("comment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING, allowNull: false, unique: false },
});

const NewsModel = sequelize.define("news", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING, allowNull: false, unique: false },
  img: { type: DataTypes.STRING, allowNull: true, unique: false },
});

const BannerModel = sequelize.define("banner", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING, allowNull: false, unique: false },
  price: { type: DataTypes.FLOAT, allowNull: false, unique: false },
  views: { type: DataTypes.INTEGER, allowNull: false, unique: false },
  clicks: { type: DataTypes.INTEGER, allowNull: false, unique: false },
});

const FavoriteModel = sequelize.define("favorite", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

UserModel.hasMany(AuditionModel);
AuditionModel.belongsTo(UserModel);

UserModel.hasMany(AuthModel);
AuthModel.belongsTo(UserModel);

UserModel.hasOne(ActorModel);
ActorModel.belongsTo(UserModel);

UserModel.hasMany(JobModel);
JobModel.belongsTo(UserModel);

UserModel.hasOne(GroupModel);
GroupModel.belongsTo(UserModel);

UserModel.hasMany(TopicModel);
TopicModel.belongsTo(UserModel);

UserModel.belongsToMany(TopicModel, { through: CommentModel });
TopicModel.belongsToMany(UserModel, { through: CommentModel });

UserModel.hasMany(NewsModel);
NewsModel.belongsTo(UserModel);

UserModel.hasMany(BannerModel);
BannerModel.belongsTo(UserModel);

UserModel.belongsToMany(AuditionModel, { through: FavoriteModel });
AuditionModel.belongsToMany(UserModel, { through: FavoriteModel });

module.exports = {
  UserModel,
  AuditionModel,
  AuthModel,
  ActorModel,
  JobModel,
  GroupModel,
  TopicModel,
  CommentModel,
  NewsModel,
  BannerModel,
  FavoriteModel,
};
