$(function() {
  if (!Modernizr.video) {
    $('video').toggle();
    $('.video-fallback').toggle();
  }
  skrollr.init({
    render: function(data) {
      var $videoHeader = $(".video-for-header");
      var videoElem = $videoHeader[0];

      var videoTop = $videoHeader.offset().top;
      var videoBottom = videoTop + $videoHeader.height();

      var viewTop = $(window).scrollTop();
      var viewBottom = viewTop + $(window).height();

      //play header video when at least some of the video player is shown
      var isViewable = (videoTop < viewBottom && videoBottom > viewTop);
      if(isViewable) {
        if(videoElem.paused) {
          videoElem.play();
          console.log("play");
        }
      }
      else if(!videoElem.paused) {
        videoElem.pause();
        console.log("pause");
      }
    }
  });
  $('body').scrollspy({ target: '#article-nav' })
  $(".fancybox").fancybox({
    width: 800,
    height: 430
  });
});
