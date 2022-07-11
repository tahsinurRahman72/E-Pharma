<template>
    <div id="container">
        <div id="footer"></div>
    </div>
</template>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script>
$(document).ready(function() {
var docHeight = $(window).height();
var footerHeight = $('#container').outerHeight();
var footerTop = $('#container').position().top + footerHeight;

if (footerTop < docHeight) {
    $('#container').css('margin-top', 10 + (docHeight - footerTop) + 'px')
  }
})
</script>
<style scoped>
#container {
  min-height:100%;
  height: auto !important;
  height: 100%; /*for ie6*/
}
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;/*The footer' height*/
  background: #171c28;
  clear:both;
}
</style>
