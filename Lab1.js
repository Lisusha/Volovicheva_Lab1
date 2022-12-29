const findMoreThanNOccurrences = (list, n) => {
   return list.slice().sort().reduce((acc, value, index, list) => {
      if (value !== list[index - 1]) {
         acc.push([value, 1]);
      } else {
         acc[acc.length - 1][1] += 1;
      }
      return acc;
   }, []).reduce((acc, [value, counter]) => {
      if (counter > n) {
         acc.push(value);
      }
      return acc;
   }, []);
}

console.log(findMoreThanNOccurrences([1, 2, 2, 'abc', 4, 4, 4, 6, 'abc', 'abc'], 2));