import bcrypt from 'bcrypt'
export const createPassword = async (password) => {
    // Hash password
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}
export const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash)
}