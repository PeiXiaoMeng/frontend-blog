```
/**
 * typeOf 获取数据类型的字符串
 * @param data 
 * @returns 'String' | 'Boolean' | 'Object' | 'Undefined' | 'Null' | 'Date' | 'Function' | 'Array' | 'Number' | 'Sysmbol'
 */
export const typeOf = (data: any) => Object.prototype.toString.call(data).slice(8, -1);


/**
 * isString 
 * @description 判断是否是字符串
 * @param val 
 * @returns Boolean true | false
 */
export const isString = (val: any) => typeOf(val) === 'String';


/**
 * isBoolean
 * @description 判断是否是布尔值
 * @param val 
 * @returns Boolean true | false
 */
export const isBoolean = (val: any) => typeOf(val) === 'Boolean';


/**
 * isNumber 
 * @description 判断是否是数字
 * @param val 
 * @returns Boolean true | false
 */
export const isNumber = (val: any) => typeOf(val) === 'Number';


/**
 * isObject 
 * @description 判断是否是对象
 * @param val 
 * @returns Boolean true | false
 */
export const isObject = (val: any) => typeOf(val) === 'Object';


/**
 * isArray
 * @description 判断是否是数组
 * @param val 
 * @returns Boolean true | false
 */
export const isArray = (val: any) => typeOf(val) === 'Array';


/**
 * isUndefined
 * @description 判断是否是undefined
 * @param val 
 * @returns Boolean true | false
 */
export const isUndefined = (val: any) => typeOf(val) === 'Undefined';


/**
 * isNull
 * @description 判断是否是null
 * @param val 
 * @returns Boolean true | false
 */
export const isNull = (val: any) => typeOf(val) === 'Null';


/**
 * isFunction
 * @description 判断是否是函数
 * @param val 
 * @returns Boolean true | false
 */
export const isFunction = (val: any) => typeOf(val) === 'Function';


/**
 * isDate
 * @description 判断是否是日期
 * @param val 
 * @returns Boolean true | false
 */
export const isDate = (val: any) => typeOf(val) === 'Date';


/**
 * isSymbol
 * @description 判断是否是Symbol
 * @param val 
 * @returns 
 */
export const isSymbol = (val: any) => typeOf(val) === 'Symbol';



```