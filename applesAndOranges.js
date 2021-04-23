/**Function that return how many apples(arr) at the initial position (a) and
 oranges(arr) at initial position (b) fell in a range of (s) to (t)*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const inRange = (el=>el>=s&&el<=t)
     const newApples = apples.map(el=>el+a).filter(inRange).length
   const newOranges = oranges.map(el=>el+b).filter(inRange).length
    return console.log(newApples+'\n'+newOranges) 
}