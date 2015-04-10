      function teeTemput() {
        // Tavalliset
        var korvattava=/([#@][A-Za-z0-9_À-ÿ]+):([A-Za-z0-9_À-ÿ]+)/g;
        var korvaava="$1\u200b$2";
        // Erikois, leveät
        var korvattava2=/([#@][A-Za-z0-9_À-ÿ]*)([A-HJ-Z0-9mwÀ-ËÐ-ßæ])¤([A-Za-z0-9_À-ÿ]+)/g;
        var korvaava2="$1$2\u200b\u0338\u035c$3";
        // Erikois, kapeat
        var korvattava3=/([#@][A-Za-z0-9_À-ÿ]+)([Ia-ln-vx-z_Ì-Ïà-åç-ÿ])¤([A-Za-z0-9_À-ÿ]+)/g;
        var korvaava3="$1$2\u200b\u0337\u035c$3";
        
        var el=document.getElementById('temppuarea');
        el.value=el.value.replace(korvattava,korvaava);
        el.value=el.value.replace(korvattava2,korvaava2);
        el.value=el.value.replace(korvattava3,korvaava3);
        el.select();
        el.focus();
        return;
      }
      
      function postaa(palvelu) {
        var post = document.getElementById('temppuarea').value;
        var url;
        if(palvelu=='facebookkiin') {
          window.alert("Ei vielä toteutettu. Kopioi ja liitä teksti itse.");       
          return;
        }
        else {
          url="https://twitter.com/intent/tweet?text="+encodeURIComponent(post);
        }
        var popup=window.open(url,"twitterpop");
        if(popup===null) {
          // Selain estää popupin
          if(window.confirm("Selain estää avaamasta popup-ikkunaa. Avaanko postaussivun tähän välilehteen?")) window.location=url;
        }
      }
      
      function laskeMerkit() {
        var merkit=140-document.getElementById('temppuarea').value.length;
        document.getElementById('charlimit').textContent=merkit;
        return;
      }
      
      function shortKey(event) {
        if(!event.altKey) return;
        var key = event.which;
        if(key == 116) { // T
          event.preventDefault();
          teeTemput();
        } else if(key == 112) { // P
          event.preventDefault();
          teeTemput();
          postaa();
        } /*else if(key == 102) { // F
          event.preventDefault();
          teeTemput();
          postaa('facebookkiin');        
        }*/
        
        else return;
      }

jQuery(document).ready(function($){
  if( $('.floating-labels').length > 0 ) floatLabels();

  function floatLabels() {
    var inputFields = $('.floating-labels .cd-label').next();
    inputFields.each(function(){
      var singleInput = $(this);
      //check if user is filling one of the form fields
      checkVal(singleInput);
      singleInput.keyup(function(){
        checkVal(singleInput);  
      });
    });
  }

  function checkVal(inputField) {
    ( inputField.val() == '' ) ? inputField.prev('.cd-label').removeClass('float') : inputField.prev('.cd-label').addClass('float');
  }
});