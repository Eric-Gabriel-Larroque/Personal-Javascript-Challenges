//Counting how much attr x and y of the object are equals:

function getCount(objects) {
    return Object.values(objects).filter((obj)=>obj.x===obj.y).length
}
