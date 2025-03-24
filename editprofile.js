document.querySelector(".edit-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
  
    // Get updated values from form
    let userData = {
      name: document.getElementById("name").value,
      bloodGroup: document.getElementById("blood-group").value,
      location: document.getElementById("location").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      lastDonation: document.getElementById("last-donation").value,
      totalDonations: document.getElementById("total-donations").value
    };
  
    // Save data to localStorage
    localStorage.setItem("userProfile", JSON.stringify(userData));
  
    alert("Profile Updated Successfully!");
  
    // Redirect back to profile page
    window.location.href = "myprofile.html";
  });
  