from flask import Flask, render_template

app = Flask(__name__)
app.static_folder = 'static'

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return "About Food4u!"

@app.route('/contact')
def contact():
    return "Contact Food4u!"


if __name__ == '__main__':
    app.run(debug=True)
