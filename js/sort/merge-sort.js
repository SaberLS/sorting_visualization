import { cancel } from "../app";
import { sleep } from "./helper";

let counter = 0;

export default async function merge_sort(container, array) {
  counter = 0;
  container.querySelector('.iterations').innerHTML = counter;

  await sort(container, array, 0, array.length - 1);
}

async function sort(container, array, left, right) {
  counter++;
  container.querySelector('.iterations').innerHTML = counter;

  const length = right - left + 1;
  if (length <= 1 || cancel === 1) {
    return;
  }

  const middle = left + Math.round(length / 2);
  if (cancel === 0) {
    await sort(container, array, left, middle - 1);
    await sort(container, array, middle, right);
  }

  await merge(container, array, { leftBound: left, rightBound: middle - 1 }, { leftBound: middle, rightBound: right });
}


async function merge(container, array, left, right) {
  const leftSlice = array.slice(left.leftBound, left.rightBound + 1);
  const rightSlice = array.slice(right.leftBound, right.rightBound + 1);
  let leftIndex = 0;
  let rightIndex = 0;
  let arrayIndex = left.leftBound;

  while (leftIndex < leftSlice.length && rightIndex < rightSlice.length && cancel === 0) {
    container.querySelector(`#arr-index-${arrayIndex}`).classList.add('selected');
    if (leftSlice[leftIndex] < rightSlice[rightIndex]) {
      array[arrayIndex] = leftSlice[leftIndex];
      arrayIndex++;
      leftIndex++;
    } else {
      array[arrayIndex] = rightSlice[rightIndex];
      arrayIndex++;
      rightIndex++;
    }
  }

  while (leftIndex < leftSlice.length && cancel === 0) {
    container.querySelector(`#arr-index-${arrayIndex}`).classList.add('selected');
    array[arrayIndex] = leftSlice[leftIndex];
    arrayIndex++;
    leftIndex++;
  }

  while (rightIndex < rightSlice.length && cancel === 0) {
    container.querySelector(`#arr-index-${arrayIndex}`).classList.add('selected');
    array[arrayIndex] = rightSlice[rightIndex];
    arrayIndex++;
    rightIndex++;
  }

  for (let k = left.leftBound; k <= right.rightBound && cancel === 0; k++) {
    await sleep();
    container.querySelector(`#arr-index-${k}`).classList.remove("selected");
    container.querySelector(`#arr-index-${k}`).style.height = `${array[k]}%`;
  }
}
