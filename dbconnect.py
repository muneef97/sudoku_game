import mysql.connector

mydb = mysql.connector.connect(user='muneef', password='password',
                                  host='127.0.0.1',
                                  database='users')
mycursor = mydb.cursor()
def read_user_data():
    result = ["<tr><th>user name</th><th>user time</th></tr>"]
    mycursor.execute("SELECT username, user_time FROM scorecard order by user_time")
    myresult = mycursor.fetchall()
    for x in myresult:
        result.append("<tr><td>" + x[0]+ "</td><td>"+str(x[1])+"</td></tr>")

    return "".join(result)

def add_user_data(userid,username,user_time):
    sql = "INSERT INTO scorecard VALUES (%s, %s, %s)"
    val = (userid, username, user_time)
    mycursor.execute(sql, val)
    mydb.commit()
    return read_user_data()

