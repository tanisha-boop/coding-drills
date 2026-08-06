fetch("data.json")

.then(response => response.json())

.then(data => {

document.getElementById("employeeCount").textContent =
data.company.employees;

document.getElementById("projectCount").textContent =
data.company.activeProjects;

document.getElementById("departmentCount").textContent =
data.departments.length;

document.getElementById("companyName").textContent = data.company.name;

document.getElementById("companyInfo").textContent =
`${data.company.industry} | ${data.company.location} | Employees: ${data.company.employees}`;

const departments = document.getElementById("departments");

data.departments.forEach(department => {

const li = document.createElement("li");

li.textContent = department;

departments.appendChild(li);

});

const employeeContainer = document.getElementById("employees");

data.employees.forEach(employee => {

const card = document.createElement("div");

card.className = "card";

card.innerHTML = `
<h3>${employee.name}</h3>

<p><strong>${employee.position}</strong></p>

<p>${employee.department}</p>

<p>${employee.experience}</p>

<p>${employee.skills.join(", ")}</p>
`;

employeeContainer.appendChild(card);

});

const projectContainer = document.getElementById("projects");

data.projects.forEach(project=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`
<h3>${project.name}</h3>
<p>${project.status}</p>
`;

projectContainer.appendChild(card);

});

});