function binarySearch(list, element) {
    if (list.length == 0) {
        return -1; //List has nothing in it
    }
    var low = 0;
    var high = list.length-1;
    while (low <= high) {
        const mid = (low + high) / 2; 
        // Used help from Chat GPT to figure out how to convert it to an integer
        const midIndex = low + high >> 1;

        if (list[midIndex] == element) {
          return midIndex;
        } else if (list[midIndex] < element) {
          low = midIndex + 1;
        } else {
          high = midIndex - 1;
        }
      }
    
      return -1; // List doesn't have the element we are looking for
}
