//Print the second largest number of an array:

function getSecondLargest(nums) {
    
    const newNums = nums.filter(el=>el!=Math.max(...nums))
    return Math.max(...newNums)
}

function getSecondLargest2(nums) {
    
    
     nums.sort((a,b)=>b-a)
     const setNums =[...new Set(nums)]
     return setNums[1]
    }