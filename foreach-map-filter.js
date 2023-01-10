
function doubleValues(arr){
    doubledArr = [];
    arr.forEach(function(val) {
        doubledArr.push(val * 2)
    })   
    return doubledArr;
};


function onlyEvenValues(arr){
    const evensArr = [];
    arr.forEach(function(val, idx) {
        if(val % 2 === 0) {
            evensArr.push(val)
        }
    })
    return evensArr;
};


function showFirstAndLast(arr){
    const newArr = [];
    arr.forEach(function(val, idx, arr) {
        newArr.push(`${val[0]}${val[val.length - 1]}`);
    })
    return newArr;
};


function addKeyAndValue(arr,key,value){
    const objArr = arr;
    const objKey = key;
    const objValue = value;
    objArr.forEach(function(obj) {
        obj[objKey] = objValue;
    })
    return objArr;
};


function vowelCount(str){
    const strArr = Array.from(str.toLowerCase());
    const vowels = isVowel(strArr);
    const vowelsObj = {};
    vowels.forEach(function(char) {
         if(vowelsObj[char]) {
            vowelsObj[char] ++ }
            else {
                vowelsObj[char] = 1
            };
})
return vowelsObj;
 };
 
    const isVowel = function(arr) {
     const vowels = [];
     const vowelsStr = 'aeiou';
     for(i = 0; i < arr.length; i++){
         if(vowelsStr.indexOf(arr[i]) !== -1) {
             vowels.push(arr[i]);
         }}
     return vowels;
 };




function doubleValuesWithMap(arr) {
    const doubles = arr.map(function(val) {
        return val *2
    })
    return doubles;
};



function valTimesIndex(arr){
    const newVals = arr.map(function(val, idx, arr) {
        return val * idx
    })
    return newVals;
}



function extractKey(arr, key){
    return arr.map(function(val) {
        return val[key]
    })
};



function extractFullName(arr){
    return arr.map(function(val) {
        return `${val['first']} ${val['last']}`
    })
};



function filterByValue(arr, key) {
    const filteredArr = [];
    arr.map(function(val) {
        if(val[key]) {
            filteredArr.push(val)
        }
    })
    return filteredArr;
};



function find(arr, searchValue) {
    const matches = arr.filter(val => val === searchValue);
    if(matches.length > 0) {
        return matches[0];
    }
    else{
        return undefined;
    }
};


function findInObj(arr, key, searchValue) {
    const results = arr.filter(val => val[key] === searchValue)
    return results[0];
};


function removeVowels(str) {
    const newStr = Array.from(str.toLowerCase());
    const vowels = 'aeiou';
    const noVowels = newStr.filter(char => vowels.indexOf(char) === -1);
    return noVowels.join('');
};


function doubleOddNumbers(arr) {
    const oddNums = arr.filter(num => num % 2 === 1 || num === 1)
    return oddNums.map(function(val) {
        return val * 2
    })
};
