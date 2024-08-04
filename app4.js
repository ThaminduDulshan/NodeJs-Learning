const in1 = 10;
const in2 = 12;

function invokeSum(...val) {
    // Destructure the first two values from the array
    const [set1, set2] = val;
    console.log(`The sum is: ${set1 + set2}`);
}

invokeSum(in1, in2);
