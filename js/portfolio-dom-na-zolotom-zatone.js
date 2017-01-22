$(function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];
  var items = [
    {
      src: '/images/portfolio/dom-na-zolotom-zatone/1.jpg'
    },
    {
      src: '/images/portfolio/dom-na-zolotom-zatone/2.jpg'
    },
    {
      src: '/images/portfolio/dom-na-zolotom-zatone/3.jpg'
    },
    {
      src: '/images/portfolio/dom-na-zolotom-zatone/4.jpg'
    },
    {
      src: '/images/portfolio/dom-na-zolotom-zatone/5.jpg'
    },
    {
      src: '/images/portfolio/dom-na-zolotom-zatone/6.jpg'
    },
    {
      src: '/images/portfolio/dom-na-zolotom-zatone/7.jpg'
    },
    {
      src: '/images/portfolio/dom-na-zolotom-zatone/8.jpg'
    },
    {
      src: '/images/portfolio/dom-na-zolotom-zatone/9.jpg'
    },
    {
      src: '/images/portfolio/dom-na-zolotom-zatone/10.jpg'
    },
    {
      src: '/images/portfolio/dom-na-zolotom-zatone/11.jpg'
    },
    {
      src: '/images/portfolio/dom-na-zolotom-zatone/12.jpg'
    }
  ];

  var options = {
      index: 0 // start at first slide
  };

  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
});
