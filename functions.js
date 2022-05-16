// sum of arguements

Array.isArray(); // checks if is an array

// this function is so we can pass the adder an array of numbers or just strings.
function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
  return items.reduce((a, b) => a + b);
}

console.log(sum(1, 7, 10, 5));

//test with array
console.log(sum([5, 12, 3, 8]));

console.log("is this on?");

// Area of a circle
const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area);

// error handling
try {
  const numbers5 = [1, 2, 3, 4];
  const count = countOccurrences(null, 1);
  console.log(count);
} catch (error) {
  console.log(error.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("NO! Not an array!");

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}
