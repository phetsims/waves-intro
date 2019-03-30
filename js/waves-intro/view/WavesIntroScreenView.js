// Copyright 2019, University of Colorado Boulder

/**
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  const ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  const ScreenView = require( 'JOIST/ScreenView' );
  const wavesIntro = require( 'WAVES_INTRO/wavesIntro' );

  class WavesIntroScreenView extends ScreenView {

    /**
     * @param {WavesIntroModel} model
     */
    constructor( model ) {

      super();

      const resetAllButton = new ResetAllButton( {
        listener: () => {
          model.reset();
        },
        right: this.layoutBounds.maxX - 10,
        bottom: this.layoutBounds.maxY - 10
      } );
      this.addChild( resetAllButton );
    }

    // @public
    step( dt ) {
      //TODO Handle view animation here.
    }
  }

  return wavesIntro.register( 'WavesIntroScreenView', WavesIntroScreenView );
} );