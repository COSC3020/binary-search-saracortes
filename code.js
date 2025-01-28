function binarySearch(list, element) {
  let low = 0;
  let high = list.length - 1;
  let result = -1;

  while (low <= high) {
    //used help from chat gpt to figure out how to round to nearest int
    const midIndex = Math.floor((low + high) / 2);

    if (list[midIndex] === element) {
      result = midIndex; // Record the current index
      high = midIndex - 1; // Continue searching in the left half for the first occurrence
    } else if (list[midIndex] < element) {
      low = midIndex + 1;
    } else {
      high = midIndex - 1;
    }
  }

  return result;
}
