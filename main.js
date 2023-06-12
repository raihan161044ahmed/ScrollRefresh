document.addEventListener("DOMContentLoaded", function () {
  var cardContainer = document.getElementById("cardContainer");
  var scrollableContainer = cardContainer.querySelector(
    ".scrollable-container"
  );
  var imageCounter = 5;

  // Function to check if the user has reached the bottom of the page
  function isAtBottom() {
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    return scrollTop + windowHeight >= documentHeight;
  }

  // Function to add a new row with cards
  function addRowWithCards() {
    var newRow = document.createElement("div");
    newRow.className = "row card-row";

    // Loop to add cards to the new row
    for (var i = 1; i <= 2; i++) {
      var newCard = document.createElement("div");
      newCard.className = "col-md-6 card";
      newCard.innerHTML = `
          <img src="https://picsum.photos/900/7${imageCounter}" class="card-img-top" alt="Card Image 7  ${imageCounter}" height="400px">
          <div class="card-body">
            <h5 class="card-title">Card ${imageCounter}</h5>
            <p class="card-text">Some description for Card ${imageCounter}.</p>
          </div>
        `;

      // Apply animation class to the new card
      newCard.classList.add("animate-card");

      // Append the new card to the new row
      newRow.appendChild(newCard);

      // Increment the imageCounter
      imageCounter++;

      // Reset the counter if it exceeds the maximum number of images
      if (imageCounter > 100) {
        imageCounter = 1;
      }
    }

    // Append the new row to the scrollable container
    scrollableContainer.appendChild(newRow);
  }

  // Function to handle the scroll event
  function handleScroll() {
    if (isAtBottom()) {
      addRowWithCards();
    }
  }

  // Attach the scroll event listener
  window.addEventListener("scroll", handleScroll);
});
