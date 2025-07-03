document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  fetch("YOUR_WEB_APP_URL", {
    method: "POST",
    body: JSON.stringify({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => alert("Order submitted successfully!"))
  .catch(err => alert("Something went wrong!"));
});
