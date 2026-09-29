const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const themeButton = document.getElementById("themeButton");
const quickSearchButtons = document.querySelectorAll("[data-search]");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchTerm = searchInput.value.trim();

  if (searchTerm === "") {
    searchInput.focus();
    return;
  }

  const searchURL =
    "https://duckduckgo.com/?q=" + encodeURIComponent(searchTerm);

  window.location.href = searchURL;
});

quickSearchButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const searchTerm = button.getAttribute("data-search");
    searchInput.value = searchTerm;
    searchForm.requestSubmit();
  });
});

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "☀";
  } else {
    themeButton.textContent = "☾";
  }
});
