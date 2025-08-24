const IsNullOrEmpty = (str: string | undefined): boolean => {
    // 只有当值是字符串时才进行 trim 操作
    if (typeof str === 'string') {
        return str.trim() === ''
    }

    // 非字符串值认为是 empty
    return true
}

//将字符串路径变成大驼峰写法(因为 vite要分析路径，所以暂时没用上)
function PathToPascalCase(path: string): string {

  // 1. 分割路径并过滤掉空字符串
  const segments = path.split('/').filter(segment => segment.length > 0);

  // 2. 转换每个单词的首字母为大写，其余字母为小写
  const capitalizedSegments = segments.map(segment => {
    return segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase();
  });

  // 3. 拼接结果并保留首尾斜杠
  return `${capitalizedSegments.join('/')}`;
}

export { IsNullOrEmpty,PathToPascalCase }
