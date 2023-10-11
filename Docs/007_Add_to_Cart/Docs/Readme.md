To add an "Add to Cart" functionality for each image, you can introduce a button below each image. This button can be styled and then linked to a Flask route that will handle adding the item to the cart. Below is a modified version of your code to include the "Add to Cart" buttons:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Food4u</title>
    <link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='styles.css') }}">
</head>
<body>
    <!-- Navbar section start -->
    <nav class="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>
    <!-- Navbar section ends -->
    
    <h1>Food4u</h1>
    <p>Welcome to Food4u! We deliver delicious meals to your doorstep.</p>
    
    <!-- Food Section Start-->
    <div class="image-grid">
        <div class="image-item">
            <img src="{{ url_for('static', filename='image1.jpg') }}" alt="Image 1">
            <h2>Heading 1</h2>
            <p>Description of image 1.</p>
            <button onclick="addToCart('Image 1')">Add to Cart</button>
        </div>
        <div class="image-item">
            <img src="{{ url_for('static', filename='image2.jpg') }}" alt="Image 2">
            <h2>Heading 2</h2>
            <p>Description of image 2.</p>
            <button onclick="addToCart('Image 2')">Add to Cart</button>
        </div>
        <div class="image-item">
            <img src="{{ url_for('static', filename='image3.jpg') }}" alt="Image 3">
            <h2>Heading 3</h2>
            <p>Description of image 3.</p>
            <button onclick="addToCart('Image 3')">Add to Cart</button>
        </div>
        <!-- Food Section Ends-->
    </div>

    <!-- Footer Start-->
    <footer>
        <p>&copy; 2023 Food4u. All rights reserved.</p>
    </footer>
    <!-- Footer Ends-->

    <!-- JavaScript function to handle the Add to Cart action -->
    <script>
        function addToCart(itemName) {
            // Implement the logic to add the item to the cart.
            // For now, it will just alert the user.
            alert(itemName + " added to cart!");
        }
    </script>
</body>
</html>
```

To make the buttons functional:

1. Implement the `addToCart` JavaScript function to actually add items to the cart. In the above code, the function only alerts the user. Depending on your backend logic, this function might send an HTTP request to the server to add the item to the cart.

2. Optionally, style the "Add to Cart" button in your `styles.css` to make it look more appealing.

This approach uses a simple JavaScript alert for demonstration. In a real-world application, you'd typically communicate with a backend server to manage cart operations. If you're using Flask, this would involve setting up routes to handle these operations.