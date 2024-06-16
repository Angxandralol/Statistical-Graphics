/***
 * Validate extension of upload file.
 * 
 * @param {string} filename
 * @returns {boolean}
 */

export function extensionValidator(filename) {
    if (filename.slice(-5) === '.xlsx') return true 
    else return false
}