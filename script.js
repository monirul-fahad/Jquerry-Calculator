var resultField = $('#result');

function insertNumber (number) {
   var existingNumbers = resultField.val();
   resultField.val(existingNumbers + number)
}

function clearResults() {
    resultField.val('')
}

function calculation() {
  var result =  eval(resultField.val())
  resultField.val(result)
}

function deleteNumber() {
   var presentValue = resultField.val();
if (presentValue !='' ) {
    resultField.val(presentValue.slice(0, -1))
}
}