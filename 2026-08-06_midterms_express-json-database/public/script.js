async function loadEmployees() {

    const employeeContainer =
        document.getElementById("employees");

    const employeeCount =
        document.getElementById("employeeCount");

    try {

        const response =
            await fetch("/api/employees");

        if (!response.ok) {

            throw new Error(
                "Failed to load employees"
            );

        }

        const employees =
            await response.json();

        employeeCount.textContent =
            employees.length;

        employeeContainer.innerHTML = "";

        employees.forEach(employee => {

            const card =
                document.createElement("article");

            card.className = "employee-card";

            card.innerHTML = `
                <div class="employee-top">
                    <div class="avatar">
                        ${employee.name.charAt(0)}
                    </div>

                    <span class="status">
                        ${employee.status}
                    </span>
                </div>

                <h3>${employee.name}</h3>

                <p class="position">
                    ${employee.position}
                </p>

                <p>
                    <strong>Department:</strong>
                    ${employee.department}
                </p>

                <p>
                    <strong>Location:</strong>
                    ${employee.location}
                </p>
            `;

            employeeContainer.appendChild(card);

        });

    } catch (error) {

        employeeContainer.innerHTML = `
            <p class="error">
                Unable to load employee data.
            </p>
        `;

        console.error(error);

    }

}

document
    .getElementById("refreshButton")
    .addEventListener(
        "click",
        loadEmployees
    );

loadEmployees();