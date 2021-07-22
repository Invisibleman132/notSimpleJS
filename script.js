let arr1=[12,5,124,21,3,55,6,7,4,5];
console.log(arrSortDeAsc(arr1));

function arrSortAsc(arr){
    let tempVariable=0;
    for(let i=0;i<arr.length-1;i++){
        for(let n=0;n<arr.length-i-1;n++){
            if(arr[n]>arr[n+1]){
                tempVariable=arr[n];
                arr[n]=arr[n+1];
                arr[n+1]=tempVariable;
            }
        }
    }
    return arr;
}

function arrSortDeAsc(arr){
    let tempVariable=0;
    for(let i=0;i<arr.length-1;i++){
        for(let n=0;n<arr.length-i-1;n++){
            if(arr[n]<arr[n+1]){
                tempVariable=arr[n];
                arr[n]=arr[n+1];
                arr[n+1]=tempVariable;
            }
        }
    }
    return arr;
}

function maxArrEl(arr){
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
return max;
}

function minArrEl(arr){
    let min=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    }
}
return min;
}

function poli(str){
    str=str.toLowerCase();
    str=str.replace(/\s+/g, '');
    let tr=true;
    for(let i=0;i<(str.length/2);i++){
        if(str[i]!==str[str.length-i-1]){
            tr=false;
        }
    }
    return tr;
}

function FizzBuzz(num){
    let str="";
for(let i=1;i<= num;i++){
    if (i % 15 == 0)
    str+=" FizzBuzz ";
    else if (i % 3 == 0)
        str+=" Fizz ";
    else if (i % 5 == 0)
    str+=" Buzz ";
    else
    str+=(' '+i+' ');
    }
    return str;
 }

function anogram(str1,str2){
    //приводим все буквы к нижниму регистру
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    //убираем из строк пробелы
    str1=str1.replace(/\s+/g, '');
    str2=str2.replace(/\s+/g, '');
    //убираем из строк знаки пунктуации
    str1=str1.replace(/[,.:-`!]/g, '');
    str2=str2.replace(/[,.:-`!]/g, '');
if(str1.length!=str2.length){
    return false;
}
//одна и таже строка не считается анограммой
else if(str1===str2){
return false;
}
else{
    //сортировка и сравнение двух строк
str1=str1.split('').sort().join('');
str2=str2.split('').sort().join('');
if(str1===str2){
    return true;
}
else{
    return false;
}
}

}

function vowels(str){
let count=0;
str=str.toLowerCase();
for(let i=0;i<str.length;i++){
    switch(str[i]){
        case 'a':{count++;break}
        case 'e':{count++;break}
        case 'i':{count++;break}
        case 'o':{count++;break}
        case 'u':{count++;break}
        default:break;
    }
}
return count;
}

function reverseCustom(arr){
let newArr=[];
let i=0;
for(let n=arr.length-1;n>=0;n--){
        newArr[i]=arr[n];
        i++;
}
return newArr;
}

function sumAverage(arr){
    let sum=0;
for(let i=0;i<arr.length;i++){
sum+=+arr[i];
}   
return sum/arr.length;
}

function inArray(str,arr){
let condition=false;
str=str.replace(/\s+/g, '');
str=str.toLowerCase();
alert(str);
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].replace(/\s+/g, '');
        arr[i]=arr[i].toLowerCase();
        alert(arr[i]);
        if(arr[i]===str){
            condition=true;
        }
    }
    return condition;
}

function mixNumber(arr){
   let newArr=[];
    for(let i=0;i<arr.length-1;i+=2){
        newArr[i]=arr[i+1];
        newArr[i+1]=arr[i];
    }
return newArr;
}

function decade(n){
    if(n<=0)
    return NaN;
    if(n<=10)
    return 1;
    if(n<=20)
    return 2;
    if(n<=31)
    return 3;
    else
    return NaN;
}

function timeOfYear(month){
if(month<=0||month>12)
return "WrongInput";
if(month==1||month==2||month==12)
return "Winter";
if(month>2&&month<6)
return "Spring";
if(month>=6&&month<9)
return "Summer";
if(month>=9&&month<12)
return "Autumn";
else
return NaN;
}
