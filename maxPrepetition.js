
function findMaxRepetitions1(arr) {
    const counts = {};
    let maxCount = 0;
    arr.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxCount) {
            maxCount = counts[num];
        }
    });
    let result =[]
    for (const num in counts) {
        if (counts[num] === maxCount) {
            result.push(parseInt(num));
        }
    }

    return result;
}

function findMaxRepetitions2(arr){
    const counts ={}
    let max =0;
    let result =[]
    arr.forEach((num)=>{
        counts[num]= (counts[num] || 0) +1;
        if(counts[num] > max){
            max = counts[num];
            result =[]
            result.push(num)
        }else if(counts[num] == max && !result.includes(num)){
            result.push(num)
        }
    })

    return result
}

function findMaxRepetitions3(arr) {
    arr.sort((a, b) => a - b); 
    let maxCount = 0;
    let currentCount = 1;
    let mostRepeated = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentCount++;
        } else {
            if (currentCount > maxCount) {
                maxCount = currentCount;
                mostRepeated = [arr[i - 1]];
            } else if (currentCount === maxCount) {
                mostRepeated.push(arr[i - 1]);
            }
            currentCount = 1;
        }
    }
    if (currentCount > maxCount) {
        maxCount = currentCount;
        mostRepeated = [arr[arr.length - 1]];
    } else if (currentCount === maxCount) {
        mostRepeated.push(arr[arr.length - 1]);
    }

    return mostRepeated;
}


const array = [1, 2, 3, 4, 2, 3, 5, 5, 5,3];
console.log(findMaxRepetitions3(array))
