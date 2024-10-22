// $(document).ready(function () {
//   $(".footer-links-wrapper h3").click(function () {
//     var $this = $(this);
//     var $ul = $this.next("ul");
//     // Toggle the display of the sub-links
//     $ul.slideToggle();
//     // Toggle the "+" to "x" and vice versa
//     $this.toggleClass("expanded");
//   });
//   // Ensure sub-links are hidden by default on mobile devices
//   if ($(window).width() <= 768) {
//     $(".footer-links-wrapper ul").hide();
//   }
//   // Optionally, ensure sub-links are hidden on resize to mobile size
//   $(window).resize(function () {
//     if ($(window).width() <= 768) {
//       $(".footer-links-wrapper ul").hide();
//     }
//   });
// });

$(document).ready(function () {
  // Handle click event using .on()
  $(document).on("click", ".footer-links-wrapper h3", function () {
    var $this = $(this);
    var $ul = $this.next("ul");
    // Toggle the display of the sub-links
    $ul.slideToggle();
    // Toggle the "+" to "x" and vice versa
    $this.toggleClass("expanded");
  });

  // Function to hide sub-links on mobile devices
  function handleResponsive() {
    if ($(window).width() <= 768) {
      $(".footer-links-wrapper ul").hide();
    } else {
      $(".footer-links-wrapper ul").show(); // Optionally show on larger screens
    }
  }

  // Initial check
  handleResponsive();

  // Bind resize event to handle changes in window size
  $(window).resize(function () {
    handleResponsive();
  });
});
