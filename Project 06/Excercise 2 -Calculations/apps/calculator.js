export function add(x,y) {
        return x + y;
}

export function addNumbers(...args) {
        let sum = 0;

        for (let arg of args) sum += arg;

        return sum;
}