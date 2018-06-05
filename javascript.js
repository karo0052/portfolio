// når brugeren trykker på menubutton:
// skift/toggle klassen "hidden" på nav

$(window).on("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    $(".menubutton").on("click", trykPaaMenubutton);

    $(".hexagon1").on("click", trykPaaProjekt1);
    $(".hexagon2").on("click", trykPaaProjekt2);
    $(".hexagon3").on("click", trykPaaProjekt3);
    $(".hexagon4").on("click", trykPaaProjekt4);
    $(".hexagon5").on("click", trykPaaProjekt5);
    $(".hexagon6").on("click", trykPaaProjekt6);
}

function trykPaaMenubutton() {
    console.log("tryk på menubutton");
    $("nav").toggleClass("hidden");
    //skift knappen frem og tilbage mellem kryds
    $(".menubutton").toggleClass("kryds");
}

function trykPaaProjekt1() {
    console.log("projekt1");
    $("#tekstboks1").removeClass("none");
    $("#graa2").addClass("hexagon");
    $("#graa3").addClass("hexagon");
    $("#graa4").addClass("hexagon");
    $("#graa5").addClass("hexagon");
    $("#graa6").addClass("hexagon");

    $(".closebutton").on("click", basis1);
}

function trykPaaProjekt2() {
    console.log("projekt2");
    $("#tekstboks2").removeClass("none");
    $("#graa1").addClass("hexagon");
    $("#graa3").addClass("hexagon");
    $("#graa4").addClass("hexagon");
    $("#graa5").addClass("hexagon");
    $("#graa6").addClass("hexagon");

    $(".closebutton").on("click", basis2);
}

function trykPaaProjekt3() {
    console.log("projekt3");
    $("#tekstboks3").removeClass("none");
    $("#graa1").addClass("hexagon");
    $("#graa2").addClass("hexagon");
    $("#graa4").addClass("hexagon");
    $("#graa5").addClass("hexagon");
    $("#graa6").addClass("hexagon");

    $(".closebutton").on("click", basis3);
}

function trykPaaProjekt4() {
    console.log("projekt4");
    $("#tekstboks4").removeClass("none");
    $("#graa1").addClass("hexagon");
    $("#graa2").addClass("hexagon");
    $("#graa3").addClass("hexagon");
    $("#graa5").addClass("hexagon");
    $("#graa6").addClass("hexagon");

    $(".closebutton").on("click", basis4);
}

function trykPaaProjekt5() {
    console.log("projekt5");
    $("#tekstboks5").removeClass("none");
    $("#graa1").addClass("hexagon");
    $("#graa2").addClass("hexagon");
    $("#graa3").addClass("hexagon");
    $("#graa4").addClass("hexagon");
    $("#graa6").addClass("hexagon");

    $(".closebutton").on("click", basis5);
}

function trykPaaProjekt6() {
    console.log("projekt6");
    $("#tekstboks6").removeClass("none");
    $("#graa1").addClass("hexagon");
    $("#graa2").addClass("hexagon");
    $("#graa3").addClass("hexagon");
    $("#graa4").addClass("hexagon");
    $("#graa5").addClass("hexagon");

    $(".closebutton").on("click", basis6);
}

function basis1() {
    console.log("basis1");
    $("#tekstboks1").addClass("none");
    $("#graa2").removeClass("hexagon");
    $("#graa3").removeClass("hexagon");
    $("#graa4").removeClass("hexagon");
    $("#graa5").removeClass("hexagon");
    $("#graa6").removeClass("hexagon");
}

function basis2() {
    console.log("basis2");
    $("#tekstboks2").addClass("none");
    $("#graa1").removeClass("hexagon");
    $("#graa3").removeClass("hexagon");
    $("#graa4").removeClass("hexagon");
    $("#graa5").removeClass("hexagon");
    $("#graa6").removeClass("hexagon");
}

function basis3() {
    console.log("basis3");
    $("#tekstboks3").addClass("none");
    $("#graa1").removeClass("hexagon");
    $("#graa2").removeClass("hexagon");
    $("#graa4").removeClass("hexagon");
    $("#graa5").removeClass("hexagon");
    $("#graa6").removeClass("hexagon");
}

function basis4() {
    console.log("basis4");
    $("#tekstboks4").addClass("none");
    $("#graa1").removeClass("hexagon");
    $("#graa2").removeClass("hexagon");
    $("#graa3").removeClass("hexagon");
    $("#graa5").removeClass("hexagon");
    $("#graa6").removeClass("hexagon");
}

function basis5() {
    console.log("basis5");
    $("#tekstboks5").addClass("none");
    $("#graa1").removeClass("hexagon");
    $("#graa2").removeClass("hexagon");
    $("#graa3").removeClass("hexagon");
    $("#graa4").removeClass("hexagon");
    $("#graa6").removeClass("hexagon");
}

function basis6() {
    console.log("basis6");
    $("#tekstboks6").addClass("none");
    $("#graa1").removeClass("hexagon");
    $("#graa2").removeClass("hexagon");
    $("#graa3").removeClass("hexagon");
    $("#graa4").removeClass("hexagon");
    $("#graa5").removeClass("hexagon");
}
