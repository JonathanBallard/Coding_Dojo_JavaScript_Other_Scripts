

//Biggie Size
function biggieSize(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}


//Print Low, Return High
function printLowReturnHigh(arr){
    var low = arr[i];
    var high = arr[i];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < low){
            low = arr[i];
        }
        if(arr[i] > high){
            high = arr[i];
        }

    }
    console.log(low);
    return high;
}

//Print One Return Another
function printOneReturnAnother(arr){
    console.log(arr[arr.length - 2]);
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            continue;
        }
        else {
            return arr[i];
        }
    }
    
}


//Double Vision
function doubleVision(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr[i] = arr[i] * 2;
    }
    return newArr;
}


//Count Positives
function countPositives(arr){
    var positives = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positives++;
        }
    }
    arr[arr.length - 1] = positives;
}


//Evens and Odds
function evensAndOdds(arr){
    var evens = 0;
    var odds = 0;
    for(var i = 0; i < arr.length; i++){
        if(odds == 3){
            console.log("That's odd!");
        }
        else if(evens == 3){
            console.log("Even more so...");
        }
        if(arr[i] % 2 == 0){
            odds = 0;
            evens++;
        }
        else{
            evens = 0;
            odds++;
        }
    }
}


//Increment the Seconds
function incrementTheSeconds(arr){
    for(var i = 1; i < arr.length; i+=2){
        arr[i]++;
    }
    console.log(arr);
    return arr;
}   


//Previous Lengths
function previousLengths(arr){
    for(var i = arr.length - 1; i > 0; i--){
        arr[i] = ((arr[i - 1]).toString()).length;
    }
    return arr;
}


//Add Seven
function addSeven(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr[i] = arr[i] + 7;
    }
    return newArr;
}


//Reverse Array
function reverseArray(arr){
    var temp = arr[0];
    for(var i = 0; i < arr.length; i++){
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

//Outlook: Negative
function outlookNegative(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            newArr[i] = arr[i] * -1;
        }
        else {
            newArr[i] = arr[i];
        }
    }
    return newArr;
}


//Always Hungry
function alwaysHungry(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            count++;
        }
    }
    if(count == 0){
        console.log("I'm Hungry");
    }
}


//Swap Toward the Center
function swapTowardTheCenter(arr){
    var temp = 0;
    for(var i = 0; i < arr.length; i+=2){
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}



//Scale the Array
function scaleTheArray(arr,num){
    for(var i = 0; i < arr.length; i++){
        arr[i] *= num;
    }
    return arr;
}

































































