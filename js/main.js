$(function() {
    
    var slideCount = $(".single-slide").length;
    console.log(slideCount);
    
    //Nadajemy każdemu single slide szerokość podst 100 podzieloną przez ilość slajdów w procentach
    
    $('.single-slide').css("width", 100 / slideCount + "%");
    
    // nadajemy DIVOWI na każdy slajd szerokość w procentach
    
    $('.slide-show').css("width", slideCount * 100 + "%");
    
    // nadajemy przez zmienną obliczenie szerokości jednego slajdu
    
    var szerokoscSlida = 100/slideCount;
    console.log(szerokoscSlida);
    
    var slideShow = $('.slide-show');
    
    // iteracja po wszystkich slajdach i nadanie im marginesów oraz szerokości
    // index to to samo co i w JS
    
    slideShow.find('.single-slide').each(function(index) {
        $(this).css({"width": szerokoscSlida + "%", "left": index * szerokoscSlida + "%"});
    });
    
    
     var slideIndex = 0;
    // przycisk next - wywołanie funkcji slide do przodu
    
     $('.next-slide').click(function() {
        slide(slideIndex + 1); // jako parametr przekazujemy nowy index slajdu    
    });
    
    // przycisk prev - wywołanie funkcji slide do tyłu
    
    $('.prev-slide').click(function() {
        slide(slideIndex - 1); // jako parametr przekazujemy nowy index slajdu     
    });
    
    function slide(newSlideIndex) {
        console.log(newSlideIndex);
        var marginLeft = (newSlideIndex * (-100)) + "%";
        
        if (newSlideIndex >= slideCount) {
            slideShow.animate({"margin-left": 0 + "%"}, 600);
            return;
        }
        
    // tworzymy zmienną która będzie nam przesuwać
        
    
   
    // na elemencie slideShow mamy wykonać animację która nada elem margines z tą wartością marginLeft 
    
    slideShow.animate({"margin-left": marginLeft}, 800, function() {
        var slajdCaptionPrev = $('.slider-caption').eq(newSlideIndex);
        slideIndex =  newSlideIndex;
        slajdCaptionPrev.fadeIn('slow');
    });
        
    
    }  
    
});