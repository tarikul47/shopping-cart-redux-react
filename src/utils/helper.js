 export function showToast(element) {
  // Show the toast
  document.getElementById(element).classList.remove("hidden");
  // Hide the toast after 5 seconds (5000ms)
  // you can set a shorter/longer time by replacing "5000" with another number
  setTimeout(function () {
    document.getElementById(element).classList.add("hidden");
  }, 2000);
}
