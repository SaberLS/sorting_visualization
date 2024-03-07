import { make_table } from "./sort/helper.js";
import bubble_sort from "./sort/bubble-sort.js";
import merge_sort from "./sort/merge-sort.js";

const sort_btn = document.getElementById("sort-btn");

const bubble_sort_container = document.getElementById("bubble-sort");
const merge_sort_container = document.getElementById("merge-sort");
const array = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
const arrayTest = [30, 50, 70, 20, 90, 10, 80, 40];

make_table(bubble_sort_container, array);
make_table(merge_sort_container, array);

sort_btn.addEventListener("click", () => {
  bubble_sort(bubble_sort_container, [...array]);
  merge_sort(merge_sort_container, [...array], 0, array.length - 1);
});
