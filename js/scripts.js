/* BACK END

var equilateral = function(sideOne, sideTwo, sideThree){
  return (sideOne === sideTwo && sideOne === sideThree);
}

var isosceles = function(sideOne, sideTwo, sideThree){
  return (sideOne === sideTwo || sideOne === sideThree || sideTwo === sideThree);
}

var scalene = function(sideOne, sideTwo, sideThree){
  return (sideOne != sideTwo || sideOne != sideThree || sideTwo != sideThree);
}

*/

/* START FRONT END */

$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();

    var sideOne = parseInt($("#side-1").val());
    var sideTwo = parseInt($("#side-2").val());
    var sideThree = parseInt($("#side-3").val());
    var oneTwo = sideOne + sideTwo
    var oneThree = sideOne + sideThree
    var twoThree = sideTwo + sideThree

    if (OneTwo <= sideThree || oneThree <= sideTwo || twoThree <= sideOne){
      
    }
    $("#equTri").show();
  });
});
