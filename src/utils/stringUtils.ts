const IsNullOrEmpty = (str: string | undefined): boolean => {
    // 只有当值是字符串时才进行 trim 操作
    if (typeof str === 'string') {
        return str.trim() === ''
    }

    // 非字符串值认为是 empty
    return true
}

export { IsNullOrEmpty }
