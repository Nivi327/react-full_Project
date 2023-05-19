export function getMergeSort(array) {
    const tempArr = new Array();
    for(let i=0; i < array.length; i++){
        tempArr.push(array[i]);
    }
    if( tempArr.length <= 1){
        return tempArr;
    }
    const animations = [];
    mergesort(array, tempArr, animations, 0, tempArr.length-1);
    return animations;
}

function mergesort(array, tempArr, animations, startIdx, endIdx) {
    if(startIdx === endIdx) {
        return
    }
    let mid = Math.floor((startIdx+endIdx)/2);
    mergesort(tempArr, array, animations, startIdx, mid);
    mergesort(tempArr, array, animations, mid+1, endIdx);
    doMerge(array, tempArr, startIdx, mid, endIdx, animations);
}

function doMerge(array, tempArr, startIdx, mid, endIdx, animations) {
    let i = startIdx;
    let j = mid+1;
    let k = startIdx;
    while(i <= mid && j <= endIdx) {
        animations.push([i, j]);
        animations.push([i, j]);
        if(tempArr[i] <= tempArr[j]) {
            animations.push([k, tempArr[i]]);
            array[k++] = tempArr[i++];
        } else {
            animations.push([k, tempArr[j]]);
            array[k++] = tempArr[j++];
        }
    }
    while(i<=mid) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, tempArr[i]]);
        array[k++] = tempArr[i++];
    }
    while(j<=endIdx) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, tempArr[j]]);
        array[k++] = tempArr[j++];
    }
}