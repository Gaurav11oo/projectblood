# #Mern Project Blood Bank Management System

### Welcome to the Blood Bank Management System, a web application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This application aims to streamline the management of blood banks by providing features for donors, recipients, and administrators.

# # Authors : -

## Course : BCA 4th Semester

### ● Sanskriti Dwivedi

### ● Om Chaturvedi

### ● Himanshu Gupta

### ● Gaurav Nishad

# #Table Of Contents :-

### ● Introduction

### ● Features

### ● Technologies Used

### ● Deployment

### ● Installation

### ● Configuration

### ● Usage

### ● API Reference

### ● API Documentation

### ● Folder Structure

### ● Contacts

# #Features :-

### ● Donor Management : Register and manage donor information.

### ● Recipient Management : Register and manage recipient information.

### ● Blood Inventory : Track and manage blood stock levels.

### ● Recipient Management : Register and manage recipient information.

### ● Blood Requests : Create and manage blood donation and transfusion requests.

### ● User Authentication : Secure user authentication and authorization.

### ● Admin Dashboard : Admin panel for managing the system.

### ● Search Functionality : Search for donors and blood types.

### ● Notifications : Email and SMS notifications for donors and recipients.

# #Technologies Used :-

![Node.js & express](https://qualitapps.com/wp-content/uploads/2023/02/102-300x200.png)

![MongoDB](https://img.icons8.com/color/120/000000/mongodb.png)
![React](https://img.icons8.com/color/120/000000/react-native.png)
![CSS](https://img.icons8.com/?size=120&id=21278&format=png&color=000000/css.png)
![jwt](https://img.icons8.com/?size=100&id=rHpveptSuwDz&format=png&color=000000/TWT.png)

### ● Backend: Node.js, Express.js

### ● Database: MongoDB

### ● Authentication: JWT (JSON Web Tokens)

### ● Styling: CSS, Bootstrap

### ● Others: Axios, Mongoose

# # Deployment :-

### ● [Deployment](https://projectblood.onrender.com/)

# # Installation :-

### Follow these steps to set up the project on your local machine :-

## Prerequisites :-

### ● Node.js

### ● MongoDB

### ● GIT

## Please Folows the steps : -

### 1. Clone the Repository :-

```bash
git clone https://github.com/Gaurav11oo/projectblood.git

cd blood-bank-management-system
```

### 2. Install Backend Dependencies :-

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies :-

```bash
cd backend
npm install
```

# # Configuration :-

### 1. Backend Confuguration :-

### ● Create a .env file in the backend directory with the following content:-

```env
PORT=5000
DEV_MODE = development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=your_email_service_provider
```

## 2. Frontend Configuration:-

```
REACT_APP_API_URL=http://localhost:5000/api

```

# #Usage :-

## <i> 1. Start The Backend Server :-

```
cd backend
npm run server

```

## 2. Start The Frontend Development :-

```
cd client
npm run  start

```

## 3. To Start The Backend Server & Frontend Development at same time:-

```
cd client
npm run dev.

```

</i>
## 4. Open your browser and navigate to http://localhost:3000 to access the application.

# #API Reference

### ● To login

```http
  GET /api/auth
```

| Parameter | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| Email     | `string` | **Required**. Your Email    |
| Password  | `string` | **Required**. Your Password |

### ● To Register

```http
  Post /api/auth
```

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| role      | `string` | **Required**. Your Role                           |
| name      | `string` | **Required**. Your Name                           |
| email     | `string` | **Required**. Your Email                          |
| password  | `string` | **Required**. Make password                       |
| Website   | `string` | Your website only for hospitals and organisations |
| Address   | `string` | **Required**. Your Address                        |
| Phone     | `string` | **Required**. Your Phone No.                      |

### ● To Add Inventory

```http
  POST /api/inventory
```

| Parameter     | Type     | Description                                      |
| :------------ | :------- | :----------------------------------------------- |
| inventoryType | `string` | **Required**. Choose Inventory Type In or out    |
| bloodGroup    | `string` | **Required**. Choose blood group from list       |
| quantity      | `Int32`  | **Required**. Blood quantity                     |
| email         | `string` | **Required**. Donar's Email who already register |

# # API Documentation : -

### ● [Documentation](https://documenter.getpostman.com/view/36462454/2sA3duHDZ8#56c799b1-0b16-4724-87b9-a1a9b4630048)



# #Folder Structure :-

```
blood-bank-management-system/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
├── client/
│   ├── public/
|   |     |── assets/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── index.css/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── styles.css
│   └── package.json
├── README.md
└── .gitignore

```

# # To Contact Us :-

### ● GitHub : [Sanskriti Dwivedi](https://github.com/sanskkriti30)

### ● GitHub : [Om Chaturvedi](https://github.com/Krishna1604)

### ● GitHub : [Himanshu Gupta](https://github.com/HimanshuGupta955)


### ● GitHub : [Gaurav Nishad](https://github.com/Gaurav11oo/)

