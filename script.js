// 기존 JavaScript 함수
function searchAndScroll() {
  var input = document.getElementById('searchInput');
  var filter = input.value.toUpperCase();
  var cards = document.getElementsByClassName("card");
  var found = false;
  document.getElementById('searchInput').addEventListener('keyup', function(event) {
    // Enter 키가 눌렸을 때의 키 코드는 13입니다.
    if (event.keyCode === 13) {
      searchAndScroll();
    }
  });



""
  for (var i = 0; i < cards.length; i++) {
    var nameElement = cards[i].getElementsByClassName("food name")[0];
    if (nameElement) {
      var name = nameElement.textContent || nameElement.innerText;
      if (name.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
        if (!found) {
          cards[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
          found = true;
        }
      } else {
        cards[i].style.display = "none";
      }
    }
  }

  if (!found) {
    alert("검색 결과가 없습니다.");
  }
}
// Add this code to your existing JavaScript file or create a new one

document.addEventListener("DOMContentLoaded", function () {
  // Existing logoElement code...
  var logoElement = document.querySelector(".logo-container img");
  if (logoElement) {
    logoElement.addEventListener("click", function () {
      window.location.reload();
    });
  }

  // Setting up the event listener for the Enter key on the search input
  var searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('keyup', function(event) {
    // Check if the Enter key was pressed
    if (event.keyCode === 13) {
      searchAndScroll();
    }
  });

  function searchAndScroll() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toUpperCase();
    var cards = document.getElementsByClassName("card");
    var found = false;

    for (var i = 0; i < cards.length; i++) {
      var nameElement = cards[i].getElementsByClassName("food name")[0];
      if (nameElement) {
        var name = nameElement.textContent || nameElement.innerText;
        if (name.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
          if (!found) {
            cards[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
            found = true;
          }
        } else {
          cards[i].style.display = "none";
        }
      }
    }

    if (!found) {
      alert("검색 결과가 없습니다.");
    }
  }
});
