# School Management API

<a name="readme-top"></a>

# 👗 Table of Contents

- [📝 About the Project](#about-project)
  - [🛠️ Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
    - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👤 Authors](#authors)
- [💡 API Endpoints](#api-endpoints)
- [💪 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐ Show your support](#support)
- [📚 License](#license)

---

# 📝 School Management API <a name="about-project"></a>

**School Management API** is a Node.js application built using Express.js to manage schools and their details. The API allows users to add schools, retrieve a list of schools, and sort them based on proximity using latitude and longitude.

The API connects to a MySQL database for storing school data, such as name, address, latitude, and longitude.

## 🛠️ Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

- **Node.js** - Backend runtime environment
- **Express.js** - Web framework for Node.js
- **MySQL** - Relational database for storing school data
- **JavaScript** - Primary backend programming language
- **Geographical calculations** - Sorting schools by proximity

### Key Features <a name="key-features"></a>

- **Add schools**: Add new schools with required information.
- **List schools by proximity**: Retrieve a list of schools sorted by distance.
- **Data validation**: Ensure proper input when adding schools.
- **Geographical calculations**: Sort schools by distance based on provided latitude and longitude.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://schoolmanagement-y6qb.onrender.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy of this project up and running, follow these steps.

### Prerequisites

Ensure you have Node.js installed on your system.

```sh
npm install
```

### Setup

Clone this repository:

```sh
cd SchoolManagementAPI
git clone https://github.com/MayPyone/School-Management-API.git
```

### Install

Install dependencies:

```sh
cd SchoolManagementAPI
npm install
```

### Usage

Start the server:

```sh
npm start
```

### Run tests

To run tests, execute:

```sh
npm test
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Deployment

This app can be deployed to cloud platforms like **Render, Heroku, or AWS**.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 👤 Authors <a name="authors"></a>

**May Pyone**

- GitHub: [@MayPyone](https://github.com/MayPyone)
- LinkedIn: [May Pyone](https://www.linkedin.com/in/may-pyone-9439961a3/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 💡 API Endpoints <a name="api-endpoints"></a>

### **Add School**
- **URL:** `/api/addSchool/`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "Sunrise High School",
    "address": "123 Main St, NY",
    "latitude": 11.9716,
    "longitude": 77.5946
  }
  ```
- **Example Request:**
  ```sh
  POST https://schoolmanagement-y6qb.onrender.com/api/addSchool
  ```
- **Example Response:**
  ```json
  {
    "message": "School added successfully",
    "id": 1
  }
  ```

---

### **List Nearby Schools**
- **URL:** `/api/listSchools/`
- **Method:** `GET`
- **Query Parameters:**
  - `latitude` (required) - User's latitude
  - `longitude` (required) - User's longitude
- **Example Request:**
  ```sh
  GET https://schoolmanagement-y6qb.onrender.com/api/listSchools?latitude=37.7749&longitude=-122.4194
  ```
- **Example Response:**
  ```json
  [
    {
      "id": 1,
      "name": "New York High School",
      "latitude": 37.7749,
      "longitude": -122.4194,
      "distance": 14103.10
    }
  ]
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 💪 Future Features <a name="future-features"></a>

- [ ] **Delete schools**
- [ ] **Update school information**
- [ ] **Search schools by name or address**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## ⭐ Show your support <a name="support"></a>

If you like this project, please star ⭐ it!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 📚 License <a name="license"></a>

This project is **MIT licensed**.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

