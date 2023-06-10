const sequelize = require("sequelize");
const Album = require("./album");
const Users = require("./users");
const Feedback = require("./feedback");
const Images = require("./images");
const Review = require("./review");
const Room = require("./room");
const Service = require("./service");
const Hotels = require("./hotels");
const infos = require("./infos");
const servicePriceList = require("./servicePriceList");
const news = require("./news");
const InfoItem = require("./infoItems");
const Types = require("./selectTypes");
const Equipment = require("./equipment");
const AdditionalEquipment = require("./additionalEquipment");
const Guide = require("./guide");
const Instructor = require("./instructor");
const Lift = require("./lift");
const Pass = require("./pass");
const Tour = require("./tour");

Images.belongsTo(Album);
Album.hasMany(Images);

Album.belongsTo(infos);
infos.hasMany(Album);

Room.belongsTo(Hotels);
Hotels.hasMany(Room);

servicePriceList.belongsTo(Service);
Service.hasMany(servicePriceList);

news.belongsTo(infos);
infos.hasMany(news);

InfoItem.belongsTo(infos);
infos.hasMany(InfoItem);

Hotels.belongsTo(Service);
Service.hasMany(Hotels);

Equipment.belongsTo(Service);
Service.hasMany(Equipment);

AdditionalEquipment.belongsTo(Equipment);
Equipment.hasMany(AdditionalEquipment);

Guide.belongsTo(Service);
Service.hasMany(Guide);

Instructor.belongsTo(Service);
Service.hasMany(Instructor);

Lift.belongsTo(Service);
Service.hasMany(Lift);

Pass.belongsTo(Service);
Service.hasMany(Pass);

Tour.belongsTo(Service);
Service.hasMany(Tour);

Service.belongsTo(Types);
Types.hasMany(Service);

infos.belongsTo(Types);
Types.hasMany(infos);
