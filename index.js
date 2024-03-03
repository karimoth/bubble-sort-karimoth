
const { uuid } = require('uuid');
const { fs } = require('fs-extra');
const { no } = require('random-numbers-karimoth');
const { lib2 } = require('tictactoe-karimoth');

function bubbleSort(arr) {
    const len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
console.log("Sorted array using Bubble Sort:", bubbleSort(array));


module.exports = { bubbleSort };
