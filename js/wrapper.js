hljs.initHighlightingOnLoad();

$(function () {
  $("img").not("img.media-svg").wrapAll('<figure class="size-2" />');
  $("iframe").wrapAll('<figure class="size-2" />');
  $("video").wrapAll('<figure class="size-2" />');
});
