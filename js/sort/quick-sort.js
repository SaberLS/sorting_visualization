import { cancel } from "../app";
import { sleep, swap } from "./helper";

let counter = 0;

export default async function quick_sort(container, array) {
  counter = 0;
  container.querySelector('.iterations').innerHTML = counter;

  await sort(container, array, 0, array.length - 1);
}

async function sort(container, array, leftBound, rightBound) {
  counter++;
  container.querySelector('.iterations').innerHTML = counter;
  if (leftBound >= rightBound || leftBound < 0 || cancel === 1) {
    return;
  }

  const pivot = await partition(container, array, leftBound, rightBound);

  if (cancel === 0) {
    await sort(container, array, leftBound, pivot - 1);
    await sort(container, array, pivot + 1, rightBound);
  }
}

async function partition(container, array, leftBound, rightBound) {
  const pivot = array[rightBound];
  const pivot_element = container.querySelector(`#arr-index-${rightBound}`);
  pivot_element.classList.add('selected');
  await sleep();

  let i = leftBound - 1;
  let j_element;
  let i_element;

  for (let j = leftBound; j < rightBound && cancel === 0; j++) {
    j_element = container.querySelector(`#arr-index-${j}`);
    j_element.classList.add('selected');

    if (array[j] <= pivot) {
      i++;
      i_element = container.querySelector(`#arr-index-${i}`);
      swap(j_element, i_element);
      [array[i], array[j]] = [array[j], array[i]];
      await sleep();
    }
    j_element.classList.remove('selected');
  }

  i++;
  i_element = container.querySelector(`#arr-index-${i}`);
  i_element.classList.add('selected');

  await sleep();
  swap(pivot_element, i_element);
  [array[i], array[rightBound]] = [array[rightBound], array[i]];

  i_element.classList.remove('selected');
  pivot_element.classList.remove('selected');
  return i;
}
