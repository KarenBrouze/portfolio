$(document).ready(function(){

	$('.scroll').on('click', function() { // Au clic sur un élément
 			var page = $(this).attr('href'); // Page cible
 			var speed = 750; // Durée de l'animation (en ms)
 			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
 			return false;
 		})

	var largeurFenetre = $(window).width();
	var hauteurFenetre = $(window).height();

	$('#forme1').css({'margin-top':'0' +'px', 'margin-left':-largeurFenetre-1000+'px'}).delay(0).animate({'margin-top':'0px', 'margin-left':'0px'},1200);

	$('#forme2').css({'margin-top':-largeurFenetre-1000+'px', 'margin-left':'0'+'px'}).delay(100).animate({'margin-top':'0px', 'margin-left':'0px'},1200);

	$('#forme3').css({'margin-top':'0px', 'margin-left':largeurFenetre+1000+'px'}).delay(0).animate({'margin-top':'0px', 'margin-left':'0px'},1200);

	$('#forme4').css({'margin-top':hauteurFenetre+300 +'px', 'margin-right':-largeurFenetre-1000+'px'}).delay(100).animate({'margin-top':'0px', 'margin-right':'0px'},1200);   

	$('#forme5').css({'margin-top':hauteurFenetre+300+'px', 'margin-left':-largeurFenetre/2+'px'}).delay(200).animate({'margin-top':'0px', 'margin-left':'0px'},1200);   

	$('#forme6').css({'margin-top':-hauteurFenetre +'px', 'margin-left':largeurFenetre/2+'px'}).delay(200).animate({'margin-top':'0px', 'margin-left':'0px'},1200); 

	$('#rond').css({'margin-top':hauteurFenetre/2-500 +'px', 'margin-left':largeurFenetre+'px', 'opacity':'0'}).delay(1500).animate({'margin-top':'0px', 'margin-left':'0px', 'opacity':'1'},1000);   

});