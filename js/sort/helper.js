export function swap(x, y) {
    [x.style.height, y.style.height] = [y.style.height, x.style.height];
    [x.innerHTML, y.innerHTML] = [y.innerHTML, x.innerHTML];
}

export function make_table(container, array) {
    let table = '';
    array.forEach((element, index) => {
        table += `<div id="arr-index-${index}" class="table-element" style="height: ${element}%;"><p>${element}</p></div>`
    })

    container.innerHTML = `<div class="table">${table}</div>`;
    container.innerHTML += `<div class="stats"><p>iterations: <span class="iterations">0</span></p></div>`;
}

export function sleep(time) {
    return new Promise(r => setTimeout(r, time));
}