

//Get 1 to 255
function get1To255(){
    var arr = [];
    for(var i = 0; i < 256; i++){
        arr.push(i);
    }
    return arr;
}


//Get even 1000
function getEven1000(){
    var sum = 0;
    for(var i = 0; i < 1001; i += 2){
        sum += i;
    }
    return sum;
}

//Sum odd 5000
function sumOdd5000(arr){
    var sum = 0;
    for(var i = 1; i < 5000; i+=2){
        sum += i;
    }
    return sum;
}

//Iterate an array
function iterateAnArray(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}


//Find max
function findMax(arr){
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

//Find Average
function findAvg(arr){
    var avg = 0;
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;
}

//Array odd
function arrayOdd(arr){
    var newArr = [];
    for(var i = 1; i < 50; i+=2){
        newArr.push(i);
    }
    return newArr;
}

//Greater than Y
function greaterThanY(arr, y){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > y){
            newArr.push(i);
        }
    }
    return newArr;
}

//Squares
function squares(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

//Negatives
function negatives(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
}

//Max/Min/Avg
function minMaxAvg(arr){
    var min = arr[i];
    var max = arr[i];
    var sum = 0;
    var avg = 0;
    var newArr = [];

    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
        sum += arr[i];
    }
    avg = sum / arr.length;
    newArr.push(min);
    newArr.push(max);
    newArr.push(avg);
    return newArr;
}


//Swap Values
function swapValues(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}

//Number to String
function numberToString(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}





























