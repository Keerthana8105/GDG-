// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Function to Register Donor
function registerDonor() {
    let name = document.getElementById("name").value;
    let bloodType = document.getElementById("bloodType").value.toUpperCase();
    let location = document.getElementById("location").value;
    let contact = document.getElementById("contact").value;

    if (name && bloodType && location && contact) {
        let newDonor = db.ref("donors").push();
        newDonor.set({
            name,
            bloodType,
            location,
            contact
        });
        alert("Registration Successful!");
    } else {
        alert("Please fill all fields.");
    }
}

// Function to Search Donors
function searchDonors() {
    let searchBloodType = document.getElementById("searchBloodType").value.toUpperCase();
    let donorList = document.getElementById("donorList");
    donorList.innerHTML = "<h3>Available Donors:</h3>";

    db.ref("donors").once("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            let donor = childSnapshot.val();
            if (donor.bloodType === searchBloodType) {
                donorList.innerHTML += `<p><strong>${donor.name}</strong> (${donor.bloodType}) - ${donor.location} - ${donor.contact}</p>`;
            }
        });
    });
}

// Function to Initialize Google Map
function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: { lat: 20.5937, lng: 78.9629 } // Centered in India
    });

    db.ref("donors").once("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            let donor = childSnapshot.val();
            let geocoder = new google.maps.Geocoder();
            geocoder.geocode({ address: donor.location }, (results, status) => {
                if (status === "OK") {
                    new google.maps.Marker({
                        position: results[0].geometry.location,
                        map: map,
                        title: donor.name
                    });
                }
            });
        });
    });
}
