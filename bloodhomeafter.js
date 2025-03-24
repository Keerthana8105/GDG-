// Function to simulate donation process
function donateNow() {
    alert("Thank you for choosing to donate! We will guide you to the nearest donation center.");
}

// Function to search for donors
function searchDonor() {
    let bloodType = document.getElementById("search").value.trim().toUpperCase();
    let donors = {
        "A+": "John Doe - 1234567890",
        "B+": "Jane Smith - 0987654321",
        "O+": "Alice Johnson - 5678901234",
        "AB+": "Bob Brown - 6789012345"
    };
    
    let resultDiv = document.getElementById("donor-results");
    if (donors[bloodType]) {
        resultDiv.innerHTML = <p>Matching Donor: ${donors[bloodType]}</p>;
    } else {
        resultDiv.innerHTML = <p>No donors found for blood type ${bloodType}.</p>;
    }
}

function toggleDropdown() {
    let dropdown = document.getElementById("profileDropdown");
    
    // Toggle class to show or hide dropdown
    dropdown.classList.toggle("show");
}

// Close dropdown when clicking outside
document.addEventListener("click", function(event) {
    let profile = document.querySelector(".profile");
    let dropdown = document.getElementById("profileDropdown");

    if (!profile.contains(event.target)) {
        dropdown.classList.remove("show");
    }
});
// Toggle profile menu
function menuToggle() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }
  
  // Open Edit Profile Form
  function openEditForm() {
    document.getElementById('edit-form').style.display = 'flex';
  }
  
  // Close Edit Profile Form
  function closeEditForm() {
    document.getElementById('edit-form').style.display = 'none';
  }
  
  // Save Changes and Update Profile
  function saveChanges() {
    let newName = document.getElementById('edit-name').value;
    let newEmail = document.getElementById('edit-email').value;
  
    if (newName) document.getElementById('user-name').innerHTML = newName;
    if (newEmail) document.getElementById('user-email').innerHTML = newEmail;
  
    closeEditForm();
  }
  
  // Simulate Logout
  function logout() {
    alert("Logging out...");
    window.location.href = "bloodhomebefore.html"; // Redirect to login page
  }
  