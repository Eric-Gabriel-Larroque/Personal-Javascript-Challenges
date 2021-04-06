//i add the space before the hashtag, decreasing the spaces according to the increase of i 
function staircase(n) {
    for(let i=1;i<=n;i++){
        let ration = n-i
       console.log( Array(ration) 
                    .fill(' ')
                    .concat(Array(i).fill('#'))
                    .join(''))
    }
}

staircase(5)