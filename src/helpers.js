export function daysRemaining(date) {
    const msInDay = 3600 * 1000 * 24;
    let daysToGo = (date.getTime() - new Date().getTime()) / msInDay;
    let daysRemaining = Math.ceil(daysToGo);
    return daysRemaining;

}

export function displayRemaining(daysRemaining){
    let weeks = 0;
    if (daysRemaining > 365){
     return "Over 1 Year";
    }
    else if (daysRemaining < 0){
        return "Deadline has passed!";
    }
    while (daysRemaining > 6){
        weeks++;
        daysRemaining -= 7;
    }

    let weekDisplay = weeks === 1? "week": "weeks";
    let dayDisplay = daysRemaining === 1? "Day": "Days";
    return `${weeks} ${weekDisplay} and ${daysRemaining} ${dayDisplay} Remaining`;
}

export function validateForm(formData){
    for (var key in formData) {
        if (formData[key] === ""){
            let emptyInput =  key[0].toUpperCase() + key.slice(1);
            return emptyInput;
        }
    }
    return "";
}

export function getCats(projects){
    // Return an Array of unique Cats
    return projects.map(project => project.category).filter( (project, i, arr) => i === arr.indexOf(project));
};

export function formatDate(day, month, year){
    let date = new Date(month + " / " + day + " / " + year);
    return date.getTime();
}
