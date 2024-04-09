const { TagsModel } = require('~/models/tags.model')

const create = async (data) => await TagsModel.create(data)
const getAll = async () => await TagsModel.getAll()
const update = async (id, data) => await TagsModel.update(id, data)
const deleteTags = async (id) => await TagsModel.deleteTags(id)
export const TagsService = {
  create,
  getAll,
  update,
  deleteTags
}
