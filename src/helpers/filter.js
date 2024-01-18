export function removeDuplicate(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
}
