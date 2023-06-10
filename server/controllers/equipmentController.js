const model = require("../models/equipment");
const ApiError = require("../Error/ApiError");

class equipmentController {
  async create(req, res, next) {
    try {
      let {
        category,
        weekendNewPrice,
        weekendOldPrice,
        weekdayNewPrice,
        weekdayOldPrice,
        weekendFirstNewPrice,
        weekendFirstOldPrice,
        weekdayFirstNewPrice,
        weekdayFirstOldPrice,
        serviceId,
      } = req.body;
      if (req.user.role !== "admin") {
        return next(ApiError.forbidden("Доступ закрыт"));
      }
      if (
        !category ||
        !weekendNewPrice ||
        !weekendOldPrice ||
        !weekdayNewPrice ||
        !weekdayOldPrice ||
        !weekendFirstNewPrice ||
        !weekendFirstOldPrice ||
        !weekdayFirstNewPrice ||
        !weekdayFirstOldPrice
      ) {
        return next(ApiError.badRequest("Укажите все данные"));
      }
      const Model = await model.create({
        category,
        weekendNewPrice,
        weekendOldPrice,
        weekdayNewPrice,
        weekdayOldPrice,
        weekendFirstNewPrice,
        weekendFirstOldPrice,
        weekdayFirstNewPrice,
        weekdayFirstOldPrice,
        serviceId,
      });
      return res.json(Model);
    } catch (e) {
      return next(ApiError.internal("Ошибка сервера"));
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const {
        category,
        weekendNewPrice,
        weekendOldPrice,
        weekdayNewPrice,
        weekdayOldPrice,
        weekendFirstNewPrice,
        weekendFirstOldPrice,
        weekdayFirstNewPrice,
        weekdayFirstOldPrice,
      } = req.body;
      if (req.user.role !== "admin") {
        return next(ApiError.forbidden("Доступ закрыт"));
      }
      const Model = await model.findOne({ where: { id } });
      if (!Model) {
        return next(ApiError.notFound("Запись не найдена"));
      }
      const updatedModel = {
        category: category || Model.category,
        weekendNewPrice: weekendNewPrice || Model.weekendNewPrice,
        weekendOldPrice: weekendOldPrice || Model.weekendOldPrice,
        weekdayNewPrice: weekdayNewPrice || Model.weekdayNewPrice,
        weekdayOldPrice: weekdayOldPrice || Model.weekdayOldPrice,
        weekendFirstNewPrice:
          weekendFirstNewPrice || Model.weekendFirstNewPrice,
        weekendFirstOldPrice:
          weekendFirstOldPrice || Model.weekendFirstOldPrice,
        weekdayFirstNewPrice:
          weekdayFirstNewPrice || Model.weekdayFirstNewPrice,
        weekdayFirstOldPrice:
          weekdayFirstOldPrice || Model.weekdayFirstOldPrice,
      };
      await model.update(updatedModel, { where: { id } });
      return res.json(updatedModel);
    } catch (e) {
      return next(ApiError.internal("Ошибка сервера"));
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      if (req.user.role !== "admin") {
        return next(ApiError.forbidden("Доступ закрыт"));
      }
      const check = await model.findByPk(id);
      if (!check) {
        return next(ApiError.notFound("Запись не найдена"));
      }
      await model.destroy({ where: { id } });
      return res.json({ message: "Detele was succes" });
    } catch (e) {
      return next(ApiError.internal("Ошибка сервера"));
    }
  }

  async getAll(req, res, next) {
    try {
      const limit = +req.query.limit || 10;
      const page = +req.query.page || 1;
      const offset = (page - 1) * limit;
      const Model = await model.findAll({
        limit,
        offset,
      });
      const count = await model.count();
      const pages = Math.ceil(count / limit);
      return res.json({ Model, count, pages });
    } catch (e) {
      return next(ApiError.internal("Ошибка сервера"));
    }
  }
}

module.exports = new equipmentController();
