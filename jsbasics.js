let fname = "medha"


function calcSI(principal,time){

    //fname = "medha";
        
    let rateOfInterest = 6.5 ;
    let simpleInterest = (principal * time * rateOfInterest)/1200 ;
    let finalAmount = (principal + simpleInterest) ;
    console.log(principal);
    console.log(finalAmount);
    //console.log(this.fname);
   
    //document.getElementById("simpleInterest").innerHTML= "Simple Interest is " + finalAmount;
}

// window.onload = calcSI(1000,10);

var playerInfo = [

    {   name:  "Lionel Messi",
        stats: {sport: "Football", country: "Argentina", goals: 4 },
    },
    {   name:  "Kylian Mbappe",
        stats:{ sport: "Football", country: "France", goals: 5},
    },
    {   name:  "Goncalo Ramos",
        stats: {sport: "Football", country: "Portugal", goals: 3 },
    },
    {   name:  "Enner Valencia",
        stats : { sport: "Football",country: "Ecuador",  goals: 3 }
    },
    {   name:  "John Isner",
        stats : { sport: "Tennis",country: "USA",  points: 13977 }
    },
    {   name:  "Iga Swiatek",
        stats : { sport: "Tennis",country: "Poland",  points: 11085 }
    }


]


function displyPlayerStats(name){

    let obj  = playerInfo.find(o => o.name === name);
    console.log(obj.stats);
    //playerIndex = playerInfo.find(name);
   // console.log(playerIndex);
    //console.log(playerInfo.stats[playerIndex]);

}

function findplayerstat(playername){

    playerInfo.forEach(element => {
        if(element.name === playername){
            console.log(element.stats)
        }
    });
}

function addPlayerInfo(playerinfo){

    playerInfo.push(playerinfo);
   // console.log(playerInfo);
}

function findSportPlayers(sportname){

    playerInfo.forEach(element => {
        if(element.stats.sport === sportname){
            console.log(element.name)
        }
    });


}
displyPlayerStats("Lionel Messi");
var playerinfo = {name:"Richarlison", stats:{sports:"Football", country: "Brazil", goals:3}};
addPlayerInfo(playerinfo);
findplayerstat("Richarlison");

findSportPlayers("Tennis")





//Func1 : display details info about all players based on name

//Func2: add  new players and stats


