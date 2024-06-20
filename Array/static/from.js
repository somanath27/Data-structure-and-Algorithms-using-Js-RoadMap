/**
 * The Array.from() static method creates a new,
 *  shallow-copied Array instance from an iterable or array-like object.
 */

/**
 * Array.from(arrayLike)  An iterable or array-like object to convert to an array
 * Array.from(arrayLike, mapFn) 
   A function to call on every element of the array.
   If provided, every value to be added to the array is
   first passed through this function,
   and mapFn's return value is added to the array instead.
   The function is called with the following arguments:

 * Array.from(arrayLike, mapFn, thisArg) Value to use as this when executing mapFn.
 */

/**
 * Return Value: A new Array instance.
 */

/**
 * Example
 * Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP, etc.)
 */

const seq = (start, stop, step) => {
 return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
};

const result= seq(2, 80, 8);
console.log(result)  //80-2==78/8==9+1==10
