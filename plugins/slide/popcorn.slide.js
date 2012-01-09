// PLUGIN: SLIDE
// By Hyungryul Chun:

(function ( Popcorn ) {

  /**
   * Slide popcorn plug-in
   * Shows a slide from a slideshow
   * Type is the kind of slide manipulation
   * Start is the time you want to manipulation to take place
   * End is the time that you want this plug-in to stop executing
   * Slide is the slide number to change to
   * Target is the id of the document element that the slideshow is on
   *
   * @param {Object} options
   *
   * Example:
     var p = Popcorn('#video')
    .slide( {
    target: "player",
    slide: 5,
    start: 6, // seconds
    end: 6, // seconds
    doc:"popcorn-091127152424-phpapp02" // docname from slideshare
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
        target: "iframe-container",
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
      end: {
            elem: "input",
            type: "text",
            label: "End"
          },
      doc: {
            elem: "input",
            type: "text",
            label: "Doc"
          }
        }
      },
      _setup: function( options ) {
    ;
      },
    /**
     * @member slide
     * The start function will be executed when the currentTime
     * of the video  reaches the start time provided by the
     * options variable
     */
    start: function( event, options ){
    var newdiv = document.createElement('div');
    var idname = options.target + options.start + options.end + options.doc
    newdiv.setAttribute('id', idname);
    document.getElementById( options.target ).appendChild(newdiv);
    target = document.getElementById( idname ),
    Popcorn.getScript( "http://public.slidesharecdn.com/javascripts/swfobject_playerapi.js" );

    if ( !target && Popcorn.plugin.debug ) {
          throw new Error( "target container doesn't exist" );
    }

    var flashMovie;
    //allowScriptAccess from other domains
    var params = {
      allowScriptAccess: "always"
    };
    var atts = {
      id: idname
    };
    //doc: The path of the file to be used
    //startSlide: The number of the slide to start from
    //rel: Whether to show a screen with related slideshows at the end or not. 0 means false and 1 is true..
    var flashvars = {
      doc : options.doc,
      startSlide : parseInt(options.slide),
      rel : 0
    };
    //Generate the embed SWF file
    swfobject.embedSWF("http://static.slidesharecdn.com/swf/ssplayer2.swf", idname, "598", "480", "8", null, flashvars, params, atts);
    //Get a reference to the player
    flashMovie = document.getElementById(idname);
      },
    /**
       * @member slide
       * The end function will be executed when the currentTime
       * of the video  reaches the end time provided by the
       * options variable
       */
    end: function( event, options ) {
    var idname = options.target + options.start + options.end + options.doc
    swfobject.removeSWF(idname)
      },
      _teardown: function( options ) {
      ;
      }
  });
})( Popcorn );
