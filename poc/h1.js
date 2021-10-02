//
// // Complete the plusMinus function below.
// function plusMinus(arr) {
//     let result = [];
//     let positive = 0;
//     let negative = 0;
//     let zero = 0;
//     let len = arr.length;
//     for (let i = 0; i < len; i++){
//         if (arr[i] < 0) {
//             negative++;
//         } else if (arr[i] >0) {
//             positive++;
//         } else {
//             zero++;
//         }
//     }
//     console.log(positive,negative,zero)
//     result.push(positive / len);
//     result.push(negative / len);
//     result.push(zero / len);
//     console.log(result)
//     for (let ele of result) {
//         console.log(ele);
//         console.log('\n');
//     }
// }
// plusMinus([1, -2 ,-7 ,9 ,1 ,-8 ,-5]);


// function timeConversion(s) {
//     /*
//      * Write your code here.
//      */
//     let strArr = s.split(':');
//     let hour = parseInt(strArr[0]);
//     let time_formate = strArr[2].substr(2, 4)
//     if (time_formate == 'PM' && hour!=12) {
//         hour += 12;
//     }
//
//     if (hour == 12 && time_formate == 'AM') {
//         hour = '00';
//     }
//     hour=hour.toString().length>1?hour:'0'+hour;
//     return hour + ':' + strArr[1] + ':' + strArr[2].substr(0, 2);
// }

function gradingStudents(grades) {
    /*
     * Write your code here.
     */

    for (let i = 0; i < grades.length; i++){
        let ele = parseInt(grades[i])
        let quotient = ele / 5;
        console.log('*',quotient)
        let new_grades_val = (parseInt(quotient) + 1) * 5;
        console.log('*',new_grades_val)
        let diff = new_grades_val - ele;
        if (diff < 3 && ele>37) {
            grades[i] = new_grades_val;
        }
    }
    return grades;
}
console.log(gradingStudents([73,67,38,33]));
