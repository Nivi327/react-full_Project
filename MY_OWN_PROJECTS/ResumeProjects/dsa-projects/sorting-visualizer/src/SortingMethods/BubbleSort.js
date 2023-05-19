export function BubbleSortAlgo(array) {
    let animations = [];
    let arr = new Array();
    for(let i = 0; i < array.length; i++) {
        arr.push(array[i])
    }
    let tempArr = arr.slice();
    bubblesort(tempArr, animations);
    array = tempArr;
    return [animations, array];
}

function bubblesort(array, animations) {
    const N = array.length;
    for(let i = 0; i < N-1; i++) {
        for(let j = 0; j < N-i-1; j++) {
            animations.push([j, j+1]);
            animations.push([j, j+1]);
            if(array[j] > array[j+1]) {
                animations.push([j, array[j+1]]);
                animations.push([j+1, array[j]]);
                swap(array, j, j+1);
            }
            else{
                animations.push([-1, -1])
                animations.push([-1, -1])
            }
        }
    }
}

function swap(array, firstIdx, secondIdx) {
    let temp = array[firstIdx]
    array[firstIdx] = array[secondIdx]
    array[secondIdx] = temp;
}