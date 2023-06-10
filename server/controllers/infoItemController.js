const model = require('../models/infoItems')
const ApiError = require('../Error/ApiError');

class infoItemController {
    async create(req, res, next) {
        try {
            let { infoId, description } = req.body
            if (req.user.role !== 'admin') {
                return next(ApiError.forbidden('Доступ закрыт'));
            }
            if (!description) {
                return next(ApiError.badRequest("Укажите данные"))
            }
            const Model = await model.create({ infoId, description })
            return res.json(Model)
        } catch (e) {
            return next(ApiError.internal("Ошибка сервера"))
        }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params
            let { infoId, description } = req.body
            if (req.user.role !== 'admin') {
                return next(ApiError.forbidden('Доступ закрыт'));
            }
            const Model = await model.findOne({where:{id}});
            if (!Model) {
                return next(ApiError.badRequest("Запись не найдена"))
            }
            if (!description) {
                return next(ApiError.badRequest("Укажите данные"))
            }
            const updatedModel = {
                description: description || Model.description,
                infoId: infoId || Model.infoId,
            };


            await model.update(
                updatedModel,
                { where: { id } }
            )
            return res.json(updatedModel)
        } catch (e) {
            return next(ApiError.internal("Ошибка сервера"))
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params
            if (req.user.role !== 'admin') {
                return next(ApiError.forbidden('Доступ закрыт'));
            }
            await model.destroy({ where: { id } })
            return res.json({ message: 'Detele was succes' })
        } catch (e) {
            return next(ApiError.internal("Ошибка сервера"))
        }
    }

    async getAll(req, res, next) {
        try {
            const Model = await model.findAll();
            if(!Model) {
                return next(ApiError.notFound('Записи не найдены'));

            }
            return res.json(Model);
        } catch (e) {
            return next(ApiError.internal("Ошибка сервера"))
        }
    }
}

module.exports = new infoItemController()
