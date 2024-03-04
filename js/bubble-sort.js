const container = document.getElementById("bubble-sort");
let array = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
let table = '';

function swap(x, y) {
    [x.style.height, y.style.height] = [y.style.height, x.style.height];
    [x.innerHTML, y.innerHTML] = [y.innerHTML, x.innerHTML];
}

async function sort() {
    let swapped = true;
    let current;
    let previous;

    while (swapped) {
        swapped = false;
        for (let i = 1; i < 10; i++) {
            previous = container.querySelector(`#arr-index-${i - 1}`);
            current = container.querySelector(`#arr-index-${i}`);
            previous.classList.add("selected");
            current.classList.add("selected");

            await new Promise(r => setTimeout(r, 300));
            if (array[i - 1] > array[i]) {
                swap(previous, current);
                [array[i], array[i - 1]] = [array[i - 1], array[i]];
                swapped = true;
            }
            previous.classList.remove("selected");
            current.classList.remove("selected");
            await new Promise(r => setTimeout(r, 300));
        }
    }
}

array.forEach((element, index) => {
    table += `<div id="arr-index-${index}" class="table-element" style="height: ${element}%;"><p>${element}</p></div>`
})

container.innerHTML = `<div class="table">${table}</div>`;
sort();