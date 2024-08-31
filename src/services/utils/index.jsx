export function debounce(fun, time) {
    let timer;
    return () => {
        clearTimeout(timer)
        timer = setTimeout(() => { fun.apply(this, arguments) }, time)
    }
}