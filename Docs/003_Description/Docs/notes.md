# Problem Statement

To add a simple description about the company below the "Food4u" heading in your Flask application, you can modify the `index.html` template. Here's how you can add a brief description:

1. Open your `index.html` file from the `templates` folder.

2. Below the `<h1>Food4u</h1>` heading, add a `<p>` element to include the company description. For example:

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Food4u</title>
       <link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='styles.css') }}">
   </head>
   <body>
       <h1>Food4u</h1>
       <p>Welcome to Food4u! We deliver delicious meals to your doorstep.</p>
   </body>
   </html>
   ```

3. Save the `index.html` file.

4. Restart your Flask application (if it's not already running):

   Run your Flask application with the following command in the terminal:

   ```bash
   python app.py
   ```
