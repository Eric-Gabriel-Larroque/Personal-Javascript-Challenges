//Retuns the maximum and mininum sum between the array elements

function miniMaxSum(arr) {
    arr.sort()
    const sum = (a,b)=>a+b
    const maxSum = arr.slice(1).reduce(sum)
    const minSum = arr.slice(0,-1).reduce(sum)
    return console.log(minSum,maxSum) 
}

miniMaxSum([2,3,1,5,4])
