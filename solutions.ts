function multiplyValue(value: number, multiplier?: number): number {

  if (multiplier === undefined) {
    return value * 2;
  }
  return value * multiplier;
}

console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));


function processInput(value: string | number | boolean) {

  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
}

console.log(processInput("  TypeScript  "));
console.log(processInput(10));
console.log(processInput(true));
console.log(processInput(false));

