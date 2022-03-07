const main = () => {
    const dob =
    document.getElementById("dob").value;
    const gender = 
    document.getElementById("gender").value;

    const response =
    document.getElementById("response");

    const CC = parseInt(dob.split("-")
    [0].toString().slice(0,2));

    const YY = parseInt(dob.split("-")
    [0].slice(2,4));

    const MM = parseInt(dob.split("-")[1]);
    const DD = parseInt(dob.split("-")[2]);

    let day = (((CC/4)-2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD)%7
    const akans = [
        {
            day: "Sunday",
            male: "Kwasi",
            female: "Akosua"
        },
        {
            day: "Monday",
            male: "Kwadwo",
            female: "Adwoa"
        },
        {
            day: "Tuesday",
            male: "Kwabena",
            female: "Abenaa"
        },
        {
            day: "Wednesday",
            male: "Kwaku",
            female: "Akua"
        },
        {
            day: "Thursday",
            male: "Yaw",
            female: "Yaa"
        },
        {
            day: "Friday",
            male: "Kofi",
            female: "Afua"
        },
        {
            day: "Saturday",
            male: "Kwame",
            female: "Ama"
        }
    ];
    
    if (gender === "male") {
        response.innerText = "Your Akan name is :" + akans[day.toFixed()].male;
    } else {
        response.innerText = "Your Akan name is :" + akans[day.toFixed()].female;
    }
}

document.getElementById("submit").addEventListener("click", (Event) => {
    Event.preventDefault();
    main();
});
       




