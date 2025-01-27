function binarySearch(list, element) {
    if (list.length === 0) {
        return -1; // List is empty
    }

    let low = 0;
    let high = list.length - 1;

    while (low <= high) {

        //Used help from Chat GPT to figure out how to use bitwise shifting
        const midIndex = (low + high) >> 1;

        if (list[midIndex] === element) {
            return midIndex; 
        } else if (list[midIndex] < element) {
            low = midIndex + 1; 
        } else {
            high = midIndex - 1;
        }
    }

    return -1; // The list didn't have the element we were looking for
}
