/**
 * Working with integers bigger than 2^53 and printing her in full
 */

function extraLongFactorials(n) {
    
    n = BigInt(n)
    for(let i = n-1n;i>0;i--){
        n*=i
    }
    return console.log(n.toString())

}

extraLongFactorials(25)
