// PLUGIN: SLIDE

(function ( Popcorn ) {

  /**
   * Slide popcorn plug-in
   * Options parameter will need a type, target, slide and change.
   * Type is the kind of slide manipulation
   * Start is the time you want to manipulation to take place
   * Slide is the slide number to change to
   * Target is the id of the document element that the slideshow is on
   *
   * @param {Object} options
   *
   * Example:
     var p = Popcorn('#video')
	  .slide( {
        type: "jump",
		target: "player",
        slide: 5,
		start: 6
        } )
   *
   */
  Popcorn.plugin( "slide" , {
    manifest: {
      about: {
        name: "Popcorn Slide Plugin",
        version: "0.1",
        author: "hungry-r",
        website: "hungryr.wordpress.com"
      },
      options: {
        type: {
          elem: "input",
          type: "text",
          label: "Type"
        },
        
        slide: {
          elem: "input",
          type: "text",
          label: "Slide"
        },
        start: {
          elem: "input",
          type: "text",
          label: "Start"
        },
		target: "iframe-container"
      }
    },
    _setup: function( options ) {
	  target = document.getElementById( options.target ),
	  Popcorn.getScript( "http://public.slidesharecdn.com/javascripts/swfobject_playerapi.js" );
      if ( !target && Popcorn.plugin.debug ) {
        throw new Error( "target container doesn't exist" );
      }
    },
    /**
     * @member slide
     * The start function will be executed when the currentTime
     * of the video  reaches the start time provided by the
     * options variable
     */
    start: function( event, options ){
	  document.getElementById("player").jumpTo(parseInt(options.slide));
    },
    _teardown: function( options ) {
      ;
    }
  });
})( Popcorn );
