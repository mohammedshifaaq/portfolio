// Get search box and product items
  const searchInput = document.getElementById("search");
  const productList = document.querySelectorAll(".porducts-box");

  // Listen for typing in the search input
  searchInput.addEventListener("keyup", function (event) {
    const enteredValue = event.target.value.toUpperCase();

    productList.forEach(function (item) {
      const productName = item.querySelector("p").textContent.toUpperCase();

      // Show or hide based on match
      if (productName.indexOf(enteredValue) > -1) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  })

  

// document.getElementById("orderForm").addEventListener("submit", function(e) {
//   e.preventDefault();
//   fetch("YOUR_WEB_APP_URL", {
//     method: "POST",
//     body: JSON.stringify({
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       phone: document.getElementById("phone").value,
//       message: document.getElementById("message").value
//     }),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//   .then(res => alert("Order submitted successfully!"))
//   .catch(err => alert("Something went wrong!"));
// });
