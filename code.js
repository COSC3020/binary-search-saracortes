function binarySearch(list, element) {
  let low = 0;
  let high = list.length - 1;
  let result = -1;

  while (low <= high) {
    //used help from Chat GPT to figure out how to calculate the middle index
    const midIndex = Math.floor((low + high) / 2);

    if (list[midIndex] === element) {
      return midIndex;
    }

    if (list[midIndex] < element) {
      low = midIndex + 1;
    } else {
      high = midIndex - 1;
    }
  }

  return result;
}
