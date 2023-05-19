export function selectionSortAlgo(array) {
    const tempArr = new Array();
    for(let i=0; i < array.length; i++) {
        tempArr.push(array[i]);
    }
    let animations = [];
    selectionSort(tempArr, animations);
    array = tempArr;
    return animations;
}

function selectionSort(array, animations){
    for(let i=0; i < array.length; i++) {
        let min_idx = i
        animations.push(["index_change", min_idx, i]);
        for(let j=i+1; j < array.length; j++) {
            animations.push(["comparision1", min_idx, j]);
            animations.push(["comparision2", min_idx, j]);
            if(array[j] < array[min_idx]) {
                animations.push(["index_change", min_idx, j]);
                min_idx = j
            }
        }
        animations.push(["overwrite", i, array[min_idx]]);
        animations.push(["overwrite", min_idx, array[i]]);
        swap(array, i, min_idx);
    }
    console.log(array);
}

function swap(arr, startIdx, endIdx) {
    let temp = arr[startIdx]
    arr[startIdx] = arr[endIdx]
    arr[endIdx] = temp;
}