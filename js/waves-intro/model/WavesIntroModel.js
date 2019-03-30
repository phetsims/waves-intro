// Copyright 2019, University of Colorado Boulder

/**
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const wavesIntro = require( 'WAVES_INTRO/wavesIntro' );

  /**
   * @constructor
   */
  class WavesIntroModel  {

    constructor() {
      //TODO
    }

    // @public resets the model
    reset() {
      //TODO Reset things here.
    }

    // @public
    step( dt ) {
      //TODO Handle model animation here.
    }
  }

  return wavesIntro.register( 'WavesIntroModel', WavesIntroModel );
} );