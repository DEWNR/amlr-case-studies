var slideLeft = new Menu({
    wrapper: '#o-wrapper',
    type: 'slide-left',
    menuOpenerClass: '.c-button',
    maskId: '#c-mask'
});

var slideLeftBtn = document.querySelector('#c-button--slide-left');

slideLeftBtn.addEventListener('click', function(e) {
    e.preventDefault;
    slideLeft.open();
});


// Print
$('[data-js=print]').on('click', function() { window.print(); return false; });


// Email
$('[data-js=email]').on('click', function() {

    var mailSubject = encodeURI(thisPage.title);

    var mailBody = encodeURI('I thought you might like this post: '+thisPage.url);

    window.location.href = 'mailto:?subject='+mailSubject+'&body='+mailBody;

    return false;

});


// var str = location.search;
//
// console.log(str.indexOf('People%20matter'))
//
// var categoryTitle = '';
//
// if (str.indexOf('Need%20to%20know') >= 0) {
//     categoryTitle = 'Need to know';
//     console.log('here');
// }
//
// if (str.indexOf('News') >= 0) {
//     categoryTitle = 'News';
// }
//
// if (str.indexOf('Social') >= 0) {
//     categoryTitle = 'Social';
// }
//
// if (str.indexOf('Community%20at%20the%20centre') >= 0) {
//     categoryTitle = 'Community at the centre';
// }
//
// if (str.indexOf('Profile') >= 0) {
//     categoryTitle = 'Profile';
// }
//
// if (str.indexOf('Events') >= 0) {
//     categoryTitle = 'Events';
// }
//
// if (str.indexOf('People%20matter') >= 0) {
//     categoryTitle = 'People matter';
// }
//
// if (categoryTitle) {
//     $('h1').append(' - ' + categoryTitle);
// }

// $('.card-teaser--blog').each(function(){
//     // if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
//
//     // console.log($(this).height());
//
//     prevHeight = $(this).prev().height();
//     thisHeight = $(this).height();
//
//     console.log(prevHeight)
//     console.log(thisHeight)
//
//
// });


// var pairs = [];
// $('.card-teaser--blog').each(function(i, div) {
//     var i_over_2 = Math.floor(i / 2);
//     if (!pairs[i_over_2]) pairs[i_over_2] = $();
//     pairs[i_over_2] = pairs[i_over_2].add(div);
// });
//
// $.each(pairs, function(i, p) {
//     console.log(p);
// });
