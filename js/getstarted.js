// var submit = document.getElementById("submit")
// var budget = document.getElementById("budget")
// var destination = document.getElementById("destination")

// submit.addEventListener("click", function (e) {
// e.preventDefault()
// destinationFinal()
// })

// let destinationBeach = {
// low: " the beautiful kilifi",
// midlow: " Malindi the hidden gem !!",
// midhi: " the amazing Diani !!",
// high: " the majestic maldives !!"
// }

// let destinationMount = {
// low: "the cool and amazing Ngong Hills!!",
// midlow: " the great Mt Longonot !!",
// midhi: " the beautiful Fairmont MountKenya!!",
// high: " the coveted Swiss Alps!!"
// }

// let destinationWild = {

// low: "Nairobi National park",
// midlow: " the mighty amboseli",
// midhi: " the coveted Masai Mara",
// high: "the amazing Serengeti national park"
// }


// function destinationCheck() {
// if (budget.value === "low" && destination.value === "beach") {
// return destinationBeach.low

// } else if (budget.value === "midlow" && destination.value === "beach") {
// return destinationBeach.midlow
// } else if (budget.value === "midhi" && destination.value === "beach") {
// return destinationBeach.midhi
// } else if (budget.value === "high" && destination.value === "beach") {
// return destinationBeach.high
// } else if (budget.value === "low" && destination.value === "mountain") {
// return destinationMount.low
// } else if (budget.value === "midlow" && destination.value === "mountain") {
// return destinationMount.midlow
// } else if (budget.value === "midhi" && destination.value === "mountain") {
// return destinationMount.midhi
// } else if (budget.value === "high" && destination.value === "mountain") {
// return destinationMount.high
// }else if (budget.value === "low" && destination.value === "wildlife") {
// return destinationWild.low
// } else if (budget.value === "midlow" && destination.value === "wildlife") {
// return destinationWild.midlow
// } else if (budget.value === "midhi" && destination.value === "wildlife") {
// return destinationWild.midhi
// } else if (budget.value === "high" && destination.value === "wildlife") {
// return destinationWild.high
// }

// }

// function destinationFinal() {

// document.getElementById("destination-display").innerHTML = "congtatulations!!, your destination is" +' '+ (destinationCheck())

// }

var submit = document.getElementById("submit")
var budget = document.getElementById("budget")
var destination = document.getElementById("destination")
var active = document.getElementsByClassName('travel-select')

submit.addEventListener("click", function (e) {
     e.preventDefault()
     checkDestination()
    });

let price = {
    local : ["Mount-Kenya", "Mount-Longonot", "Mombasa", "Lamu", "Turkana", "Watamu", "Kisumu"],
    international : ["Dubai", "Hawaii", "Sweden"]
};

let activitiesUnderTaken = {
    active : ['Kayaking','yatch ride','cruise dinner','scuba diving','jetskiing','swimming with dolphins',
    'meditation','swimming','waterp polo','snokerling','beach walks','star gazing'],
    inActive:['Nature trails','tag of war','bird watching', 'bike riding', 'camping','bonfire','horse riding','fishing', 'ziplinig']

    
}
let budgetOfPerson = {
    low : "10,000",
    medium : "30,000",
    high : "100,000"
}

function checkDestination (){
    if (budget.value == low && active.value == active){
        alert(activitiesUnderTaken.active +'' + price.local);
    }
}

