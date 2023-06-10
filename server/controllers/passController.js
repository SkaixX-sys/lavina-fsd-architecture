const model = require("../models/pass");
const ApiError = require("../Error/ApiError");

class passController {
  async create(req, res, next) {
    try {
      let { type, serviceId, tagline, newPrice, oldPrice } = req.body;
      if (req.user.role !== "admin") {
        return next(ApiError.forbidden("Доступ закрыт"));
      }
      const Model = await model.create({
        type,
        serviceId,
        tagline,
        newPrice,
        oldPrice,
      });
      return res.json(Model);
    } catch (e) {
      return next(ApiError.internal("Ошибка сервера"));
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { type, serviceId, tagline, newPrice, oldPrice } = req.body;
      if (req.user.role !== "admin") {
        return next(ApiError.forbidden("Доступ закрыт"));
      }
      const Model = await model.findOne({ where: { id } });
      if (!Model) {
        return next(ApiError.notFound("Запись не найдена"));
      }
      const updatedModel = {
        type: type || Model.type,
        tagline: tagline || Model.tagline,
        newPrice: newPrice || Model.newPrice,
        oldPrice: oldPrice || Model.oldPrice,
        serviceId: serviceId || Model.serviceId,
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

module.exports = new passController();
