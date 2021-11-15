async function getData(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = res.json();
  return await result;
        // .then(res => res.json())
        // .then(result =>{
        //     return  (result)
        // })
}


//  const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const result = res.json();
//   return await result;
        // .then(res => res.json())
        // .then(result =>{
        //     return  (result)
        // })
//}

export default getData;