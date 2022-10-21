export default (args) => {
  const res = {};

  args.forEach((value, index, array) => {
    if (value.charAt(0) === '-') {
      if (array[index - 1] === value) {
        res[value.substring(1)] = true;

        return;
      }

      if (array[index + 1].charAt(0) === '-') {
        res[value.substring(1)] = true;

        return;
      }

      res[value.substring(1)] = array[index + 1];
    }
  });

  return res;
};
