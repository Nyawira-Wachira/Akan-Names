const main = () => {
    const dob =
    document.getElementById("dob").value;
    const gender = 
    document.getElementById("gender").value;

    const response =
    document.getElementById("response");
 if (validate(dob,gender)){
    let day = new Date(dob).getDay();
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
        response.innerText = "Your Akan name is :" + akans[day].male;
    } else {
        response.innerText = "Your Akan name is :" + akans[day].female;
    }
    } else {
    alert("invalid entry!")
    }
   
    
}

document.getElementById("submit").addEventListener("click", (Event) => {
    Event.preventDefault();
    main();
});
const validate = (dob,gender)=> {
    if(!dob || !gender){
    return false
    } else {
        return true
    }

}

       




