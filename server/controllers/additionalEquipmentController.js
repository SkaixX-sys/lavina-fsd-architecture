const model = require("../models/additionalEquipment");
const ApiError = require("../Error/ApiError");

class additionalEquipmentController {
  async create(req, res, next) {
    try {
      let { category, newPrice, oldPrice, equipmentId } = req.body;
      if (req.user.role !== "admin") {
        return next(ApiError.forbidden("Доступ закрыт"));
      }
      if (!category || !newPrice || !oldPrice) {
        return next(ApiError.badRequest("Укажите все данные"));
      }
      const Model = await model.create({
        category,
        newPrice,
        oldPrice,
        equipmentId,
      });
      return res.json(Model);
    } catch (e) {
      return next(ApiError.internal("Ошибка сервера"));
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { category, newPrice, oldPrice, equipmentId } = req.body;
      if (req.user.role !== "admin") {
        return next(ApiError.forbidden("Доступ закрыт"));
      }
      const Model = await model.findOne({ where: { id } });
      if (!Model) {
        return next(ApiError.notFound("Запись не найдена"));
      }
      const updatedModel = {
        category: category || Model.category,
        newPrice: newPrice || Model.newPrice,
        oldPrice: oldPrice || Model.oldPrice,
        equipmentId: equipmentId || Model.equipmentId,
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

module.exports = new additionalEquipmentController();
