test( "Popcorn Slide Plugin", function() {

  var popped = Popcorn( "#video" ),
      expects = 5,
      count = 0,
      setupId,
      playerdiv = document.getElementById( "player" );

  expect( expects );

  function plus() {
    if ( ++count === expects ) {
      start();
    }
  }

  stop();

  ok( "slide" in popped, "slide is a method of the popped instance" );
  plus();

  equals( playerdiv.innerHTML, "", "initially, there is nothing inside the playerdiv" );
  plus();

  popped.slide({
    target: "player",
    slide: 11,
    //seconds
    start: 1,
    //seconds
    end:3,
    doc:"popcorn-091127152424-phpapp02"
  })


  setupId = popped.getLastTrackEventId();

  popped.exec( 2, function() {
    ok( !/display: none;/.test( playerdiv.innerHTML ), "Div contents are displayed" );
    plus();
    ok( /object/.test( playerdiv.innerHTML ), "A slideshow object exists" );
    plus();
  });

  popped.exec( 4, function() {
    ok( !playerdiv.children[ 2 ], "removed image was properly destroyed" );
    plus();
  });

  popped.volume( 0 ).play();
});
