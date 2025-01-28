function binarySearch(list, element) {
  let low = 0;
  let high = list.length - 1;
  let result = - 1;

  while (low <= high) {
    const midIndex = Math.floor((low + high) / 2); //used help from chat gpt to figure out how to round to nearest int

    if (list[midIndex] === element) {
      result = midIndex;
      high = midIndex - 1;
    } else if (list[midIndex] < element) {
      low = midIndex + 1;
    } else {
      high = midIndex - 1;
    }
  }

  return result;
}
