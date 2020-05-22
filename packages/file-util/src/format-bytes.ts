/**
 * 字节数转换成，其他单位比如 'Bytes', 'KB', 'MB', 'GB'
 * 
 * @param bytes 字节数
 * @param decimals 保留小数位， 默认2位小数
 */
export const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) {
        return '0 Bytes'
    }

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}
