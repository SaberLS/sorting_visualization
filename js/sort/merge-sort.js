import { sleep } from "./helper";

let counter = 0;

async function iterateCounter(container) {
  counter++;
  container.querySelector('.iterations').innerHTML = counter;
}

export default async function merge_sort(container, array, left, right) {
  const length = right - left + 1;
  await iterateCounter(container);

  if (length <= 1) {
    return;
  }
  const middle = left + Math.round(length / 2);
  await merge_sort(container, array, left, middle - 1);
  await merge_sort(container, array, middle, right);

  await merge(container, array, { leftBound: left, rightBound: middle - 1 }, { leftBound: middle, rightBound: right });
}


async function merge(container, array, left, right) {
  const leftSlice = array.slice(left.leftBound, left.rightBound + 1);
  const rightSlice = array.slice(right.leftBound, right.rightBound + 1);
  let leftIndex = 0;
  let rightIndex = 0;
  let arrayIndex = left.leftBound;

  while (leftIndex < leftSlice.length && rightIndex < rightSlice.length) {
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

  while (leftIndex < leftSlice.length) {
    container.querySelector(`#arr-index-${arrayIndex}`).classList.add('selected');
    array[arrayIndex] = leftSlice[leftIndex];
    arrayIndex++;
    leftIndex++;
  }

  while (rightIndex < rightSlice.length) {
    container.querySelector(`#arr-index-${arrayIndex}`).classList.add('selected');
    array[arrayIndex] = rightSlice[rightIndex];
    arrayIndex++;
    rightIndex++;
  }

  for (let k = left.leftBound; k <= right.rightBound; k++) {
    await sleep(300);
    container.querySelector(`#arr-index-${k}`).classList.remove("selected");
    container.querySelector(`#arr-index-${k}`).innerHTML = array[k];
    container.querySelector(`#arr-index-${k}`).style.height = `${array[k]}%`;
  }
}
