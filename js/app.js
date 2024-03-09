import { make_table } from "./sort/helper.js";
import bubble_sort from "./sort/bubble-sort.js";
import merge_sort from "./sort/merge-sort.js";
import quick_sort from "./sort/quick-sort.js"

const sort_btn = document.getElementById("sort-btn");
let sorted = false;

const bubble_sort_container = document.getElementById("bubble-sort");
const merge_sort_container = document.getElementById("merge-sort");
const quick_sort_container = document.getElementById("quick-sort");

const array = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5];

async function sort() {
  if (sorted) {
    make_table(bubble_sort_container, array);
    make_table(merge_sort_container, array);
    make_table(quick_sort_container, array);
    sorted = false;
  }
  sorted = true;

  sort_btn.disabled = true;
  await Promise.all([
    merge_sort(merge_sort_container, [...array]),
    quick_sort(quick_sort_container, [...array]),
    bubble_sort(bubble_sort_container, [...array])
  ]);
  sort_btn.disabled = false;
}

make_table(bubble_sort_container, array);
make_table(merge_sort_container, array);
make_table(quick_sort_container, array);

sort_btn.addEventListener("click", sort);
