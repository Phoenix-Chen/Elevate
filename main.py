from flask import Flask, request
import flask, os
from flask.ext.rq import RQ
from flask.ext.api import status
from xml.etree import ElementTree as ET
from get import *

app = Flask(__name__)

RQ(app)

@app.route("/api/getproviders/<zipcode>", methods=['POST'])
def getproviders(zipcode):
    try:
        json = get_providers(zipcode)
        return flask.jsonify({'result': json}), status.HTTP_200_OK
    except:
        # return flask.jsonify({'message':'No providers found!'}), status.HTTP_404_NOT_FOUND
        return flask.jsonify({'message': json}), status.HTTP_404_NOT_FOUND

@app.route("/api/getlocation", methods=['GET'])
def getlocation():
    pass

if __name__ == "__main__":
    app.run()