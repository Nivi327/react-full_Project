export function InsertionSortAlgo(array) {
    const tempArr = new Array()
    for(let i = 0;i < array.length; i++) {
        tempArr.push(array[i])
    }
    const animations = [];
    interstionsort(tempArr, animations);
    array = tempArr;
    return animations;
}


function interstionsort(array, animations) {
    const N = array.length;
    for(let i=1; i < N; i++) {
        let tmp = array[i];
        let j = i-1;
        animations.push(["comparison1", j, i])
        animations.push(["comparison2", j, i])
        while(j >= 0 && tmp <= array[j]) {
            animations.push(["overwrite", j+1, array[j]])
            array[j+1] = array[j];
            j = j-1;
            if(j >= 0) {
                animations.push(["comparision1", j, i]);
                animations.push(["comparision2", j, i]);
            }
        }
        animations.push(["overwrite", j+1, tmp]);
        array[j+1] = tmp;
    }
}