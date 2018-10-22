from flask import Flask, render_template

# creating an instance of Flask class
# name special variable that receives string "main" when executed
app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/hello")
def hello():
    return "Hello world!"

if __name__ == "__main__":
    app.run()