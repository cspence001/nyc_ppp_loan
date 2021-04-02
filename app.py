

from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/industry")
def industry():
    return render_template("industry.html")

@app.route("/geo")
def geo():
    return render_template("geoindex.html")

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
    # from waitress import serve
    # serve(app, host="0.0.0.0", port=8080)