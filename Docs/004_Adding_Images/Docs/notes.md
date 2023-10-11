# Problem Statement

To add a grid of images with headings and paragraphs in a 3x3 layout on your Flask application, you can modify your `index.html` template as follows. First, make sure you have the images you want to display in the `static` folder:

1. Update your `index.html` file to include the image grid:

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

       <div class="image-grid">
           <div class="image-item">
               <img src="{{ url_for('static', filename='image1.jpg') }}" alt="Image 1">
               <h2>Heading 1</h2>
               <p>Description of image 1.</p>
           </div>
           <div class="image-item">
               <img src="{{ url_for('static', filename='image2.jpg') }}" alt="Image 2">
               <h2>Heading 2</h2>
               <p>Description of image 2.</p>
           </div>
           <div class="image-item">
               <img src="{{ url_for('static', filename='image3.jpg') }}" alt="Image 3">
               <h2>Heading 3</h2>
               <p>Description of image 3.</p>
           </div>
           <!-- Repeat the above three 'image-item' blocks for a total of nine items. -->
       </div>
   </body>
   </html>
   ```

2. Style the image grid using CSS:

   Update your `styles.css` file to style the image grid. You can use CSS to control the layout, spacing, and appearance of the images and text:

   ```css
   .image-grid {
       display: grid;
       grid-template-columns: repeat(3, 1fr);
       grid-gap: 20px;
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
   ```

3. Add images to your `static` folder:

   Place your images (e.g., `image1.jpg`, `image2.jpg`, `image3.jpg`, and so on) in the `static` folder.

4. Run your Flask application:

   Restart your Flask application if it's not already running:

   ```bash
   python app.py
   ```

Now, when you access your Flask application, you should see a 3x3 grid of images with headings and paragraphs. You can customize the content, images, and styles to suit your needs.