function binarySearch(list, element) {
    if (list.length == 0) {
        return -1; //list is empty
    }
  
    for (let low = 0, high = list.length - 1; low <= high; low++, high++) {
      const mid = (low + high) / 2; 
      
      if (list[mid] == element) {
        return Math.floor(mid); //used help from chat GPT in this line to figure how to convert it back to an integer
      } else if (list[mid] < element) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return -1; //The list doesn't have the element we are looking for
  }
