function sum () {
    var arr = Array.from(arguments);
    var sum = 0;
    arr.forEach(v => sum += v);
    return sum
}

function arcArea (r) {
    return 2 * Math.PI * r;
}

export {
    sum,
    arcArea
}
