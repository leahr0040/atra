let cal = $("#contain").html();
console.log("cal", cal);
$("#duplicate").click(function () {
  $("#contain").append(cal);
});

// $("#background-btn").click(function () {
//     console.log($("#background").val())
//     $("#contain").css("backgroundColor",$("#background").val())
//   });
changeColor=(element)=>{
    debugger
    $(element).parent('div').css('backgroundColor',$(element).val())
    
}

  
