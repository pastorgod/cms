/**
 * 模仿 C# String.IsNullOrEmpty
 * 判断字符串是否为 null、undefined 或空字符串（""）
 * 注意：空格字符串（"   "）视为【非空】，符合 C# 原生行为
 */
const IsNullOrEmpty = (value: string | undefined): boolean => {
    return value == null || value === ''
}

/**
 * 【关键】类型守卫版本：用于条件判断时自动收窄类型
 * 当返回 true 时，TypeScript 会将 value 推断为 string 类型
 */
const IsNotNullOrEmpty = (value: string | null | undefined): value is string => {
    return value != null && value !== ''
}

/**
 * （可选）模仿 C# String.IsNullOrWhiteSpace
 * 判断是否为 null/undefined/空字符串/纯空白字符
 */
const IsNullOrWhiteSpace = (value: string | null | undefined): boolean => {
    return value == null || value.trim() === ''
}

//将字符串路径变成大驼峰写法(因为 vite要分析路径，所以暂时没用上)
function PathToPascalCase(path: string): string {
    // 1. 分割路径并过滤掉空字符串
    const segments = path.split('/').filter((segment) => segment.length > 0)

    // 2. 转换每个单词的首字母为大写，其余字母为小写
    const capitalizedSegments = segments.map((segment) => {
        return segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase()
    })

    // 3. 拼接结果并保留首尾斜杠
    return `${capitalizedSegments.join('/')}`
}

export { IsNullOrEmpty, IsNotNullOrEmpty, IsNullOrWhiteSpace, PathToPascalCase }
