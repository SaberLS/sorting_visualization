import { make_table } from "./sort/helper.js";
import bubble_sort from "./sort/bubble-sort.js";
import merge_sort from "./sort/merge-sort.js";
import quick_sort from "./sort/quick-sort.js";

export let cancel = 0;

const sort_btn = document.getElementById("sort-btn");
const random_btn = document.getElementById("random-btn");
const descending_btn = document.getElementById("descending-btn");
const sorted_btn = document.getElementById("sorted-btn");

const bubble_sort_container = document.getElementById("bubble");
const merge_sort_container = document.getElementById("merge");
const quick_sort_container = document.getElementById("quick");

let bubble_array = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5];
let merge_array = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5];
let quick_array = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5];

async function sort() {
  cancel = 0;

  sort_btn.innerText = 'stop';
  sort_btn.removeEventListener('click', sort);
  sort_btn.addEventListener('click', () => {
    cancel = 1;
    sort_btn.innerText = 'sort';
    sort_btn.removeEventListener('click', () => { });
    sort_btn.addEventListener("click", sort);
  })


  random_btn.disabled = 'true';
  descending_btn.disabled = 'true';
  sorted_btn.disabled = 'true';

  await Promise.all([
    bubble_sort(bubble_sort_container, bubble_array),
    merge_sort(merge_sort_container, merge_array),
    quick_sort(quick_sort_container, quick_array)
  ]);

  sort_btn.innerText = 'sort';
  sort_btn.addEventListener("click", sort);

  random_btn.disabled = null;
  descending_btn.disabled = null;
  sorted_btn.disabled = null;
}

make_table(bubble_sort_container, bubble_array);
merge_sort_container.querySelector(".table").innerHTML = bubble_sort_container.querySelector(".table").innerHTML;
quick_sort_container.querySelector(".table").innerHTML = bubble_sort_container.querySelector(".table").innerHTML;

sort_btn.addEventListener("click", sort);

random_btn.addEventListener("click", () => {
  bubble_array = [];
  merge_array = [];
  quick_array = [];

  for (let i = 100, k = 0; i > 0; k++, i = i - 5) {
    bubble_array[k] = Math.floor(Math.random() * 100) + 1;
    merge_array[k] = bubble_array[k];
    quick_array[k] = bubble_array[k];
  }

  make_table(bubble_sort_container, bubble_array);
  merge_sort_container.querySelector(".table").innerHTML = bubble_sort_container.querySelector(".table").innerHTML;
  quick_sort_container.querySelector(".table").innerHTML = bubble_sort_container.querySelector(".table").innerHTML;
});

descending_btn.addEventListener("click", () => {
  bubble_array = [];
  merge_array = [];
  quick_array = [];

  for (let i = 100, k = 0; i > 0; k++, i = i - 5) {
    bubble_array[k] = i;
    merge_array[k] = i;
    quick_array[k] = i;
  }

  make_table(bubble_sort_container, bubble_array);
  merge_sort_container.querySelector(".table").innerHTML = bubble_sort_container.querySelector(".table").innerHTML;
  quick_sort_container.querySelector(".table").innerHTML = bubble_sort_container.querySelector(".table").innerHTML;
});

sorted_btn.addEventListener("click", () => {
  bubble_array = [];
  merge_array = [];
  quick_array = [];

  for (let i = 5, k = 0; i < 101; k++, i = i + 5) {
    bubble_array[k] = i;
    merge_array[k] = i;
    quick_array[k] = i;
  }

  make_table(bubble_sort_container, bubble_array);
  merge_sort_container.querySelector(".table").innerHTML = bubble_sort_container.querySelector(".table").innerHTML;
  quick_sort_container.querySelector(".table").innerHTML = bubble_sort_container.querySelector(".table").innerHTML;
});
