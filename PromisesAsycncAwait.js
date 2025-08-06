// Menggunakan Promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data berhasil diambil!");
    }, 1000);
  });
};

fetchData().then(data => console.log(data));

// Async/Await
const getData = async () => {
  const result = await fetchData();
  console.log(result);
};

getData();
