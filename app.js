const picNames = ['pics\\TapatNgPisayFSR_1.jpg', 'pics\\TapatNgPisayFSR_2.jpg', 'pics\\SoloPic_1.jpg', 'pics\\SoloPic_2.jpg', 'pics\\SoloPic_3.jpg', 'pics\\Goodwill_1.jpg', 
'pics\\SoloPic_4.jpg', 'pics\\Gonz_1.jpg', 'pics\\I forgot saan to.jpg', 'pics\\sabaySaBiyahe.jpg', 'pics\\recweekSolo.jpg', 'pics\\BusyPoSiya.jpg', 
'pics\\AceHardwareLightingTest.jpg', 'pics\\MatchyKamiLmao.jpg', 'pics\\Songerist.jpg', 'pics\\AfterKaraoke.jpg', 'pics\\dinner_1.jpg', 'pics\\SoloPic_5.jpg', 
'pics\\NationalMuseum_1.jpg', 'pics\\NationalMuseum_solo.jpg', 'pics\\pots.jpg', 'pics\\AnnikaPondering_1.jpg', 'pics\\MuslimSection.jpg', 'pics\\IntoTheFishCatchers.jpg', 
'pics\\weMadeABird_idk.jpg', 'pics\\ElevatorPic_whyNot.jpg', 'pics\\proofWeWereHere.jpg', 'pics\\SoloPic_6.jpg', 'pics\\siopao.jpg', 'pics\\AnotherMuseum_1.jpg', 
'pics\\AnotherMuseum_2.jpg', 'pics\\coolCeiling_1.jpg', 'pics\\coolCeiling_2.jpg', 'pics\\AgainstTheLight_sana.jpg', 'pics\\SuitPaletteMatchesTheFloorAndFence_1.jpg', 
'pics\\SuitPaletteMatchesTheFloorAndFence_2.jpg', 'pics\\SoloPeroHindi.jpg', 'pics\\byTheTent.jpg', 'pics\\AnnikaTheExplorer.jpg', 'pics\\ShawarmaSaRiverBanks.jpg', 
'pics\\RiverBanks.jpg', 'pics\\CarnivalRide_1.jpg', 'pics\\CarnivalRide_2.jpg', 'pics\\MotionPic_1.jpg', 'pics\\MotionPic_2.jpg', 'pics\\NakulongKami_1.jpg', 
'pics\\NakulongKami_2.jpg', 'pics\\RedShirt.jpg', 'pics\\SoloPic_7.jpg', 'pics\\SoloPic_8.jpg', 'pics\\MovieNight.jpg', 'pics\\switchedToToteBag_1.jpg', 
'pics\\switchedToToteBag_2.jpg', 'pics\\MagkatabiSaHarap.jpg', 'pics\\GoodwillSelfie.jpg', 'pics\\GoodwillChill.jpg', 'pics\\AfterLumabasNgFair.jpg', 'pics\\LyingOnGrass.jpg', 
'pics\\HinatakAkoSaSM.jpg', 'pics\\ThereWasAnAttemptMagCandid.jpg', 'pics\\SoloPic_9.jpg', 'pics\\MadCafe.jpg', 'pics\\SoloPic_10.jpg', 'pics\\UpperBunk_1.jpg', 
'pics\\UpperBunk_2.jpg', 'pics\\UpperBunk_3.jpg', 'pics\\UpperBunk_4.jpg', 'pics\\secretFeetPix.jpg', 'pics\\Jeep.jpg', 'pics\\candidhehehe.jpg', 'pics\\after.jpg', 
'pics\\leTransition.png', 'pics\\recweekDuo.jpg', 'pics\\NationalMuseum_1_copy.jpg']

$(document).ready(function(){
    //generate a random ID for each entry
    giveID();
    console.log("ready");
    $("#passHere").on('hide.bs.modal', function(){
        $("#modalDialog").empty()
    });
  });

function giveID(){
    console.log("eyyyyy")
    let rows = document.getElementsByName("color")
    console.log(rows)

    for (var i=0; i<rows.length; i++){
        columns = rows[i].children;

        for (var j=0; j<columns.length; j++){
            entries = columns[j].children;

            for(var k=0; k<entries.length; k++){
                entries[k].id = "pictureCaption_"+i.toString()+"_"+j.toString()+"_"+k.toString();
                entries[k].setAttribute("name", "entry");
                var chooseHere = ["entry_1","entry_2","entry_3","entry_4"]
                entries[k].setAttribute("class", chooseHere[getRandomInt(4)]);
            }
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function passToModal(idPassed) {
    let inp = document.getElementById(idPassed).innerHTML;
    document.getElementById("modalDialog").innerHTML += inp;

    //check for carousels
    let divContainer = document.getElementById("modalDialog").children;

    console.log(divContainer);

    if(divContainer[0].id==="goodwillMoments_container" || divContainer[0].id==="goodwillMoments_container_2"){
        console.log("is a carousel")
        //search deeper
        divCarousel = divContainer[0].children;

        //change ID
        divCarousel[0].id = "showcase"

        //even deeper
        divChild = divCarousel[0].children;

        //change buttons' id
        divChild[2].setAttribute("data-bs-target", "#showcase");
        divChild[3].setAttribute("data-bs-target", "#showcase");

        //more deep
        divGrandChild = divChild[0].children;

        //set attribute to each grandchild
        for(var i=0; i < divGrandChild.length; i++){
            divGrandChild[i].setAttribute("data-bs-target", "#showcase")
            divGrandChild[i].setAttribute("data-bs-slide-to", i.toString())
        }
        
    }
}

window.onscroll = function(){
    var scroll = window.scrollY;
    console.log(scroll);
    if (scroll < 1500) {
        // green
        document.body.style.backgroundColor = 'yellow';
    } else if (scroll >= 1500 && scroll < 5000) {
        // yellow
        document.body.style.backgroundColor = 'green';
    } else if (scroll >= 5000 && scroll < 7500) {
        // blue
        document.body.style.backgroundColor = 'blue';
    } else if (scroll >= 7500 && scroll < 10000) {
        // orange
        document.body.style.backgroundColor = 'pink';
    } else if (scroll >= 10000 && scroll < 14000) {
        // orange
        document.body.style.backgroundColor = 'violet';
    } else {
        // purple
        document.body.style.backgroundColor = 'black';
    }
}

const balloonContainer = document.getElementById("balloon-container");

function random(num) {
return Math.floor(Math.random() * num);
}

function getRandomStyles() {
var r = random(255);
var g = random(255);
var b = random(255);
var mt = random(200);
var ml = random(50);
var dur = random(5) + 5;
return `
background-color: rgba(${r},${g},${b},0.7);
color: rgba(${r},${g},${b},0.7); 
box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
margin: ${mt}px 0 0 ${ml}px;
animation: float ${dur}s ease-in infinite
`;
}

function createBalloons(num) {
for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
}
}

function removeBalloons() {
balloonContainer.style.opacity = 0;
setTimeout(() => {
    balloonContainer.remove()
}, 500)
}

window.addEventListener("load", () => {
createBalloons(30)
});

window.addEventListener("click", () => {
removeBalloons();
});