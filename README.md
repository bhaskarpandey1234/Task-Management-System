# Task Management System

## Overview

This project is a task management system built using Django for the backend and React for the frontend. It allows users to register, log in, and manage their tasks efficiently. Users can create, read, update, and delete tasks, as well as categorize them by priority and status.

## Table of Contents

- [Screenshots](#Screenshots)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Database Configuration](#database-configuration)
- [API Endpoints](#api-endpoints)
- [UI/UX Design](#uiux-design)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

##Screenshots
### Login Page
![Login Page](![image](https://github.com/user-attachments/assets/cb087fef-ecee-4a87-bea1-cca8624dea7f)
)

### Registration Page
![Registration Page](![image](https://github.com/user-attachments/assets/b3ecf3e3-e367-4d89-b348-c82ddf9a43d6)
)

### Task List
![Task List](![image](https://github.com/user-attachments/assets/f1161532-961f-423e-af52-b870b731988a)
)
### Task Detail
![Task Detail](![image](https://github.com/user-attachments/assets/9327e555-f24f-4501-87d7-02d0930e31a7)
)### Task Form
![Task Form](![image](https://github.com/user-attachments/assets/58c8d545-2361-478f-9118-662cbbc169c2)
)### Filter
![Filter](![image](https://github.com/user-attachments/assets/e662b424-312b-4f03-8de4-bc8bbe508b43)


## Features

- User registration and authentication
- Create, read, update, and delete tasks
- Filter tasks by priority and due date
- Responsive design for mobile and desktop
- Clean and intuitive user interface

## Technologies Used

- **Backend**: Django, Django REST Framework
- **Frontend**: React, Axios
- **Database**: SQLite (default), can be configured to use MySQL
- **Deployment**: Docker

## Setup Instructions

### Backend Setup

1. Clone the repository:
   
git clone <repository-url>
cd task_management_backend
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

### Frontend Setup
Navigate to the frontend directory:

bash
cd task_management_frontend
Install the required packages:

npm install
Start the React development server:

npm start
Docker Setup (Optional)
You can also run the entire application using Docker. Make sure you have Docker installed and running.

Build the Docker containers:

bash
Copy code
docker-compose up --build
Access the application at http://localhost:3000 (frontend) and http://localhost:8000 (backend).

Database Configuration
The project uses SQLite by default. To switch to MySQL, update the DATABASES setting in task_management/settings.py with your MySQL credentials:

python
### API Endpoints
Here are the key API endpoints for the application:

## User Authentication APIs
POST /api/register/: Register a new user.
POST /api/login/: Log in and obtain an authentication token.
Task APIs
GET /api/tasks/: Retrieve a list of tasks.
GET /api/tasks/<id>/: Retrieve a specific task by ID.
POST /api/tasks/: Create a new task.
PUT /api/tasks/<id>/: Update an existing task.
DELETE /api/tasks/<id>/: Delete a specific task.
UI/UX Design
The application includes user-friendly interfaces for:

User authentication (Login/Register)
Task management dashboard (Task List)
Task detail view
Task creation and update forms

### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Final Steps
- Make sure to replace placeholders (like `<repository-url>`) with actual values relevant to your project.
- Add any additional information or sections that may be necessary, depending on your project specifics.
- Once finalized, save this as `README.md` in the root directory of your project.

Let me know if you need any more modifications or additional information!

