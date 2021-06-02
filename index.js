"use strict";

//data
let cityStates = [{
        state: "California",
        stateAbbr: "CA",
        cities: ["Los Angeles", "San Francisco", "San Diego"]
    },
    {
        state: "Colorado",
        stateAbbr: "CO",
        cities: ["Aspen", "Boulder", "Denver", "Pagosa Springs"]
    },
    {
        state: "Texas",
        stateAbbr: "TX",
        cities: ["Austin", "Dallas", "Houston", "San Antonio"]
    }
];

//onload function
window.onload = function () {
    //state onload
    loadStateDropdown();
    const stateDropdown = document.getElementById("stateDropdown");
    stateDropdown.onchange = onStateDropDownChanged;

    //city onload
    const cityDropDown = document.getElementById("cityDropDown");
    cityDropDown.onchange = onCityDropDownChanged;
}

function loadStateDropdown() {
    //fun the state dropdown
    const stateDropdown = document.getElementById("stateDropdown");
    //select option
    let selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Select one...";
    selectOneOption.value = "";
    stateDropdown.appendChild(selectOneOption);

    //loop through data array

    for (let i=0; i < cityStates.length; i++){
        let theOption = document.createElement("option");
        theOption.textContent = cityStates[i].state;
        theOption.value = cityStates[i].stateAbbr;
        stateDropdown.appendChild(theOption);

    }

    addSelectStateFirstOption();
}

function onStateDropDownChanged() {
    //find city and state dropdown
    const stateDropdown =  document.getElementById("stateDropdown");
    const cityDropDown = document.getElementById("cityDropDown");
    //erase previous message
    const messagePara = document.getElementById("messagePara");
    // // What does blank quotations do?
    messagePara.innerHTML = "";
    //remove previous cities
    cityDropDown.options.length = 0;
    //fin the state dropwon
    let selectedStateCode = stateDropdown.value;
    // did they pick?
    if (selectedStateCode == "") {
        //add a select language first
        addSelectStateFirstOption();

        let selectOneOption = document.getElementById("option");
        selectOneOption.textContent = "Select state first...";
        selectOneOption.value = "";
        cityDropDown.appendChild(selectOneOption);
        //if they dont pick we can't load
        return;
        
    }
    
    let matchingState = cityStates.find(arrayElement => arrayElement.stateAbbr == selectedStateCode);
    // add a select one <option>
    let selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Select one...";
    selectOneOption.value = "";
    cityDropDown.appendChild(selectOneOption);
    //loop through cities
    for (let i=0; i < matchingState.cities.length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = matchingState.cities[i];
        cityDropDown.appendChild(theOption);
    }
}

function onCityDropDownChanged() {
    //find the state and city
    const stateDropdown = document.getElementById("stateDropdown");
    const cityDropDown = document.getElementById("cityDropDown");

    //erase previous

    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";
    //get selected city

    let selectedCity = cityDropDown.value;
    //if "select one " is picked just exit
    if (selectedCity == "") {
        return;
    }
    // get selected 
    let selectedStateIndex = stateDropdown.selectedIndex;
    let selectedState = stateDropdown.options[selectedStateIndex].text;
    //build a message
    let message = "City: " + selectedCity + "<br>" + "State: " + selectedState;
    messagePara.innerHTML = message;
}

function addSelectStateFirstOption() {
    const cityDropDown = document.getElementById("cityDropDown");

    //add select state first

let selectOneOption = document.createElement("option"); //creates option element
selectOneOption.textContent = "Select state first...";
selectOneOption.value = "";
cityDropDown.appendChild(selectOneOption);
}

