const getStyledBudget = (num: number) => {
  const arr = num.toString().split('').reverse();
  const newArr = arr.map((item, index) => {
    if (index % 3 === 0 && index !== 0) {
      return item = `${item}.`;
    }
    return item;
  })
  return newArr.reverse().join('');
};

export default getStyledBudget;