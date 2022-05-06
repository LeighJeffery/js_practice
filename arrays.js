// array from range
const numbers = arrayFromRange(1, 10);

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
    output.push(i);
    return output;
};

console.log(numbers);

//includes method
const numbers2 = [1, 4, 7];

console.log(numbers2.includes(7));

function includes(array, searchElement) {
    for (let anywordiwant of array)
        if (anywordiwant === searchElement)
    return true;
    return false;
};

console.log(includes(numbers2, 3));
// note: there are a lot less curly braces needed in js. 
//if statements & loops seem to run just fine without them! Weird.

// an except function using the includes method. 
const numbers3 = [2, 34, 6, 8, 1, 5, 10];

function except(array, exclude) {
    const newNums = [];
    for (let numms of array)
        if (!exclude.includes(numms))
        newNums.push(numms)
    return newNums;
};

const newNums = except(numbers3, [6, 10]);

console.log(newNums);

// moving and element in an array by creating a function 'move' using 
const moreNums = [3, 4 , 0, 7, 9];

function move(array, index, offset) {
    const movedNums = [...array];
    const element = movedNums.splice(index, 1)[0];
    

    // note: pick up here. I'm not understanding this solution. 
};

const movedNums = move(moreNums, 4, 2);

console.log(movedNums);