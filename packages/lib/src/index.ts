const globalValues = {};

export function getGlobalValue(name: string) {
  return globalValues[name];
}

export function setGlobalValue(name: string, value: any) {
  globalValues[name] = value;
}
