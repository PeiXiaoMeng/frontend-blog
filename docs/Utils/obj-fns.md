```
import { isObject } from '../index';

/**
 * getCopyJson
 * @description 获取一个经过反序列化和序列化的神拷贝对象
 * @param obj 
 * @returns 
 */
export const getCopyJson = <T extends object>(obj: T): T => JSON.parse(JSON.stringify(obj)) as T;


/**
 * isEqual
 * @description 判断两个对象是否具有相同的值
 * @param obj1 
 * @param obj2 
 * @returns 
 */
export const isEqual = <T extends object>(obj1: T, obj2: T): boolean => {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== typeof obj2) return false;
  if (typeof obj1 === 'function') {
    throw new Error('无法比较方法和函数是否相同');
  }
  if (obj1 !== null && obj2 !== null) {
    const obj1Keys = Object.keys(obj1);
    if (obj1Keys.length !== Object.keys(obj2).length) {
      return false;
    } else {
      return obj1Keys.every(key => isEqual((obj1 as any)[key], (obj2 as any)[key]));
    }
  } else {
    return false;
  }
}


/**
 * at
 * @description 获取对象内的属性
 * @param 目标对象
 * @param 属性路径
 * @example
 * at({ a: { b: { c: 0 }}}, 'a.b.c'); // 1;
 * at({ a: 0 }, 'a.b.c'); // undefined;
 * at(null, 'a.b.c'); // null;
 */
export const at = (target: Object, path: string) => {
  if (target === undefined || target === null || typeof path !== 'string') { return target; }
  const keys = path.split(/[\[\]\.'"]+/).filter(v => v);
  const iterator = keys[Symbol.iterator](); // 通过迭代器 & 递归的方式获取最终结果
  const getVal: any = (obj: any) => {
    const { value, done } = iterator.next();
    if (done) {
      return obj;
    } else {
      const v = obj[value];
      return typeof v === 'undefined' ? undefined : getVal(v);
    }
  }
  return getVal(target);
}


/**
 * deepAssign
 * @description 深度assign
 * @param objs (obj1, obj2...) 任意数量的对象
 */
export const deepAssign = <T extends object>(...objs: T[]): T => {  
  const result = {} as T; 
  
  const assign = (obj1: any, obj2: any) => {  
    for (const key in obj2) {  
      if (obj2.hasOwnProperty(key)) {  
        const v1 = obj1[key];  
        const v2 = obj2[key];  
  
        if (  
          v1 !== null &&  
          typeof v1 === 'object' &&  
          v2 !== null &&  
          typeof v2 === 'object' &&  
          !(Array.isArray(v1) !== Array.isArray(v2))  
        ) {  
          if (!obj1.hasOwnProperty(key)) { // 如果 obj1 中没有该属性，则初始化它  
            obj1[key] = Array.isArray(v2) ? [] : {};  
          }  
          assign(obj1[key], v2);  
        } else {  
          obj1[key] = v2;  
        }  
      }  
    }  
  };  
  
  objs.forEach(obj => assign(result, obj));  
  
  return result as T;  
};


/**
 * removeEmptyProps
 * @description 去除普通对象中的空值属性
 */
export function removeEmptyProps(obj: any): Record<string, any> {  
  if (!isObject(obj)) { return obj; }
  
  return Object.keys(obj).reduce((acc, key) => {  
    const v = obj[key];  
    if (v !== undefined && v !== null && v !== '') {  
      acc[key] = v;  
    }  
    return acc;  
  }, {} as Record<string, any>); // 显式指定累加器的类型  
}
```