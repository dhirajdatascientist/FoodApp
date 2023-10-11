# Problem Statement
* To create an HTML page in Flask with a "Food4u" heading, you'll need to set up a basic Flask application and create a template for the HTML page. Here's a step-by-step guide to help you achieve this:

1. Install Flask (if you haven't already):

   You can install Flask using pip by running the following command in your terminal:

   ```bash
   pip install Flask
   ```

2. Create a Flask application:

   Create a Python file, for example, `app.py`, and add the following code:

   ```python
   from flask import Flask, render_template

   app = Flask(__name__)

   @app.route('/')
   def home():
       return render_template('index.html')

   if __name__ == '__main__':
       app.run(debug=True)
   ```

3. Create a folder for your HTML templates:

   In the same directory as your `app.py` file, create a folder named `templates`. This is where your HTML templates will be stored.

4. Create the HTML template:

   Inside the `templates` folder, create a file named `index.html` and add the following code:

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Food4u</title>
   </head>
   <body>
       <h1>Food4u</h1>
   </body>
   </html>
   ```

5. Run your Flask application:

   Open a terminal and navigate to the directory where your `app.py` is located. Run the Flask application with the following command:

   ```bash
   python app.py
   ```

   Your Flask app will start, and you can access the "Food4u" page by opening a web browser and visiting http://127.0.0.1:5000/ or http://localhost:5000/.

You should see a webpage with "Food4u" as the heading when you access your Flask application.