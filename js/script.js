//GRAZIE AL (DOCUMENT).READY TUTTE LE AZIONI VERRANNO ESEGUITE DOPO CHE IL CARICAMENTO DELL'INTERA PAGINA SARA' ESAGUITO
$(document).ready(function(){

  // COMANDO CLICK PULSANTE PRENOTA 
  $('button').click(function(){
    $('.prenota-slider').slideToggle('.prenotazione-attiva');
  });

   // COMANDO CLICK PULSANTE CONFERMA 
  $('#conferma').click(function(){
    $('.prenota-slider').removeClass('.prenotazione-attiva');
    alert('Buon Viaggio');
  });

  // COMANDI DA TASTIERA
  $(document).keydown(function(e){
    
    // TASTO SINISTRO
    if (e.which == 37) { 
      pulsantePrev();
    }

    // TASTO DESTRO 
    else if (e.which == 39){
      pulsanteNext();
    }

  });

  // CON QUESTO COMANDO FACCIO COMPIERE UN'AZIONE DI POSIZIONAMENTO DELLA CLASSE AL TAG SUCCESSIVO (IN QUESTO CASO IMG) FINO ALL'ARRIVO DEL L'ULTIMO TAG CON CLASSE LAST CHE MI RIPORTA AL PRIMO TAG CON CLASSE FIRST
  $('.next').click(pulsanteNext); //funzione di callback che parte dopo il click

  // CON QUESTO COMANDO COMPLETAMENTE OPPOSTA ALLA PRECEDENTE FACCIO COMPIERE UN'AZIONE DI POSIZIONAMENTO DELLA CLASSE AL TAG PRECENDENTE (IN QUESTO CASO IMG) FINO ALL'ARRIVO DEL PRIMO TAG CON CLASSE FIRST CHE MI RIPORTA ALL'ULTIMO TAG CON CLASSE LAST
  $('.prev').click(pulsantePrev); //funzione di callback che parte dopo il click


  // PER IL CLICK SUI PALLINI 
  
  // PRIMO PALLINO = PRIMA IMG 
  $('.nav i:eq(0)').click(pallinoPrimoAttivo);

  // SECONDO PALLINO = SECONDA IMG 
  $('.nav i:eq(1)').click(pallinoSecondoAttivo);

  // TERZO PALLINO = TERZA IMG 
  $('.nav i:eq(2)').click(pallinoTerzoAttivo);

  // QUARTO PALLINO = QUARTA IMG 
  $('.nav i:eq(3)').click(pallinoQuartoAttivo);


  // PER IL CLICK SUI PALLINI SULLA MAPPA 
  
  // PRIMO PALLINO = PRIMA IMG 
  $('.mappa .nav-mappa i:eq(0)').click(pallinoPrimoAttivo);

  // SECONDO PALLINO = SECONDA IMG 
  $('.mappa .nav-mappa i:eq(1)').click(pallinoSecondoAttivo);

  // TERZO PALLINO = TERZA IMG 
  $('.mappa .nav-mappa i:eq(2)').click(pallinoTerzoAttivo);

  // QUARTO PALLINO = QUARTA IMG 
  $('.mappa .nav-mappa i:eq(3)').click(pallinoQuartoAttivo);

});
// FINE COMANDO (DOCUMENT).READY 

// FUNZIONI 

// pulsante per andare avanti
function pulsanteNext(){

  // memorizzo in delle var gli elementi che andrò a passare al prossimo tag
  var cittaAttiva = $('.titoli-citta h2.active');
  var imgAttiva = $('.images img.active');
  var pallinoAttivo = $('.nav i.active');
  var pallinoMappa = $('.mappa .nav-mappa > i.active');

  //stessa cosa delle img vedere sopra ma per visualizzare il nome della città
  cittaAttiva.removeClass('active');
  cittaAttiva.next().addClass('active');

  // con questo comando una volta fatto click sul tasto next(freccia destra) il posizionamento della classe active viene rimosso in primis dal suo tag e aggiunto al tag successivo grazie al comando next 
  imgAttiva.removeClass('active');
  imgAttiva.next().addClass('active');

  //stessa cosa delle img vedere sopra ma il pallino delle img 
  pallinoAttivo.removeClass('active');
  pallinoAttivo.next().addClass('active');

  //stessa cosa delle img vedere sopra ma per il pallino della mappa
  pallinoMappa.removeClass('active');
  pallinoMappa.next().addClass('active');

  // questo if funziona solo nel caso la classe active si aggiuge la classe last e in tal caso la posizione della classe active non va al prossimo tag come succedeva nel comando next ma verrà posizionata nuovamente al first creando un ciclo
  if(imgAttiva.hasClass('last')){
    $('.titoli-citta h2.first').addClass('active');
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
    $('.mappa .nav-mappa i.first').addClass('active');
  }

}
// fine pulsante per andare avanti 

// pulsante per andare indietro
function pulsantePrev(){

  //memorizzo in delle var gli elementi che andrò a passare al tag precedente
  var cittaAttiva = $('.titoli-citta h2.active');
  var imgAttiva = $('.images img.active');
  var pallinoAttivo = $('.nav i.active');
  var pallinoMappa = $('.mappa .nav-mappa > i.active');

  //stessa cosa delle img vedere sopra ma per visualizzare il nome della città
  cittaAttiva.removeClass('active');
  cittaAttiva.prev().addClass('active');

  // con questo comando una volta fatto click sul tasto prev(freccia sinistra) il posizionamento della classe active viene rimosso in primis dal suo tag e aggiunto al tag precedente grazie al comando prev 
  imgAttiva.removeClass('active');
  imgAttiva.prev().addClass('active');

  //stessa cosa delle img vedere sopra ma il pallino delle img 
  pallinoAttivo.removeClass('active');
  pallinoAttivo.prev().addClass('active');

  //stessa cosa delle img vedere sopra ma per il pallino della mappa
  pallinoMappa.removeClass('active');
  pallinoMappa.prev().addClass('active');

  // questo if funziona solo nel caso la classe active si aggiuge la classe first e in tal caso la posizione della classe active non va al precedente tag come succedeva nel comando prev ma verrà posizionata nuovamente al last creando un ciclo
  if(imgAttiva.hasClass('first')){
    $('.titoli-citta h2.last').addClass('active');
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
    $('.mappa .nav-mappa i.last').addClass('active');
  }

}
// fine pulsante per andare indietro


// funzione click pallino Primo 
function pallinoPrimoAttivo(){

  var cittaAttiva = $('.titoli-citta h2.active');
  var pallinoAttivo = $('.nav i.active');
  var pallinoMappa = $('.mappa .nav-mappa > i.active');

  cittaAttiva.removeClass('active');
  $('.titoli-citta h2:eq(0)').addClass('active');
    
  $('.images img.active').removeClass('active');
  $('.images img:eq(0)').addClass('active');

  pallinoAttivo.removeClass('active');
  $('.nav i:eq(0)').addClass('active');
  
  pallinoMappa.removeClass('active');
  $('.mappa .nav-mappa > i:eq(0)').addClass('active');

}

// funzione click pallino Secondo
function pallinoSecondoAttivo(){

  var cittaAttiva = $('.titoli-citta h2.active');
  var pallinoAttivo = $('.nav i.active');
  var pallinoMappa = $('.mappa .nav-mappa > i.active');

  cittaAttiva.removeClass('active');
  $('.titoli-citta h2:eq(1)').addClass('active');
    
  $('.images img.active').removeClass('active');
  $('.images img:eq(1)').addClass('active');

  pallinoAttivo.removeClass('active');
  $('.nav i:eq(1)').addClass('active');
  
  pallinoMappa.removeClass('active');
  $('.mappa .nav-mappa > i:eq(1)').addClass('active');

}

// funzione click pallino Terzo
function pallinoTerzoAttivo(){

  var cittaAttiva = $('.titoli-citta h2.active');
  var pallinoAttivo = $('.nav i.active');
  var pallinoMappa = $('.mappa .nav-mappa > i.active');

  cittaAttiva.removeClass('active');
  $('.titoli-citta h2:eq(2)').addClass('active');
    
  $('.images img.active').removeClass('active');
  $('.images img:eq(2)').addClass('active');

  pallinoAttivo.removeClass('active');
  $('.nav i:eq(2)').addClass('active');
  
  pallinoMappa.removeClass('active');
  $('.mappa .nav-mappa > i:eq(2)').addClass('active');

}

// funzione click pallino Quarto
function pallinoQuartoAttivo(){

  var cittaAttiva = $('.titoli-citta h2.active');
  var pallinoAttivo = $('.nav i.active');
  var pallinoMappa = $('.mappa .nav-mappa > i.active');

  cittaAttiva.removeClass('active');
  $('.titoli-citta h2:eq(3)').addClass('active');
    
  $('.images img.active').removeClass('active');
  $('.images img:eq(3)').addClass('active');

  pallinoAttivo.removeClass('active');
  $('.nav i:eq(3)').addClass('active');
  
  pallinoMappa.removeClass('active');
  $('.mappa .nav-mappa > i:eq(3)').addClass('active');

}