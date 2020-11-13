function $(name) {
    let indexOfClass = name.indexOf('.');
    let indexOfId = name.indexOf('#');

    if (indexOfClass === 0) {
        const block = document.querySelector(name);
        return block;
    }
    else if (indexOfId === 0) {
        const block = document.querySelector(name);
        return block[0];
    }
    else {
        const block = document.getElementsByClassName(name);
        return block;
    }
}
