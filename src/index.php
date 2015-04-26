<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Hashtag it! - Tweet with clean hashtag conjuctions</title>
        <meta name="description" content="You forgot to edit meta description. Not good.">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="css/main.css">

        <link rel="shortcut icon" href="images/favicon.png">
        <link rel="apple-touch-icon" sizes="72x72" href="images/icon-ipad.png">
        <link rel="apple-touch-icon" sizes="114x114" href="images/icon-retina.png">
    </head>
    <body onkeypress="shortKey(event);">

    <div class="wrapper">

      <h2>Hashtg.it</h2>

      <form class="cd-form floating-labels">
        
        <label class="cd-label" for="temppuarea">Type a tweet, e. g. in Finnish: #musta:n @kissa:n #paksu:t #posket</label>
        
        <textarea id="temppuarea" autocomplete="off" onkeyup="laskeMerkit();" onchange="laskeMerkit();" onfocus="laskeMerkit();" onblur="laskeMerkit();"></textarea>
        
        <div class="characters">
          <p class="limit"><span id="charlimit">140</span> characters left</p>
        </div>

        <div class="buttons">
          <button type="button" onclick="teeTemput(); postaa('twitteriin');">Tweet it</button>
          <button type="button" onclick="teeTemput();" class="do">Transform hashtags</button>
        </div>

      </form>

    <footer>
      <p class="disclaimer">Maintained by <a href="http://twitter.com/rolle">@rolle</a> &mdash; original script by <a href="http://twitter.com/kingi89">@kingi89</a> &mdash; hosted by <a href="http://www.dude.fi"><span>DUDE</span></a><br />
      <a href="https://github.com/ronilaukkarinen/hashtg"><strong>View in Github</strong></a></p>
    </footer>

      <script src="js/main.js"></script>
  </body>
</html>
