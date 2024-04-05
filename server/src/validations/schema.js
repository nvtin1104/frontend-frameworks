export const validateBeforeCreate = async (schema, data) => {
  return await schema.validateAsync(data, { abortEarly: false })
}
export const handleValidateError = (error) => {
  const errors = error.message.split('.').map(err => err.trim())
  return errors
}