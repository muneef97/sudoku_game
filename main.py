from flask import Flask,render_template, request
app = Flask(__name__)
import dbconnect

@app.route("/")
def sudoku():
    return render_template("sudoku.html")

@app.route("/get_user_data")
def get_user_data():
    return dbconnect.read_user_data()
@app.route("/update_result", methods = ['POST'])
def update_result():
    userId = request.form['userid']
    username = request.form['username']
    usertime = request.form['user_time']
    print(userId,username,usertime)
    return dbconnect.add_user_data(userId,username,usertime)

if __name__ == "__main__":
    app.run(host="0.0.0.0")