function search() {
  var searchInput = document.getElementById("searchInput").value;

  // Make an AJAX request to retrieve JSON data
  $.ajax({
    url: "employees.json",
    type: "GET",
    dataType: "json",
    success: function(data) {
      var employee = data.find(function(item) {
        return item.id === searchInput;
      });

      if (employee) {
        // Display employee data
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
          <h2>Employee Details</h2>
          <p><strong>ID:</strong> ${employee.id}</p>
          <p><strong>Name:</strong> ${employee.name}</p>
          <p><strong>Age:</strong> ${employee.age}</p>
          <p><strong>Department:</strong> ${employee.department}</p>
        `;

        resultDiv.classList.add("show"); // Show the result container
      } else {
        // Display error message if employee not found
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "<p>Employee not found.</p>";
        resultDiv.classList.remove("show"); // Hide the result container
      }
    },
    error: function() {
      // Display error message if JSON data retrieval fails
      var resultDiv = document.getElementById("result");
      resultDiv.innerHTML = "<p>Error retrieving employee data.</p>";
      resultDiv.classList.remove("show"); // Hide the result container
    }
  });
}
