async function fetchApi() {
  const res = await fetch("https://dummy.restapiexample.com/api/v1/employees");
  const data = await res.json();

  return data;
}


async function displayData() {
  let empData = await fetchApi();
  const tabelcontainer = document.getElementById("table-body");


  empData.data.forEach(employee => {
    const row = document.createElement("tr");
    row.classList.add("items");
    row.innerHTML = `
      <td>${employee.id}</td>
      <td>${employee.employee_name}</td>
      <td>${employee.employee_salary}</td>
      <td>${employee.employee_age}</td>
      <td>${employee.profile_image}</td>
    `;
    tabelcontainer.appendChild(row);
  });
}
displayData();
