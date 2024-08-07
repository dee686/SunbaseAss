# Customer Management Application

## Overview

This Customer Management Application allows users to manage customer records with functionality to add, edit, delete, and search for customers. The application features a login system utilizing JWT (JSON Web Tokens) for authentication and offers a responsive design. 

## Chart Flow of Project

### New customers must signup

 
![Screenshot (274)](https://github.com/user-attachments/assets/bf53d8d7-1d44-4f04-879c-0c73cd5c624d)


### Once the Customer gets enrolled then he/she can log in.



![Screenshot (275)](https://github.com/user-attachments/assets/9566854d-965a-421a-b7f7-7b6ebf1c86fd)

### Once the customer gets logged in that customer will be directed to the dashboard



![Screenshot (276)](https://github.com/user-attachments/assets/5a51cbf3-2e78-484f-9725-b38659c981c5)


### Customer can search the other customer By field name, email, phone number, and city

![Screenshot (277)](https://github.com/user-attachments/assets/f6e37488-f433-4c6c-9243-b4535cbdf9ff)

### Sync Facility is also added so that whatever customer data we get from the database will get added to our database

![Screenshot (279)](https://github.com/user-attachments/assets/ef1cc231-f30a-43c9-9a35-fcc7f21b78d8)


## Features

- User authentication with JWT tokens
- Add, edit, delete customer records
- Search customer records by name, city, email, and phone number
- Sync customer records from the backend
- Responsive design
- Login features

## Technologies Used

- **Frontend**: React
- **Backend**: Spring Boot, Java
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)

## Installation

### Prerequisites

- Java 8 or above
- Maven

### Backend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dee686/SunbaseAss.git

### Frontend 

- React

## Usage

### Login

1. Open the application in your web browser.
2. Navigate to the login page.
3. Enter your login credentials.
4. Upon successful login, you will be redirected to the customer list page.

### Managing Customers

- **Add Customer**: Click the "Add Customer" button and fill out the form.
- **Edit Customer**: Click the edit button next to the customer you want to edit.
- **Delete Customer**: Click the delete button next to the customer you want to delete.
- **Search Customers**: Use the search bar to filter customers by keyword.

## API Endpoints

### Authentication

- `GET /signIn` - Login endpoint (Basic Auth)

### Customers

- `GET /all` - Get all customers 
- `POST /customers` - Add a new customer
- `DELETE /delete/{id}` - Delete a customer by ID

### Sync

- `POST /sync-customers` - Sync customers with the backend

## Frontend Functionality

### Event Listeners

- **Login Form**: Handles user login and stores JWT token.
- **Add Customer Form**: Submits new customer data to the backend.
- **Sync Button**: Syncs customer data with the backend.
- **Search Input**: Filters customer list based on search keyword.

### Functions

- **loadCustomers**: Fetches and displays customer data.
- **displayCustomers**: Renders customer data in the table.
- **editCustomer**: Redirects to the edit customer page.
- **deleteCustomer**: Deletes a customer and reloads the customer list.
- **logout**: Clears the JWT token and redirects to the login page.

   

