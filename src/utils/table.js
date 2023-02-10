export function sortData(data, by, order, type = 'string') {
  function compare(firstElement, secondElement) {
    // Use toUpperCase() to ignore character casing
    const firstCombination = (order === 'asc') ? firstElement[by] : secondElement[by]
    const secondCombination = (order === 'asc') ? secondElement[by] : firstElement[by]

    let comparison = 0;
    if (firstCombination > secondCombination) {
      comparison = 1;
    } else if (firstCombination < secondCombination) {
      comparison = -1;
    }
    return comparison;
  }

  return [...data].sort(compare);
}