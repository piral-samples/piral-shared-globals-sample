// such dictionaries can also be typed (untyped in "lib", this one is typed as we know all the things it should contain)
const piletValues = {} as PiletValues;

interface PiletValues {
  foo: string;
  bar(): string;
}

type ResolvedValue<T> = T extends () => infer R ? R : T;

type PiletResolvedValues = {
  [P in keyof PiletValues]: ResolvedValue<PiletValues[P]>;
};

export function getPiletValue<T extends keyof PiletValues>(
  name: T
): PiletResolvedValues[T] | undefined {
  const value = piletValues[name];

  if (typeof value === "function") {
    // only resolve if this is indeed a function
    return value();
  } else if (
    typeof value === "object" ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    // otherwise return the plain value
    return value;
  }

  return undefined;
}

export function setPiletValue<T extends keyof PiletValues>(
  name: T,
  value: PiletValues[T]
) {
  piletValues[name] = value;
}
