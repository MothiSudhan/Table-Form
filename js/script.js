document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form');
    var table = document.getElementById('table-data').getElementsByTagName('tbody')[0];
  
    form.addEventListener('submit', function (e) {
      var checkboxes = document.querySelectorAll('input[name="food"]:checked');
      if (checkboxes.length < 2) {
        e.preventDefault(); 
        alert('Please select at least two food options.');
        return; 
      }
  
      e.preventDefault(); 
  
      var formData = new FormData(form);
      var newRow = table.insertRow();
      var cellIndex = 0;
  
      for (var pair of formData.entries()) {
        var cell = newRow.insertCell(cellIndex++);
        cell.textContent = pair[1];
      }
  
      form.reset(); 
    });
  });
  