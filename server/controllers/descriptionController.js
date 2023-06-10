const model = require("../models//description");
const ApiError = require("../Error/ApiError");

class descriptionController {
  async create(req, res, next) {
    try {
      let { text } = req.body;
      if (req.user.role !== "admin") {
        return next(ApiError.forbidden("Доступ закрыт"));
      }
      const Model = await model.create({
        text,
      });
      return res.json(Model);
    } catch (e) {
      return next(ApiError.internal("Ошибка сервера"));
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { text } = req.body;
      if (req.user.role !== "admin") {
        return next(ApiError.forbidden("Доступ закрыт"));
      }
      const Model = await model.findOne({ where: { id } });
      if (!Model) {
        return next(ApiError.notFound("Запись не найдена"));
      }
      
      const updatedModel = {
        text: text || Model.text,
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

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const Model = await model.findOne({ where: { id } });
      if (!Model) {
        return next(ApiError.notFound("Запись не найдена"));
      }
      return res.json({ Model });
    } catch (e) {
      return next(ApiError.internal("Ошибка сервера"));
    }
  }
}

module.exports = new descriptionController();
