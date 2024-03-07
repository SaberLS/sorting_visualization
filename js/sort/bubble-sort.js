import { sleep, swap } from "./helper";

export default async function bubble_sort(container, array) {
    let counter = 0;
    container.querySelector(".iterations").innerHTML = counter;

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
            await sleep(300);

            if (array[i - 1] > array[i]) {
                swap(previous, current);
                [array[i], array[i - 1]] = [array[i - 1], array[i]];
                swapped = true;
            }
            previous.classList.remove("selected");
            current.classList.remove("selected");
            await sleep(300);

            counter++;
            container.querySelector(".iterations").innerHTML = counter;
        }
        counter++;
        container.querySelector(".iterations").innerHTML = counter;
    }
}