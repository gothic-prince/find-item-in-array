### Methods:
##### thFromEndOfArray
This method finds N-th item from end of array and returns its. 
If you require N-th more than length of array, then it returns first item.

```js
import find from 'find-item-in-array'
const array = ['a', 'b', 'c', 'd', 'e', 'f']
find(2).thFromEndOfArray(array) // return "e"
find(1).thFromEndOfArray(array) // return "f"
find(20).thFromEndOfArray(array) // return "a"
```

##### thFromStartOfArray
This method finds N-th item from start of array and returns its. 
If you require N-th more than length of array, then it returns last item.

```js
import find from 'find-item-in-array'
const array = ['a', 'b', 'c', 'd', 'e', 'f']
find(5).thFromStartOfArray(array) // return "e"
find(1).thFromStartOfArray(array) // return "a"
find(20).thFromStartOfArray(array) // return "f"
```
