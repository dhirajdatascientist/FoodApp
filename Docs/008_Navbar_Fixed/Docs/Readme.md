## Making Navbar Fixed

```css
/* Navbar */
.navbar {
    background-color: #f8f8f8;
    overflow: hidden;
    padding: 10px 20px;
    position: fixed;       /* Make the navbar fixed */
    top: 0;                /* Position it at the top */
    width: 100%;           /* Make it span the entire width */
    z-index: 1000;         /* Ensure it's on top of other content */
}

.navbar a {
    float: left;
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.navbar a:hover {
    background-color: #ddd;
    color: black;
    overflow: hidden;
}

.navbar a {
    float: left;
    display: block;
    color: rgb(12, 6, 6);
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.navbar a:hover {
    background-color: #ddd;
    color: black;
}

```