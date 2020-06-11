let tickets = [["BRA", "UAE"], ["USA", "BRA"], ["JPN", "PHL"], ["UAE", "JPN"]];

// data restructuring
// build an array of objects source:index
let sourceIndexArr = tickets.reduce((current, item, index) => {
    current[item[0]] = index;
    return current;
},{});

// build an array of objects destination:source
let destSourceArr = tickets.reduce((current, item)=>{
    current[item[1]] = item[0];
    return current;
}, {});

let route = [];

// find start point
for (let key in sourceIndexArr){
    if (!destSourceArr[key]){
        route.push(tickets[sourceIndexArr[key]]);
        break;
    }
}

// build a chain
let index = sourceIndexArr[route[0][1]];
let ticket;
while(index || index === 0){
    ticket = tickets[index];
    route.push(ticket);
    index = sourceIndexArr[ticket[1]];
}

// add last destination
if (!index) {
    route.push([ticket[1], "-"]);
}

// build a string
let answer = route.map(item => item[0]).join(", ");
console.log(answer);
