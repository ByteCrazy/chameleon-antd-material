export const removeEmptyKey = (obj: Record<any, any>) => {
  const keyList = Object.keys(obj).filter(Boolean);

  return keyList.reduce((res, key) => {
    res[key] = obj[key];
    return res;
  }, {} as typeof obj);
};
