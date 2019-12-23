// Input.
let input = [
    'What are you doing Achi',
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let sentence = gets().split(' ');
// print(sentence);

for (i = 0; i < sentence.length; i++) {
    if ((sentence[i].length % 2 === 0) && (sentence[i].charAt(0) === 'a' || sentence[i].charAt(0) === 'A' || sentence[i].charAt(0) === 'e' || sentence[i].charAt(0) === 'E' || sentence[i].charAt(0) === 'i' || sentence[i].charAt(0) === 'I' || sentence[i].charAt(0) === 'o' || sentence[i].charAt(0) === 'O' || sentence[i].charAt(0) === 'u' || sentence[i].charAt(0) === 'U')) {
        sentence[i] = sentence[i].split('');
        sentence[i].push((sentence[i]).shift());
        sentence[i].push('chee');
        sentence[i] = sentence[i].join('');
    } else if (sentence[i].length % 2 === 0 && (sentence[i].charAt(0) !== 'a' || sentence[i].charAt(0) !== 'A' || sentence[i].charAt(0) !== 'e' || sentence[i].charAt(0) !== 'E' || sentence[i].charAt(0) !== 'i' || sentence[i].charAt(0) !== 'I' || sentence[i].charAt(0) !== 'o' || sentence[i].charAt(0) !== 'O' || sentence[i].charAt(0) !== 'u' || sentence[i].charAt(0) !== 'U')) {
        sentence[i] += 'chee';
    } else if ((sentence[i] % 2 !== 0) && (sentence[i].charAt(0) === 'a' || sentence[i].charAt(0) === 'A' || sentence[i].charAt(0) === 'e' || sentence[i].charAt(0) === 'E' || sentence[i].charAt(0) === 'i' || sentence[i].charAt(0) === 'I' || sentence[i].charAt(0) === 'o' || sentence[i].charAt(0) === 'O' || sentence[i].charAt(0) === 'u' || sentence[i].charAt(0) === 'U')) {
        sentence[i] = sentence[i].split('');
        sentence[i].push((sentence[i]).shift());
        sentence[i].push('che');
        sentence[i] = sentence[i].join('');
        // print(sentence[i]);
    } else {
        sentence[i] += 'che';
    }
}
print(sentence.join(' '));