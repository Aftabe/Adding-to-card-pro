// String method
const learning = 'Let\'s learn something new today';
let outPut;



outPut = learning.length; // To find out the length of a variable
outPut = learning.concat(' ', ' that we need in the future.'); // To add the values in the string
outPut = learning.indexOf('l'); // to know the position of the value



outPut = learning.toLocaleLowerCase();
outPut = learning.toUpperCase();
outPut = learning.toLocaleUpperCase();

outPut = learning.substring(0,7);
outPut = learning.slice(5);
outPut = learning.slice(-5);
outPut = learning.repeat(3);
outPut = learning.split(' ');

outPut = learning.replace('Let\'s', 'we can');
outPut = learning.includes('something new');







alert(outPut);
console.log(outPut);

