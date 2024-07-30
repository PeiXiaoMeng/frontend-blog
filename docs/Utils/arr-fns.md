```
/**
 * range
 * @description 生成数字范围数组
 * @param start 起始值
 * @param end 结束值
 * @returns 
 */
export const range = (start: number = 0, end: number = 0) => {
  return Array.from({ length: end - start + 1 }).map((v, i) => i + start);
}


/**
 * flat
 * @description 扁平化二维数组
 * @param arr 
 * @returns 
 */
export const flat = (arr: any[]) => {
  return Array.prototype.concat(...arr);
}
```