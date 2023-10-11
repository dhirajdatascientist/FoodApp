## To add a login and signup link to your navbar and then create routes for them in Flask, follow the steps below:

### Step 1: Update the HTML 

Add the login and signup links to the navbar in your HTML:

```html
<!-- Navbar section start -->
<nav class="navbar">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    <a href="/login">Login</a>
    <a href="/signup">Signup</a>
    <button onclick="viewCart()">View Cart</button>
</nav>
<!-- Navbar section ends -->
```

### Step 2: Flask Code

Assuming you have Flask set up, you'd need to add the routes for login and signup:

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return 'About Page'

@app.route('/contact')
def contact():
    return 'Contact Page'

@app.route('/login')
def login():
    return 'Login Page'

@app.route('/signup')
def signup():
    return 'Signup Page'

if __name__ == "__main__":
    app.run(debug=True)
```

### Step 3: Login and Signup Templates

For this example, we are just returning simple strings for the login and signup pages. In a real-world scenario, you'd have separate HTML templates for each, and you'd use `render_template('login.html')` and `render_template('signup.html')` to display them.

### Note:
Ensure that your Flask app structure has the required templates in a "templates" directory and the static files (like CSS, JS, and images) in a "static" directory. 


# Changes to css

1. Remove any redundant or duplicate styles.
2. Consolidate and simplify styles.
3. Ensure a cohesive look and feel.

CSS

```css
/* Global styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

h1 {
    color: #FF5733;
    font-size: 36px;
    text-align: center;
    margin-top: 60px; /* Adjusting space due to fixed navbar */
}

/* Navbar */
.navbar {
    background-color: #f8f8f8;
    overflow: hidden;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}

.navbar a,
.navbar button {
    float: left;
    padding: 14px 16px;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s;
}

.navbar a {
    color: rgb(12, 6, 6);
}

.navbar button {
    background-color: #FF5733;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
}

.navbar a:hover,
.navbar button:hover {
    background-color: #ddd;
    color: black;
}

/* Food Section */
.image-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 40px; /* Additional margin to compensate for the navbar */
}

.image-item {
    text-align: center;
}

.image-item img {
    max-width: 100%;
}

.image-item h2 {
    font-size: 18px;
    margin: 10px 0;
}

.image-item p {
    font-size: 14px;
}

.image-item button {
    padding: 8px 15px;
    background-color: #FF5733;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;
}

.image-item button:hover {
    background-color: #e94e1b;
}

/* Rating system */
.stars {
    margin: 10px 0;
}

.star {
    cursor: pointer;
    font-size: 24px;
    margin-right: 5px;
}

.star:hover,
.star.active {
    color: #FF5733;
}

/* Cart Modal */
#cartModal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    max-width: 80%;
    z-index: 2000;
}

#cartModal h2 {
    margin-top: 0;
}

#cartModal ul {
    list-style: none;
    padding: 0;
}

#cartModal button {
    padding: 10px 20px;
    background-color: #FF5733;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;
}

#cartModal button:hover {
    background-color: #e94e1b;
}

/* Footer Section */
footer {
    color: black;
    text-align: center;
    padding: 10px 0;
    margin-top: 40px; /* Additional space to separate from content */
}
```
