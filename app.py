#Dependencies 
from flask import Flask, request, render_template, redirect

#Imports
import numpy as np
import pandas as pd
import sqlalchemy
import datetime as dt
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///Resources/hawaii.sqlite", echo = False)

#Reflect an existing database into a new model
Base = automap_base()
Base.prepare(engine, reflect = True)

#Save reference to the table
Station = Base.classes.station
Measurement = Base.classes.measurement

session = Session(engine)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def intro():
    """List all available app routes."""
    return(
        f"NYC PPP Loans<br/>"
        f"Available Routes:<br/>"
        f"/api/v1.0/About<br/>"
        f"/api/v1.0/Industry"
    )

#Routes
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/industry")
def industry():
    return render_template("industry.html")

if __name__ == "__main__":
    app.run(debug=True)