async function fetchapi(){
    //  const res = await fetch("https://dummy.restapiexample.com/api/v1/employees");
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
     const data = await res.json();

     return data;

}
const data =await fetchapi()
console.log(data)