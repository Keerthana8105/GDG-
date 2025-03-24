document.addEventListener("DOMContentLoaded", function () {
    let userProfile = localStorage.getItem("userProfile");
  
    if (userProfile) {
      let userData = JSON.parse(userProfile);
  
      document.getElementById("profile-name").innerText = userData.name;
      document.getElementById("profile-blood").innerText = userData.bloodGroup;
      document.getElementById("profile-location").innerText = userData.location;
      document.getElementById("profile-email").innerText = userData.email;
      document.getElementById("profile-phone").innerText = userData.phone;
      document.getElementById("profile-last-donation").innerText = userData.lastDonation;
      document.getElementById("profile-total-donations").innerText = userData.totalDonations;
    }
  });
  