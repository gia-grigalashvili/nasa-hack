from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    user_input = request.form['user_input']
    result = "You entered: " + user_input
    return render_template('result.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)
