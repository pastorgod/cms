export function stringUtils() {
    const IsNullOrEmpty = (str: string | undefined): boolean => {
      return (!str || str.trim() === "");
    }
    
  return {
    IsNullOrEmpty
  }
}
// 直接解构使用，非常简单直观
// import { stringUtils } from '@utils/stringUtils'
// const { isEmpty, isEqual, formatNumber, deepClone } = stringUtils()
