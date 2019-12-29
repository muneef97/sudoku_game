# SuDoKu Online Game

This is a sudoku game which can played in the given web site "example.com".
It riquires username. There will be two buttons in the bottom of the table, start button and 
finish button. The table will be initially blank and when start button is pressed the question will be
inserted.When the start button is pressed the game starts. 
When it is finished you have to click finish. If you solve it properly, 
your name with the time you finished will be shown. 
Other wise an alert will be shown. At the bottom a table will be shown 
which shows the current list of players who have finished the sudoku game. 

## Development
This game was developed using python, html, css, javascript, JSON and mysql. 



### Front-end
The languages used as front-end are:
 
 - HTML5
 - CSS
 - Javascript
 - JSON
 
The 2 dimensional table is created using html and css.  

The question and answers are added using JSON and javascript.
The time is calculated using the funciton `getTime()`. This function will give the current time in seconds. So 
the time will be calculated by substracting the finish time and the start time.


### Back-end

The languages used as back-end are:

   - PYTHON - Web Server
   - MYSQL  - Database
    
The username and the time taken to finish are stored in a database. The `POST` method
is used for collecting data from user input and sending to server. The data will be stored
in the database table. The data from database will be sent to the web page using `GET` method. The 
data will be printed in the web page in the order of the time taken to 
finish the game.

#### Web Server
The web page is hosted using the python library `flask`

#### Database


## Hosting


### Installing MySQL

MySQL can be installed using the command :

1 . Update the apt-get package manager

`sudo apt-get update`

2 . Install MySQL.

`sudo apt-get -y install mysql-server`
### Installing Python and its dependencies
Python can be installed using the command :

`sudo apt-get install python3 `

For installing python packages, first install pip using the command :

 `sudo apt install python3-pip`


The packages used in this application are :

 - `python-flask`  which can be installed using :
 
    `pip install Flask`
 
 - `mysql.connector` is used for connecting database with the web page. 
 
   `pip install mysql-connector`

 

### Running application
To run the application follow the below steps: 

1. Place the files in a folder 
2. Insall mysql in the system
3. Create a database  : 
  
    `CREATE DATABASE database_name;`   
4. Create user and password : 

    `CREATE USER 'user_name'@'localhost' IDENTIFIED BY 'password';`
5. Grant all privileges :

    `GRANT ALL PRIVILEGES ON database.* TO 'user_name'@'localhost';`
        
6. Create a table in the database :

    `CREATE TABLE table_name (user_id INT, user_name VARCHAR[50], user_time FLOAT);`
    
7. Change the user, password, database values in the dbconnect.py file

    `mydb = mysql.connector.connect(user='user_name', password='password',
                                        host='127.0.0.1',
                                       database='database')`
8. Run main.py file 

    `python main.py`
    
#### Accessing 

If the application is working in a local host, then it can be access using the local ip address`127.0.0.1:5000`

If the application is working in a cloud server, then it can be access using the external 
ip address of the server with a port number 80. Because the permission for accessing port 
5000 will be denied. So we change the port number in the main.py.

    `if __name__ == "__main__":
     app.run(host="0.0.0.0" port=80)`
