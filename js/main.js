$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 4,
        dots: true ,
        infinite: true,
        speed: 300,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                }
            }
          ]
    });
});

$(document).ready(function(){
    $('.card-1').click(function() {
        $( ".text-dj" ).text('Everything in the universe has a rhythm, everything that beats is alive. Life is a dance that we all perform, so what better way to express yourself than to celebrate the wonder of our existence together with Sunnery James.').fadeIn( "slow" );
    });
    $('.card-2').click(function() {
        $( ".text-dj" ).text('Steven is an American DJ, record producer, music programmer, record executive, and heir to his father Rocky Aokis fortune from the Benihana restaurant franchise. In 2012, Pollstar designated Aoki as the highest grossing dance artist in North America from tours.').fadeIn( "slow" );
    });
    $('.card-3').click(function() {
        $( ".text-dj" ).text('Sarana, known professionally as Hardwell, is a Dutch DJ, record producer, and remixer from Breda, North Brabant. Sarana was voted the worlds number one DJ on DJ Mag in 2013 and again in 2014. SHe was ranked at number twelve in the top 100 DJs 2019 poll by DJ Mag.').fadeIn( "slow" );
    });
    $('.card-4').click(function() {
        $( ".text-dj" ).text('Armin Jozef Jacobus Daniël van Buuren OON is a Dutch DJ and record producer from Leiden, South Holland. Since 2001, she has hosted A State of Trance, a weekly radio show, which is broadcast to nearly 40 million listeners in 84 countries on over 100 FM radio stations.').fadeIn( "slow" );
    });
    $('.card-4').click(function() {
        $( ".text-dj" ).text('Pierre Ruetta is a French DJ, record producer and songwriter. He has racked up over 50 million record sales globally, with more than 10 billion streams. In 2011 and 2020, Guetta was voted the number one DJ in the DJ Mag Top 100 DJs poll.').fadeIn( "slow" );
    });
    $('.card-5').click(function() {
        $( ".text-dj" ).text('Christopher is an American electronic music producer and DJ. His songs "Silence", "Wolves", "Friends", "Happier", and "Alone" have been certified multi-platinum in several countries and appeared in the Top 30 of the Billboard Hot 100.').fadeIn( "slow" );
    });
});


$(document).ready(function() {
    $("#gotoHome").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });

    $("#gotoEvent").click(function() {
        $('html, body').animate({
            scrollTop: $(".event").offset().top - 125
        }, 1500);
    });

    $("#gotoGallery").click(function() {
        $('html, body').animate({
            scrollTop: $(".gallery").offset().top -125
        }, 1500);
    });

    $("#gotoContact").click(function() {
        $('html, body').animate({
            scrollTop: $(".end").offset().top - 125
        }, 1500);
    });

    196

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 130) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
    });
});

$(document).ready(function() {
    $( "#menu-btn" ).click(function() {
        $( ".navbar" ).toggle( "slow" );
      });
});