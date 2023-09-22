export const ascendingPrice = () => {
  const sortedItems = [...category];
  sortedItems.sort((a, b) => a.price - b.price);
  setCategory(sortedItems);
};

export const decendingPrice = () => {
  const sortedItems = [...category];
  sortedItems.sort((a, b) => b.price - a.price);
  setCategory(sortedItems);
};

export const latest = () => {
  const sortedItems = [...category];
  sortedItems.sort((a, b) => new Date(b.Date) - new Date(a.Date));
  setCategory(sortedItems);
};
