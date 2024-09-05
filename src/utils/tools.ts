/**
 * 判断是否树形结构数据
 * @param arr 需要判断的数据
 * @param key 子节点字段
 * @returns
 */
export const isTreeNestedStructure = (arr: any[], key: string) => {
  if (arr.length === 0) {
    return false;
  }

  for (const obj of arr) {
    if (!obj.hasOwnProperty(key) || !obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
};
