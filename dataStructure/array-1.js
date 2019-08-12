const strings = ['a','b', 'c', 'd']
// 4 items * 4 shelves = 16 bytes on ram
// Each word weight 32 bits or 4 bytes
// Each shelve has 8 bits

// Push O(1) - Add to the end
strings.push('e')

// Pop O(1) - Remove the last one
strings.pop('e')

// unshift O(n) - Add in the begin of an array
strings.unshift('o')

// splice O(n) - Add or replace in any position of array

strings.splice(2, 0,'t')

// Accessing -> O(1)
strings[1]

// Static Array = It has fixed size, you need to specify the number of elements your
// array will hold ahead of time.

/*
  In C++

  int a[20];
  int b[5] {1,2,3,4,5}
*/

// Dynamic Array = No size limit
/*
  append or push method in dynamic array can be O(n), because when you want to add a new 
  element the ram has to move all array to another site of memory and add the new element
  with new size.
*/