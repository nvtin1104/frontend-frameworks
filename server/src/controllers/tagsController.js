const { TagsService } = require('~/services/tags.service')
import e from 'express'
import { StatusCodes } from 'http-status-codes'

const handleCreateTag = async (req, res) => {
  try {
    const data = req.body
    if (!data.name) {
      throw new Error('Name is required')
    }
    const tag = await TagsService.create(data)
    res.status(StatusCodes.CREATED).json(tag)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
const handleUpdateTag = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const tag = await TagsService.update(id, data)
    res.status(StatusCodes.CREATED).json(tag)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
const handleGetAllTags = async (req, res) => {
  try {
    const tags = await TagsService.getAll()
    res.status(StatusCodes.CREATED).json(tags)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
const handleDeleteTag = async (req, res) => {
  try {
    const { id } = req.params
    const tags = await TagsService.deleteTags(id)
    res.status(StatusCodes.CREATED).json(tags)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
export const tagsController = {
  handleCreateTag,
  handleUpdateTag,
  handleGetAllTags,
  handleDeleteTag
}