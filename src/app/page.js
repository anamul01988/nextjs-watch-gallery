import Products from "@/components/UI/Products";

// export const getData = async () => {
//   const res = await fetch("http://localhost:5000/watches", {
//     cache: "force-cache",
//   });
//   const data = await res.json();

//   return data;
// };

//app router er sob component server component // getStaticProps je kina built time a data generate kore nito , json a covert kore nitob
//jeigula by default ekhn kore felbe by using force-cache aita by default korei rakhbe tai dile o hobe na dile o hobe
const HomePage = async () => {
  const res = await fetch("http://localhost:5000/watches", {
    cache: "force-cache", //aita by default
    next: {
      revalidate: 5, //isr er kaj o sesh jeita page router a onek kicu kora lagto
    },
  });
  const data = await res.json();
  console.log(data);

  // const data = await getData();
  return (
    <div>
      <h1 className="text-4xl text-center my-10">Welcome To Watch Gallery</h1>
      <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
        {data.map((product) => (
          <Products key={product.id} product={product}></Products>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
