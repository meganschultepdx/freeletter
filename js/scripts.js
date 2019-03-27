$(document).ready(function() {
  $("#formOne").submit(function(event){
    var nameInput = $("input#name").val();
    $(".name").text(nameInput);

    $("#letter").show();

    event.preventDefault();

  });

  $("#formTwo").submit(function(event){
    var moodInput = $("input#mood").val();
    $(".mood").text(moodInput.toUpperCase());

    $("#feelings").show();

    event.preventDefault();

  });
});
