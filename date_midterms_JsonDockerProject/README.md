# JSON Docker Project

## Overview

This project is a responsive Employee Management Dashboard built using HTML, CSS, JavaScript, JSON, and Docker.

The application reads data from a JSON file and dynamically displays company information, departments, employees, and active projects.

## Features

- Dynamic JSON data loading
- Employee cards
- Department listing
- Project listing
- Company statistics
- Responsive layout
- Dockerized deployment

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- JSON
- Docker
- Nginx

## Project Structure

```
date_midterms_JsonDockerProject/
│
├── data.json
├── index.html
├── script.js
├── style.css
├── Dockerfile
├── .dockerignore
└── README.md
```

## Run Locally

```bash
python3 -m http.server 8000
```

Visit:

```
http://localhost:8000
```

## Run with Docker

Build:

```bash
docker build -t json-dashboard .
```

Run:

```bash
docker run -d -p 8080:80 --name json-dashboard-container json-dashboard
```

Visit:

```
http://localhost:8080
```

## Author

Tanisha Jalaf