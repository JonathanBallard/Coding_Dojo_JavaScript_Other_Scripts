
//Part 1

//Sigma
function Sigma(num){
    var sum = 0;
    for(var i = 0; i <= num; i++){
        sum += i;
    }
    return sum;
}



//Factorial
function Factorial(num){
    var mult = 0;
    for(var i = 1; i <= num; i++){
        mult *= i;
    }
    return mult;
}


//Fibonacci
function Fib(n){
    var fib = 0;
    var fib1 = 0;
    var fib2 = 1;
    if(n == 0){
        return 0;
    }
    else if(n == 1){
        return 1;
    }
    else if (n > 1){
        for(var i = 2; i <= n; i++){
            fib1 = i - 1;
            fib2 = i - 2;
        }

    }
    else {
        console.log("Invalid Input or Negative Number");
    }
    fib = fib1 + fib2;
    return fib;
}


//Array: Second to Last
function secondToLast(arr){
    if(arr.length > 1){
        return arr[arr.length - 2];
    }
    else {
        return null;
    }
}

//Array: Nth to Last
function nthToLast(arr,n){
    if(arr.length > n + 1){
        return arr[arr.length - 1 - n];
    }
    else {
        return null;
    }
}


//Array: Second-Largest
function secondLargest(arr){
    var largest = 0;
    var secLargest = 0;
    if(arr.length > 1){
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > largest){
                largest = arr[i];
            }
        }
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > secLargest && arr[i] < largest){
                secLargest = arr[i];
            }
        }
        return secLargest;
    }
    else {
        return null;
    }

}


//Double Trouble
function doubleTrouble(arr){
    for(var i = (arr.length - 1) * 2; i >= 0; i-= 2){
        arr[i] = arr[i / 2];
        arr[i-1] = arr[i / 2];
    }
}






//Part 2 Assignment
// Create a function Fib(n) where it returns the nth fibonacci number. Use recursion for this.
// Recursive fill, see below


function Fib2(n){
    var fib = 0;
    var fib1 = 0;
    var fib2 = 1;
    if(n == 0){
        return 0;
    }
    else if(n == 1){
        return 1;
    }
    else if (n > 1){
        for(var i = 2; i <= n; i++){
            fib1 = Fib2(i - 1);
            fib2 = Fib2(i - 2);
        }
    }
    else {
        console.log("Invalid Input or Negative Number");
    }
    fib = fib1 + fib2;
    return fib;
}









