import { make_table } from "./sort/helper.js";
import bubble_sort from "./sort/bubble-sort.js";
import merge_sort from "./sort/merge-sort.js";
import quick_sort from "./sort/quick-sort.js"

const sort_btn = document.getElementById("sort-btn");

const bubble_sort_container = document.getElementById("bubble-sort");
const merge_sort_container = document.getElementById("merge-sort");
const quick_sort_container = document.getElementById("quick-sort");

const array = [100, 15, 90, 25, 80, 35, 70, 45, 60, 55, 50, 65, 40, 75, 30, 85, 20, 95, 10, 5];

make_table(bubble_sort_container, array);
make_table(merge_sort_container, array);
make_table(quick_sort_container, array);

sort_btn.addEventListener("click", () => {
  bubble_sort(bubble_sort_container, [...array]);
  merge_sort(merge_sort_container, [...array], 0, array.length - 1);
  quick_sort(quick_sort_container, [...array], 0, array.length - 1);
});
