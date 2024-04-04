function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
function removeDuplicates2(arr) {
    return [...new Set(arr)];
}

function removeDuplicates3(arr) {
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
function removeDuplicates4(arr) {
    const map = new Map();
    arr.forEach(item => map.set(item, item));
    return Array.from(map.values());
}


function removeDuplicates5(arr){
    arr.sort((a,b) => a-b);
    let result =[]
    arr.forEach((item, index)=>{
        if(item !== result[result.length -1]){
            result.push(item)
        }
    })
    return result
}

const arr =[1,3,2,2,3,5,6,5]
console.log(removeDuplicates5(arr))