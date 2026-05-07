function pipesInPool(input) {
    let v = Number(input.shift());
    let p1 = Number(input.shift());
    let p2 = Number(input.shift());
    let h = Number(input.shift());

    let pipe1 = p1 * h;
    let pipe2 = p2 * h;

    let pipePool = pipe1 + pipe2;

    if (pipePool <= v) {
        let poolPer = (pipePool / v) * 100;
        let p1Per = (pipe1 / pipePool) * 100;
        let p2Per = (pipe2 / pipePool) * 100;
        console.log(`The pool is ${poolPer.toFixed(2)}% full. Pipe 1: ${p1Per.toFixed(2)}%. Pipe 2: ${p2Per.toFixed(2)}%.`);
    } else if (pipePool > v) {
        let overflow = pipePool - v;
        console.log(`For ${h} hours the pool overflows with ${parseFloat(overflow.toFixed(2))} liters.`);
    }
}