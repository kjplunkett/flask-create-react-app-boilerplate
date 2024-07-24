import random

from flask import Flask 

app = Flask(__name__)


@app.route('/number')
def number():
    return {
        'number': random.randint(0, 9999999),
    }
