//write a loop up to 100
//for each number, if it is divisible by 3, console log 'fizz'
//if it is divisible by 5, console log 'buzz'
//it its is divisible fy both 3 and 5, consolelog 'fizzbuzz'
//if not divisible by 3 or 5, console log the number

// for (var i = 1; i <= 100; i++) {
//     if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
//         console.log('fizzbuzz');
//     } else if (Number.isInteger(i / 3)) {
//         console.log('fizz');
//     } else if (Number.isInteger(i / 5)) {
//         console.log('buzz');
//     } else { console.log(i); }
// }


// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('fizzbuzz');
//     } else if (i % 3 === 0) {
//         console.log('fizz');
//     } else if (i % 5 === 0) {
//         console.log('buzz');
//     } else { console.log(i); }
// }

var i = 1;
while (i <= 100) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else { console.log(i); }
    i++;
}


//output:
//1
//2
//fizz
//4
//buzz