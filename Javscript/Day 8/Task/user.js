async function fetchApi() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return data;
}
console.log("hhe")
async function displayData() {
  let user = await fetchApi();
  const tabelcontainer = document.getElementById("table-body");

  
  user.forEach(user => {
    const row = document.createElement("tr");
    row.classList.add("items");
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.username}</td>
      <td>${user.phone}</td>
    `;
    tabelcontainer.appendChild(row);
  });
}

displayData();