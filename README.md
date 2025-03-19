
# School Management API

<a name="readme-top"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
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
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 School Management API <a name="about-project"></a>

**School Management API** is a Node.js application built using the Express.js framework to manage schools and their details. This API allows users to add new schools, retrieve a list of schools, and sort them based on proximity to a given location (latitude and longitude).

The API connects to a MySQL database for storing school data such as name, address, latitude, and longitude.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Node.js</summary>
  <ul>
    <li>Express.js for building the API</li>
    <li>MySQL for storing school data</li>
    <li>JavaScript for backend logic</li>
    <li>Geographical calculations for sorting schools by proximity</li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- **[Add schools]**: Add a new school to the database with required information.
- **[List schools by proximity]**: Retrieve a list of schools sorted by proximity to a user's location.
- **[Data validation]**: Ensure proper input validation when adding schools.
- **[Geographical calculations]**: Sort schools based on geographical distance from the user's provided latitude and longitude.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link (coming soon!)](https://schoolmanagement-y6qb.onrender.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy of this project up and running, follow these steps.

### Prerequisites

In order to run this project, you need to install:

```sh
npm install
```

### Setup

Clone this repository to your desired folder:

```sh
cd SchoolManagementAPI
git clone https://github.com/MayPyone/School-Management-API.git
```

### Install

Install the project dependencies with:

```sh
cd SchoolManagementAPI
npm install
```

### Usage

To run the project, execute the following command:

```sh
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser or use Postman for API requests.

### Run tests

To run tests, use the following command:

```sh
npm test
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Deployment

You can deploy this app to any cloud platform like Heroku, Render, or AWS.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **May Pyone**

- GitHub: [@May Pyone](https://github.com/MayPyone)
- LinkedIn: [May Pyone](https://www.linkedin.com/in/may-pyone-9439961a3/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **[Delete school]**
- [ ] **[Update school information]**
- [ ] **[Add search functionality by school name or address]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to fork the project, create a branch, and submit a pull request.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, please star ⭐️ it!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
