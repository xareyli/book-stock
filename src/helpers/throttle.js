function throttle(func, ms) {
    let isThrottled = false,
        savedArgs;

    function wrapper(...args) {
        if (isThrottled) {
            savedArgs = args;
            return;
        }
        isThrottled = true;
        func(...args);

        setTimeout(() => {
            isThrottled = false;
            if (savedArgs) {
                wrapper(...savedArgs);
                savedArgs = null;
            }
        }, ms);
    }

    return wrapper;
}

export default throttle;
