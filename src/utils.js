const paginate = (data) => {
  const itemsPerPage = 9;
  const pages = Math.ceil(data.length / itemsPerPage);
  //empty object with a length property
  //map with undefined value _
  const newData = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });
  return newData;
};

export default paginate;
