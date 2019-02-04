function* gen() {
    console.log('started...')
    let x = yield "give x value"
    console.log(x);
    let y = yield "give me y value"
    console.log(y);
    let z = yield "give me z value"
    console.log(z);
    return x + y + z
}