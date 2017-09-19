const mongoose = require("mongoose");
const Race  = require("../model/race");
const User = require("../model/user");

mongoose.connect("mongodb://localhost/meteor-races");


const initialRacesData = [
  {
    name: "Miami Nights",
    level: 1,
    price: 10,
    given_points: 100,
    quantity_people: 10,
    location: { type: "Point", coordinates: [2.189792, 41.390627] },
  }
  // {
  //   name: "Mardi Gras",
  //   level: 2,
  //   location: { type: { type: "Point" }, coordinates: [2.162541, 41.387037] },
  //   quantity_people: 100,
  //   price: 15,
  //   points: 500,
  //   pilots: [{ 
  //     name: "Jordi20H",
  //     drone_name: "Grasshopper",
  //     level: 3,
  //     points: 1230,
  //     drone_description: "An distinguished drone designer and self-taught engineer, A_Nub’s mastery of complex race lines has earned him more podium finishes than any other DRL pilot.",
  //     },
  //     { 
  //       name: "AWKBOTS",
  //       drone_name: "Awkward King",
  //       level: 1,
  //       points: 400,
  //       drone_description: "Exploding onto the DRL circuit with a dramatic sweep of Level 2 - 2016, this former competitive motorcross racer knows how to handle speed.",
  //       },
  //     { 
  //       name: "ADD1CT3DD",
  //       drone_name: "Flynoceros Cerberus",
  //       level: 2,
  //       points: 500,
  //       drone_description: "T-Motor F40 Pro 2400kv / TBS 24A / Runcam Swift 2 / TBS Unify / TBS Triumph / Raceflight Revolt / BF 3.1.7 / HQProp 5x4.3x3 / Pulse 4S 1550 95C / GoPro Hero 5 Session",
  //     },
  //     { 
  //       name: "BEASTMODE",
  //       drone_name: "Detroitmultirotor Beastmode",
  //       level: 3,
  //       points: 1130,
  //       drone_description: "A tremendously awarded pilot across the USA, BeastMode is an aggressive and high speed pilot. Hard corners, full throttle straights, his name accurate to his flying style.",
  //     }]
  // },
  // {
  //   name: "Barcelona Underground",
  //   level: 1,
  //   location: { type: { type: "Point" }, coordinates: [2.165517, 41.368959] },
  //   quantity_people: 50,
  //   price: 20,
  //   points: 700,
  //   pilots: [{ 
  //     name: "Jordi20H",
  //     drone_name: "Grasshopper",
  //     level: 3,
  //     points: 1230,
  //     drone_description: "An distinguished drone designer and self-taught engineer, A_Nub’s mastery of complex race lines has earned him more podium finishes than any other DRL pilot.",
  //     },
  //     { 
  //       name: "AWKBOTS",
  //       drone_name: "Awkward King",
  //       level: 1,
  //       points: 400,
  //       drone_description: "Exploding onto the DRL circuit with a dramatic sweep of Level 2 - 2016, this former competitive motorcross racer knows how to handle speed.",
  //       },
  //     { 
  //       name: "ADD1CT3DD",
  //       drone_name: "Flynoceros Cerberus",
  //       level: 2,
  //       points: 500,
  //       drone_description: "T-Motor F40 Pro 2400kv / TBS 24A / Runcam Swift 2 / TBS Unify / TBS Triumph / Raceflight Revolt / BF 3.1.7 / HQProp 5x4.3x3 / Pulse 4S 1550 95C / GoPro Hero 5 Session",
  //     },
  //     { 
  //       name: "BEASTMODE",
  //       drone_name: "Detroitmultirotor Beastmode",
  //       level: 3,
  //       points: 1130,
  //       drone_description: "A tremendously awarded pilot across the USA, BeastMode is an aggressive and high speed pilot. Hard corners, full throttle straights, his name accurate to his flying style.",
  //     }]
  // },
  // {
  //   name: "Riviera",
  //   level: 3,
  //   location: { type: { type: "Point" }, coordinates: [2.171749, 41.397647] },
  //   quantity_people: 10,
  //   price: 10,
  //   points: 100,
  //   pilots: [{ 
  //     name: "Jordi20H",
  //     drone_name: "Grasshopper",
  //     level: 3,
  //     points: 1230,
  //     drone_description: "An distinguished drone designer and self-taught engineer, A_Nub’s mastery of complex race lines has earned him more podium finishes than any other DRL pilot.",
  //     },
  //     { 
  //       name: "BEASTMODE",
  //       drone_name: "Detroitmultirotor Beastmode",
  //       level: 3,
  //       points: 1130,
  //       drone_description: "A tremendously awarded pilot across the USA, BeastMode is an aggressive and high speed pilot. Hard corners, full throttle straights, his name accurate to his flying style.",
  //     }]
  // }
];


var raceIds = [];


Race.create(initialRacesData, (err, docs) => {
  if(err){
      throw err;
  }
  docs.forEach((element) => {
      raceIds.push(element.id);
  })
  mongoose.connection.close();

  console.log('races:', raceIds);
})
