```
/**
 * 精确加法运算
 * @param num1 
 * @param num2 
 * @returns 
 */
export const add = (num1: number | string, num2: number | string) => {
  let r1: number, r2: number, m: number;

  try {
    r1 = num1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }

  m = Math.pow(10, Math.max(r1, r2));
  return Math.round(Number(num1) * m + Number(num2) * m) / m;
}


/**
 * 精确减法运算
 * @param num1 
 * @param num2 
 * @returns 
 */
export const sub = (num1: number | string, num2: number | string) => {
  let r1: number, r2: number, m: number, n: number;
  try {
    r1 = num1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }

  m = Math.pow(10, Math.max(r1, r2));
  n = (r1 >= r2) ? r1 : r2;

  return Number((Math.round(Number(num1) * m - Number(num2) * m) / m).toFixed(n));
}


/**
 * 精确乘法运算
 * @param num1 
 * @param num2 
 * @returns 
 */
export const mul = (num1: number | string, num2: number | string) => {
  let m = 0, s1: string, s2: string;

  try {
    s1 = num1.toString();
  } catch (e) {
    s1 = '';
  }

  try {
    s2 = num2.toString();
  } catch (e) {
    s2 = '';
  }

  try { m += s1.split('.')[1].length; } catch (e) { }
  try { m += s2.split('.')[1].length; } catch (e) { }
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}


/**
 * 精确除法运算
 * @param num1 
 * @param num2 
 * @returns 
 */
export const div = (num1: number | string, num2: number | string) => {
  let t1 = 0, t2 = 0, r1: number, r2: number;
  try {
    t1 = num1.toString().split('.')[1].length;
  } catch (e) {
    t1 = 0;
  }
  try {
    t2 = num2.toString().split('.')[1].length;
  } catch (e) {
    t2 = 0;
  }
  try {
    r1 = Number(num1.toString().replace('.', ''));
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = Number(num2.toString().replace('.', ''));
  } catch (e) {
    r2 = 0;
  }
  return mul((r1 / r2), Math.pow(10, t2 - t1));
}

```