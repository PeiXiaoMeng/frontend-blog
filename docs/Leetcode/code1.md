### 提供了一个数组结构的 data，要求实现一个 query 方法，返回一个新的数组，query 方法内部有 过滤、排序、分组等操作，并且支持链式调用，调用最终的 execute 方法返回结果

```
class Query<T> {
  
  result: T[] | Map<any, T[]> = []

  constructor(list: T[]) {
    this.result = list;
  }

  filter(condition: (item: T) => boolean) {
    if (Array.isArray(this.result)) {
      this.result = this.result.filter(condition);
    }
    return this
  }

  sort(condition: (a: T, b: T) => number) {
    if (Array.isArray(this.result)) {
      this.result = this.result.sort(condition);
    }
    return this
  }

  groupBy(key: keyof T) {
    if (Array.isArray(this.result)) {
      const groups: any = new Map();
      this.result.forEach((item: T) => {
        const group = item[key];
        if (groups.has(group)) {
          groups.get(group).push(item);
        } else {
          groups.set(group, [item]);
        }
      });
      this.result = groups;
    }
    return this;
  }

  execute(): Map<any, T[]>  | T[] {
    return this.result;
  }
}


export const query = <T>(data: T[] | undefined) => new Query<T>(data || [])

// const a = query([{ age: 35, gender: 'male' }, { age: 25, gender: 'female' }, { age: 40, gender: 'male' }])
//   .filter((x: any) => x.age > 30)
//   .sort((a: any, b: any) => a.age - b.age)
//   .groupBy('gender')
//   .execute()

// console.log(a)
```