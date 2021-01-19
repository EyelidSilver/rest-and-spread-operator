//function 1


function sumNums1(...arr1) {
    return arr1.reduce((prev, current) => {
        return prev + current;
    });
}

console.log( sumNums1(1,2,3,4));
console.log( sumNums1(1,2,3));
console.log( sumNums1(1,2));


//function 2


const arr2 = [1,2,3,4];

function sumNums2(...arr2) {
    return arr2.reduce((prev, current) => {
        return prev + current;
    });
}

console.log(sumNums2(...arr2))