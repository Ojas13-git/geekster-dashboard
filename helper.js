
 
  const filterDataByColumns = (data, filteredCols) => data.map((row) =>
    filteredCols.reduce((acc, key) => {
      if (row[key] !== undefined) {
        acc[key] = row[key];
      }
      return acc;
    }, {})
  )

  export default filterDataByColumns