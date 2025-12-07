export const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const pick = <T extends Record<string, any>>(obj: T, keys: string[]) =>
  Object.fromEntries(keys.map((k) => [k, obj[k]]));
