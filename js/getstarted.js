var submit = document.getElementById("submit");
var budget = document.getElementById("budget");
var destination = document.getElementById("destination");
var activity = document.getElementById("activity");
var people = document.getElementById("people");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  destinationFinal();

  console.log(mountGroupmid);
});

let destinationBeach = {
  low: [" The beautiful kilifi", "The tamu watamu"," The Mtwapa creek"],
  mid: [" The amazing Diani !!", "Lamu tamu"],
  high: [" The majestic maldives", " and Hawai","the beautiful Brazil", "the delight of Dubai"],
};

let destinationMount = {
  low: "The cool and amazing Ngong Hills!!",
  mid: " The beautiful Fairmont MountKenya!!",
  high: " The coveted Swiss Alps!!",
};

let destinationWild = {
  low: ["Nairobi National park","lake Nakuru National park"],

  mid: ["The coveted Masai Mara", "the great Amboseli"],
  high: ["The amazing Serengeti national park", 'Kruger National park'],
};

function destinationCheck() {
  if (budget.value === "low" && destination.value === "beach") {
    return destinationBeach.low;
  } else if (budget.value === "mid" && destination.value === "beach") {
    return destinationBeach.mid;
  } else if (budget.value === "high" && destination.value === "beach") {
    return destinationBeach.high;
  } else if (budget.value === "low" && destination.value === "mountain") {
    return destinationMount.low;
  } else if (budget.value === "mid" && destination.value === "mountain") {
    return destinationMount.mid;
  } else if (budget.value === "high" && destination.value === "mountain") {
    return destinationMount.high;
  } else if (budget.value === "low" && destination.value === "wildlife") {
    return destinationWild.low;
  } else if (budget.value === "mid" && destination.value === "wildlife") {
    return destinationWild.mid;
  } else if (budget.value === "high" && destination.value === "wildlife") {
    return destinationWild.high;
  }
}

function destinationFinal() {
  document.getElementById("destination-display").innerHTML =
    "Congratulations!!, You can choose a destination out of" +
    " " + 
    destinationCheck() 
    document.getElementById("activities-display").innerHTML =

    "</br>" +
    activityCheck();
}

var beachGroupHigh = [
  "Kayaking",
  "yatch ride",
  "cruise dinner",
  "scuba diving",
  "jetskiing",
  "swimming with dolphins",
  "flyboarding",
  "paddle boading",
  "scuba diving",
];
var beachGroupMid = [
  "beach volleyball",
  "fishing",
  "paddle boading",
  "yoga",
  "beach dinner",
  "bornfire",
  "snokeling",
  "beach walks",
  "jetskiing",
];
var beachGroupLow = [
  "meditation",
  "swimming",
  "waterp polo",
  "snokerling",
  "beach walks",
  "star gazing",
  " yoga",
  "meditation",
];

mountGroupHi = [
  "paragliding",
  "mountain climbing",
  "Bunjee jumping",
  "canyoning",
  "rappelling",
  "paragliding",
];
mountGroupmid = [
  "bike riding",
  "camping",
  "bonfire",
  "horse riding",
  "fishing",
  "ziplinig",
];
mountGrouplow = ["Nature trails", "tag of war", "bird watching", "ziplining"];

var wildSoloHigh = ["Hot air baloon", "dinner by the bush"];
var wildSoloMedium = ["Game drive", "cultural visit", "cultural dances"];
var wildSoloLow = ["orphanage", "nature walk", "bird watching"];

function activityCheck() {
  if (budget.value === "high" && destination.value === "beach") {
    return beachGroupHigh;
  } else if (budget.value === "mid" && destination.value === "beach") {
    return beachGroupMid;
  } else if (budget.value === "low" && destination.value === "beach") {
    return beachGroupLow;
  } else if (budget.value === "high" && destination.value === "mountain") {
    return mountGroupHi;
  } else if (budget.value === "mid" && destination.value === "mountain") {
    return mountGroupmid;
  } else if (budget.value === "low" && destination.value === "mountain") {
    return mountGrouplow;
  } else if (budget.value === "high" && destination.value === "wildlife") {
    return wildSoloHigh;
  } else if (budget.value === "mid" && destination.value === "wildlife") {
    return wildSoloMedium;
  } else if (budget.value === "low" && destination.value === "wildlife") {
    return wildSoloLow;
  }
}
