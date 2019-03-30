// Copyright 2019, University of Colorado Boulder

/**
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );
  const wavesIntro = require( 'WAVES_INTRO/wavesIntro' );
  const WavesIntroModel = require( 'WAVES_INTRO/waves-intro/model/WavesIntroModel' );
  const WavesIntroScreenView = require( 'WAVES_INTRO/waves-intro/view/WavesIntroScreenView' );

  class WavesIntroScreen extends Screen {

    constructor() {

      const options = {
        backgroundColorProperty: new Property( 'white' )
      };

      super(
        () => new WavesIntroModel(),
        ( model ) => new WavesIntroScreenView( model ),
        options
      );
    }
  }

  return wavesIntro.register( 'WavesIntroScreen', WavesIntroScreen );
} );