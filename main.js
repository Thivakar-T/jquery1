var editText;
var customerArray = [];
function validateForm() {
  var regex = new RegExp("^[a-zA-Z ]");
  var num = new RegExp("^[0-9]*$");
  var y = $("#number").val();
  var x = $("#name").val();
  var z = $("#location").val();
  var a = $("#Description").val();

  if ((x == null || x == "")) {
   $('#name_err').html("required");
  }

  else {
    if (regex.test(x)) {
      $('name_err').html("required");
    }
    else {
      $('name_err').html("enter name");
    }
  }

  if (y.length < 3) {
    $('#name_err1').html("required");
  }
  else {
    if (num.test(y)) {
      $('#name_err1').html("");
    }
    else {
      $('#name_err1').html("enter number");
    }
  }

  if (z == "") {
    $('#name_err2').html("required");
  }
  else {
    $('#name_err2').html("");
  }



  if (a == "") {
    $('#name_err3').html("required");
    return false;
  }
  else {
    $('#name_err3').html("");
  }


  if ($('#result').prop('checked')) {
    $('#name_err7').html("");
  }
  else if ($('#result').prop('checked')) {
    $('#name_err7').html("");
    return false;
  }
  // console.log(document.querySelector('input[name="result1"]:checked').value);

  var modal = $('#id01');
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  inserTable();

  $('input[type="text"],input[type="number"],input[type="date"],select,textarea').val("");



  console.log(editText);

  return true;
  //  document.getElementById("myForm").reset();
  //  document.getElementById("myForm").submit();
}

// var customId = 1;

function inserTable() {
  if (editText != undefined) {
    customerArray.splice(editText, 1);
  }
  var rate_value;
  var name = $("#name").val();
  var number = $("#number").val();
  var location = $("#location").val();
  var Description = $("#Description").val();
  var start = $("#start").val();

  if ($('#result').prop('checked')) {
    rate_value = $('#result').val();
  }
  else if ($('#result2').prop('checked')) {
    rate_value = $('#result2').val();
  }
  var customerObj = {
    name: name,
    number: number,
    location: location,
    Description: Description,
    start:start,
    result: rate_value,
    result2:result2
  };
  customerArray.push(customerObj);
  console.log(customerArray);
  addTable();

}
function addTable() {
  var v = "";
  editText = undefined;
  for (i = 0; i < customerArray.length; i++) {
    v += "<tr>";
    v += "<td>" + customerArray[i].name + "</td>";
    v += "<td>" +customerArray[i].number + "</td>";
    v += "<td>" + customerArray[i].location + "</td>";
    v += '<td><button class="btn btn-primary mr-3" style="" onclick="Edit(' + i + ')">Edit</button><button class="btn btn-danger"  onclick="Delete(' + i + ')">Delete</button></td>';
  }
  $("#displayArea").html(v);
}
function Delete(item) {
  customerArray.splice(item, 1);
  addTable();
};
function Edit(item) {
  editText = item;
  console.log(item);
  console.log(customerArray);
  console.log(customerArray[item]);
  $("#name").val(customerArray[item].name);
  $("#location").val(customerArray[item].location);
  $("#number").val(customerArray[item].number);
  $("#Description").val(customerArray[item].Description);
  $("#start").val(customerArray[item].start);

  //document.getElementById("result").value = customerArray[item].result;
  if(customerArray[item].result == "5"){
    $("#result").prop("checked", true);
  }else{
    $("#result2").prop("checked", true);
    $("#start").val("");
  }
};

$(document).ready(function(){
  $('#Submit').click(function(){
  $('#result').prop("checked", false);
  $('#result2').prop("checked", false);
  });
  });
