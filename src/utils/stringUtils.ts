export function stringUtils() {
    const IsEmpty = (str: string | undefined): boolean => {
      return (!str || str.trim() === "");
    }// 比较两个值是否相等
  const isEqual = (a: any, b: any): boolean => {
    return JSON.stringify(a) === JSON.stringify(b)
  }
  return {
    IsEmpty,
    isEqual
  }
}
// 直接解构使用，非常简单直观
// import { stringUtils } from '@utils/stringUtils'
// const { isEmpty, isEqual, formatNumber, deepClone } = stringUtils()