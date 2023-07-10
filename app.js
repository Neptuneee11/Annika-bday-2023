$(document).ready(function(){
    //generate a random ID for each entry
    giveID();
    giveLinks();
    console.log("ready");
    $("#passHere").on('hide.bs.modal', function(){
        $("#modalDialog").empty()
    });
  });

function giveID(){
    console.log("eyyyyy")
    var choosePalette = [["#FFF36e","#fff36e","#fff36e","#fff36e"], //yellow
                         ["#1C6758","#3D8361","#D6CDA4","#EEF2E6"], //green
                         ["#0B2447","#19376D","#576CBC","#A5D7E8"], //blue
                         ["#D14D72","#FFABAB","#FCC8D1","#FEF2F4"], //pink
                         ["#807c97","#807c97","#807c97","#807c97"] //grey
                        ]
    var fontColor = [["black","black","black","black"], //yellow
                     ["white","white","black","black"], //green
                     ["white","white","white","black"], //blue
                     ["white","black","black","black"], //pink
                     ["white","white","white","white"] //grey
                ]


    let rows = document.getElementsByName("color")

    for (var i=0; i<rows.length; i++){
        columns = rows[i].children;

        for (var j=0; j<columns.length; j++){
            entries = columns[j].children;

            for(var k=0; k<entries.length; k++){
                let newID = "pictureCaption_"+i.toString()+"_"+j.toString()+"_"+k.toString();
                entries[k].children[0].id = newID;
                entries[k].setAttribute("onclick", "passHere('"+ newID +"')");
                entries[k].children[0].setAttribute("class", "entry");

                var randy = Math.floor(Math.random() * 4);

                entries[k].children[0].style.backgroundColor = choosePalette[i][randy];
                entries[k].getElementsByClassName("entryParagraphHead")[0].style.color = fontColor[i][randy];
                entries[k].getElementsByClassName("entryParagraph")[0].style.color = fontColor[i][randy];
            }
        }
    }
}

function giveLinks(){
    let entries = document.getElementsByClassName("fillDiv");

    for (var i=0; i<entries.length; i++){
        let entryDiv = entries[i].children[0];

        entries[i].setAttribute("onclick", "passToModal('"+entryDiv.id+"')");
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function passToModal(idPassed) {
    let inp = document.getElementById(idPassed).innerHTML;
    document.getElementById("modalDialog").innerHTML += (inp + '<button type="button" class="btn btn-secondary col-4" data-bs-dismiss="modal">Close</button>');
    //make modal match
    let bgC = document.getElementById(idPassed).getAttribute("style");

    document.getElementById("modalDialog").setAttribute("style",bgC);
    //check for carousels
    let divContainer = document.getElementById("modalDialog").children;

    console.log(divContainer);

    if(divContainer[0].id==="goodwillMoments_container" || divContainer[0].id==="goodwillMoments_container_2"){
        console.log("is a carousel")
        //change id
        //divContainer[0].className = "d-block";
        divContainer[0].id = "carouselShowcase";

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

        //set the classes of the pictures
        carouselItems = divChild[1].children
        
        //change class of images
        for (var j=0; j<carouselItems.length; j++){
            carouselItems[j].children[0].setAttribute("class","img-fluid")
        }
        
    }
}

window.onscroll = function(){//changing background white scrolling
    var scroll = window.scrollY / document.body.scrollHeight; //make it a percentage

    console.log(scroll);

    if (scroll < 0.074) {

        document.body.style.backgroundColor = '#fffaa5ff';
        document.body.style.backgroundImage = 'url("designAssets/yellowPattern.png")';
    } else if (scroll >= 0.074 && scroll < 0.19) {

        document.body.style.backgroundColor = '#003928ff';
        document.body.style.backgroundImage = 'url("designAssets/greenPattern.png")';
    } else if (scroll >= 0.19 && scroll < 0.29) {

        document.body.style.backgroundColor = '#000139ff';
        document.body.style.backgroundImage = 'url("designAssets/bluePattern.png")';
    } else if (scroll >= 0.29 && scroll < 0.55) {

        document.body.style.backgroundColor = '#ff8bd2ff';
        document.body.style.backgroundImage = 'url("designAssets/pinkPattern.png")';
        document.getElementById("changing").children[0].src = "pics/leTransition.png";
    } else if (scroll >= 0.55 && scroll < 0.77) {

        document.body.style.backgroundColor = '#6600acff';
        document.body.style.backgroundImage = 'url("")';
        document.getElementById("changing").children[0].src = "pics/after.jpg";
    } else {

        document.body.style.backgroundColor = 'black';
        document.body.style.backgroundImage = 'url("")';
    }
}

/* copy pasted. Dunno how this works */

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