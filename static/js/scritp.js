
  document.getElementById('subscribeForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting by default

    // Collect form data
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validate the fields
    if (!firstName || !lastName || !email) {
      alert('Please fill in all the fields.');
      return;
    }

    // Add interactivity (e.g., send data to server or display a success message)
    alert(`Thank you, ${firstName}, for subscribing!`);
  });


