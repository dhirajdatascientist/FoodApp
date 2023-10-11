# Problem Statement
To add a simple CSS stylesheet to your Flask application, follow these steps:

1. Create a CSS file:

   In the same directory as your `app.py` and `templates` folder, create a new folder named `static`. Inside the `static` folder, create a CSS file, e.g., `styles.css`, and add some simple CSS rules. For this example, I'll create a CSS rule to style the heading text.

   `styles.css`:

   ```css
   h1 {
       color: #FF5733;
       font-size: 36px;
       text-align: center;
   }
   ```

2. Link the CSS file in your HTML template:

   Open your `index.html` file from the `templates` folder and add a link to the CSS file within the `<head>` section of the HTML. Use the `url_for` function to generate the correct URL for the static file.

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Food4u</title>
       <link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='styles.css') }}">
   </head>
   <body>
       <h1>Food4u</h1>
   </body>
   </html>
   ```

3. Update your Flask application to serve the static files:

   Open your `app.py` file and add the following line to serve the static files. Place this line after the `app = Flask(__name__)` line.

   ```python
   app = Flask(__name__)
   app.static_folder = 'static'
   ```

   Your updated `app.py` file should look like this:

   ```python
   from flask import Flask, render_template

   app = Flask(__name__)
   app.static_folder = 'static'

   @app.route('/')
   def home():
       return render_template('index.html')

   if __name__ == '__main__':
       app.run(debug=True)
   ```

4. Run your Flask application:

   Start your Flask application by running the `app.py` file, just like you did in the previous step.

   ```bash
   python app.py
   ```

Now, when you access your Flask application in a web browser, you should see the "Food4u" heading with the CSS styles applied from the `styles.css` file. The text should be centered, have a color of `#FF5733`, and a font size of 36px.