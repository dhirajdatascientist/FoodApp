var cartItems = [];

function addToCart(itemName) {
    cartItems.push(itemName);
    alert(itemName + " added to cart!");
}

function viewCart() {
    var cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    cartItems.forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
    });

    document.getElementById("cartModal").style.display = "block";
}

function closeModal() {
    document.getElementById("cartModal").style.display = "none";
}

var ratings = {};

function rateItem(star, value) {
    var item = star.closest('.stars').getAttribute('data-item');
    if (!ratings[item]) {
        ratings[item] = { sum: 0, count: 0 };
    }
    
    ratings[item].sum += value;
    ratings[item].count++;
    
    var averageRating = ratings[item].sum / ratings[item].count;
    
    star.closest('.image-item').querySelector('.average-rating').textContent = averageRating.toFixed(1);
    
    var stars = star.parentElement.children;
    for (var i = 0; i < stars.length; i++) {
        if (i < value) {
            stars[i].innerHTML = "&#9733;";
        } else {
            stars[i].innerHTML = "&#9734;";
        }
    }
}
