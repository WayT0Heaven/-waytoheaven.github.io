document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var course = document.getElementById('course').value;
  
    // Validate form inputs
    if (!name || !email || !course) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Simulate registration process
    alert('Thank you for registering for the ' + course + ' course, ' + name + '! We will contact you at ' + email + ' with further details.');
    document.getElementById('registration-form').reset(); // Reset form inputs
  });
  