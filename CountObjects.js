//Counting how much objects x and y are equals:

function getCount(objects) {
    return Object.values(objects).filter((obj)=>obj.x===obj.y).length
}
