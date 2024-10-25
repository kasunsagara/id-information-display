const data = {
    "200126800100": {
        name: "Kasun Sagara Wanighasinha",
        "date of birth": "2001/09/24",
        age: 23,
        address: "Ridivita, Hiramadagama, Kahawaththa",
        email: "kasunsagara689@gmail.com",
        "phone number": "0771670585",
        university: "Eastern University of Sri Lanka",
        degree: "Computer Science"
    }
};

function lookupDetails() {
    const id = document.getElementById('idInput').value;
    const detailsDiv = document.getElementById('details');

    if (data[id]) {
        const user = data[id];
        detailsDiv.innerHTML = `
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Date of Birth:</strong> ${user["date of birth"]}</p>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>Address:</strong> ${user.address}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone Number:</strong> ${user["phone number"]}</p>
            <p><strong>University:</strong> ${user.university}</p>
            <p><strong>Degree:</strong> ${user.degree}</p>
        `;
    } else {
        detailsDiv.innerHTML = `<p>ID not found.</p>`;
    }
}


 