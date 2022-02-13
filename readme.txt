Steps to run the project:

The project is put under a folder called laravel and inside it consists of 3 folders and 2 files.

1. React app :- foldername - react-app
2. Chat Server :- foldername - server
3. Laravel app :- foldername - laravel-app
4. Readme :- filename - readme.txt
5. Database file :- filename - lunamar.sql

once the file is extracted put the whole file in ./Xampp/htdocs/ folder.

imp note: In the laravel app database connection. The .env file port number has to be changed accordingly.

now open the terminal inside the laravel folder and redirect to react-app folder and follow the below commands

1. npm install react-router-dom

2. npm install axios

3. npm install @material-ui/core

4. npm start

now open new terminal in server folder and follow the below commands

1. npm install express

2. npm install nodemon

3. npm install socket.io

4. npm start

now open new the terminal and follow the below commands

install composer from - https://getcomposer.org/download/

run composer create-project laravel/laravel laravel-app - in the terminal

copy paste the files given in my laravel-app to the newly created folder ans execute the below code

1. php artisan serv

start apache and mysql in xampp.

1. now the database part lunamar.sql file is already located in the laravel folder.

2. open php myadmin and create a database called lunamar and inside the database click on import.

3. Under file to import select the lunamar.sql file click go this should create all the necessary tables in the database.


Now we are good to go the project should work without any errors.


