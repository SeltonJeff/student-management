export const sanitizeValue = (value: string): string => {
  return value.replace(/\.|-|\/|\(|\)|\s/g, "");
};
