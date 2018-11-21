function random_selection(array, nth_order) {

    let left = 0
    let right = array.length - 1
    let chosen = divide(array, left, right, nth_order)
    return chosen

    function divide(array, left, right, nth_order) {

        let wall = partition(array, left, right)

        if (wall === nth_order) {
            return array[wall]
        }

        if (nth_order > wall) {
            /*search everything past the wall again if pivot lands on index < than requested*/
            return divide(array, wall + 1, right, nth_order)
        } else {
            return divide(array, left, wall - 1, nth_order)
        }
        
    }

}

function partition(arr, leftSide, RightSide) {

    let pivot = arr[leftSide]

    /* place the wall to the left of the pivot */
    let wall = leftSide + 1

    for (let left = leftSide + 1; left <= RightSide; left++) {
        if (pivot > arr[left]) {
            swap(arr, left, wall)
            wall++
        }
    }

    swap(arr, leftSide, wall - 1)

    return wall - 1

}

function swap(arr, current, wall) {
    let temp = arr[current]
    arr[current] = arr[wall]
    arr[wall] = temp
}


module.exports = random_selection