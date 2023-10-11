# 010_Requirement

1. Add a star rating system below each food item.
2. Allow users to click on the stars to rate the item.
3. Display the average rating for each item.

Here's the enhanced code:

```html
<!DOCTYPE html>
<html>

<head>
    <title>Food4u</title>
    <link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='styles.css') }}">
</head>

<body>
    <!-- Navbar section and other parts... -->

    <!-- Food Section Start-->
    <div class="image-grid">
        <!-- Example for the first item -->
        <div class="image-item">
            <img src="{{ url_for('static', filename='image1.jpg') }}" alt="Image 1">
            <h2>Heading 1</h2>
            <p>Description of image 1.</p>
            <button onclick="addToCart('Image 1')">Add to Cart</button>
            
            <!-- Star Rating System -->
            <div class="stars" data-item="Image 1">
                <span class="star" onclick="rateItem(this, 1)">&#9734;</span>
                <span class="star" onclick="rateItem(this, 2)">&#9734;</span>
                <span class="star" onclick="rateItem(this, 3)">&#9734;</span>
                <span class="star" onclick="rateItem(this, 4)">&#9734;</span>
                <span class="star" onclick="rateItem(this, 5)">&#9734;</span>
            </div>
            <p class="rating-text">Average Rating: <span class="average-rating">0</span></p>
        </div>
        <!-- Similarly for other items... -->
    </div>

    <!-- Cart Modal and other parts... -->

    <!-- JavaScript -->
    <script>
        // ... Previous functions ...

        var ratings = {}; // To store ratings for each item

        function rateItem(star, value) {
            var item = star.closest('.stars').getAttribute('data-item');
            if (!ratings[item]) {
                ratings[item] = { sum: 0, count: 0 };
            }
            
            ratings[item].sum += value;
            ratings[item].count++;
            
            var averageRating = ratings[item].sum / ratings[item].count;
            
            star.closest('.image-item').querySelector('.average-rating').textContent = averageRating.toFixed(1);
            
            // Highlight the stars up to the chosen rating
            var stars = star.parentElement.children;
            for (var i = 0; i < stars.length; i++) {
                if (i < value) {
                    stars[i].innerHTML = "&#9733;"; // filled star
                } else {
                    stars[i].innerHTML = "&#9734;"; // empty star
                }
            }
        }
    </script>

    <style>
        .star {
            cursor: pointer;
            font-size: 24px;
            margin-right: 5px;
        }
    </style>
</body>

</html>
```

Features introduced:
1. Added a star rating system below each food item.
2. Users can click on stars to give a rating from 1 to 5.
3. The average rating for each food item is displayed below the stars.

Note: The rating logic provided here is simple and client-side only. For a real-world application, you would want to store these ratings on a server and fetch them to display updated averages.