// Input.
let input = [
    '21 42 50 126 300',


];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let line = gets();
let arrInput = line.split(' ').map(Number);
let sum = 0;
let result = 0;

for (i = 0; i < arrInput.length; i++) {
    if (arrInput[i] % 3 === 0 && arrInput[i] % 7 === 0) {
        sum += arrInput[i];
    }
}

sum.toString().split('');
for (i = 0; i < sum.toString().length; i++) {
    result += Number(sum.toString()[i]);
}
print(result);