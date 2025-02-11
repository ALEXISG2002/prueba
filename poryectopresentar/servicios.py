from flask import render_template
from flask import Flask
import mysql

app = Flask(__name__)
conexion = mysql.connector.connect(user='root', password='', host='localhos', database='hangarbd')
# cursor=conexion.cursor()



@app.route("/consultarCarros")
def index():
    return render_template("carros.html")

@app.route("/personas")
def personas():
    return render_template('/index.html')

@app.route("/libros")
def libros():
    return render_template('/libros.html')

@app.route("/prestamos")
def prestamos():
    return render_template('/prestamos.html')



    
if __name__ == '_main_':
    app.run(host='0.0.0.0', debug=True, port="5080")