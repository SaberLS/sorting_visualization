const container = document.getElementById("bubble-sort");
const array = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

let table = '';

array.forEach(function (element, index) {
    table += `<div id="arr-index-${index}" class="table-element" style="height: ${element}%;"><p>${element}</p></div>`
})

container.innerHTML = `<div class="table">${table}</div>`;