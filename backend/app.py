from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_folder='../frontend', template_folder='templates')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<path:path>')
def send_static(path):
    return send_from_directory('../frontend', path)

if __name__ == '__main__':
    app.run(debug=True)
