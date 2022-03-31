/**
 * @returns {Number} A six digit random code
 */
export const generateOTP = () => Math.floor(100000 + Math.random() * 900000)