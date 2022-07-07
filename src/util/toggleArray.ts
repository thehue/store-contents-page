export const toggleArray = (
  array: Array<string | number>,
  value: string | number,
) => {
  const list = [...array];
  const index = list.indexOf(value);
  if (index < 0) {
    list.push(value);
  } else {
    list.splice(index, 1);
  }

  return list;
};
