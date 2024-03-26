export const yearOptions = () => {
  return [...Array(new Date().getFullYear() - 1904 + 1).keys()]
    .reverse()
    .map(year => (
      <option key={year} value={1905 + year}>
        {1905 + year}
      </option>
    ));
};
