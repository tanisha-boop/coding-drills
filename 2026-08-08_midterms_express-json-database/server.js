const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = 3000;

const databasePath = path.join(
    __dirname,
    "data",
    "employees.json"
);

app.use(express.json());

app.use(express.static(
    path.join(__dirname, "public")
));

function getEmployees() {

    const data = fs.readFileSync(
        databasePath,
        "utf8"
    );

    return JSON.parse(data);
}

app.get("/api/employees", (req, res) => {

    try {

        const employees = getEmployees();

        res.json(employees);

    } catch (error) {

        res.status(500).json({
            error: "Unable to read employee database"
        });

    }

});

app.get("/api/employees/:id", (req, res) => {

    try {

        const employees = getEmployees();

        const employee = employees.find(
            employee => employee.id === Number(req.params.id)
        );

        if (!employee) {

            return res.status(404).json({
                error: "Employee not found"
            });

        }

        res.json(employee);

    } catch (error) {

        res.status(500).json({
            error: "Unable to read employee database"
        });

    }

});

app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});