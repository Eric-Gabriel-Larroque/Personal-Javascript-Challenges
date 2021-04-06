//Count the bigger array value and return how much times he repeats:
function tallerCandle(candles){
return candles.sort((a,b)=>b-a).filter(el=>el===candles[0]).length
}

console.log(tallerCandle([1,2,2,333,4,555,555,6,555,555]))