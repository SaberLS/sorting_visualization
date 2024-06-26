export function swap(x, y) {
  [x.style.height, y.style.height] = [y.style.height, x.style.height];
}

export function make_table(container, array) {
  let table = '';
  array.forEach((element, index) => {
    table += `<div id="arr-index-${index}" class="table-element" style="height: ${element}%;"></div>`
  })

  container.querySelector(".table").innerHTML = table;
}

import { speed } from "../app";
export function sleep() {
  return new Promise(r => setTimeout(r, speed));
}
