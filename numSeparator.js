const list = ['a','b',1,2,'c',0]
const onlyNums = l => typeof l === 'number'
console.log(list.filter(onlyNums))

