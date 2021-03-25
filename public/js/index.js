"use strict";

//fetch api
fetch("/api/v0/gallery")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("This is an error");
    }
    return response.json();
  })
  .then(function (data) {
    const pictures = data;
    //code from a3
    // select gallery, assign as const
    const gallery = document.querySelector(".gallery");

    //create output string for html
    let output = "";

    //loop through each image and string together the html with object keys
    pictures.forEach(function (image) {
      output += `<figure class="gallery-item">
  <img src="/images/${image.path}.jpg" alt="${image.title}" style="max-width: ${image.width}px; max-height: ${image.height}px;" />
  <figcaption>${image.description}</figcaption>
  </figure>`;

      gallery.innerHTML = output;
    });
  })
  .catch(function (error) {
    console.log(error);
  });
