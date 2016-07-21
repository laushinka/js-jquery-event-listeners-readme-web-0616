function getIt() {
  $("p").click(function(){
    alert("Hey!");
  });
};

function frameIt() {
  $("img").on("load", function(){
    $("img").addClass("tasty");
  })
}

function pressIt() {
  $("#typing").keydown(function(e){
    if (e.which === 71) {
      alert("");
    }
  })
}

function submitIt() {
  $("form").submit(function(){
    alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();
});
