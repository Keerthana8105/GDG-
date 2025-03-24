function donateNow() {
    alert("Thank you for choosing to donate! We will guide you to the nearest donation center.");
}

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