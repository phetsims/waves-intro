// Copyright 2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const AlignGroup = require( 'SCENERY/nodes/AlignGroup' );
  const MediumScreen = require( 'WAVE_INTERFERENCE/medium/MediumScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  const wavesIntroTitleString = require( 'string!WAVES_INTRO/waves-intro.title' );

  const simOptions = {
    credits: {
      leadDesign: 'Amy Rouinfar, Noah Podolefsky',
      softwareDevelopment: 'Sam Reid',
      team: 'Wendy Adams, Diana L\u00f3pez Tavares, Ariel Paul, Kathy Perkins, Katie Woessner',
      qualityAssurance: 'Steele Dalton, Megan Lai, Liam Mulhall, Laura Rea, Jacob Romero, Katie Woessner, Kelly Wurtz',
      graphicArts: 'Cheryl McCutchan',
      thanks: 'Thanks to the STROBE NSF Science and Technology Center on Real-Time Functional Imaging for their support.'
    }
  };

  // launch the sim - beware that scenery Image nodes created outside of SimLauncher.launch() will have zero bounds
  // until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
  SimLauncher.launch( () => {

    // Panels on the right side of the lattice (in the first three screens) have matching widths, within each screen and
    // across screens.
    const alignGroup = new AlignGroup( {

      // Elements should have the same widths but not constrained to have the same heights
      matchVertical: false
    } );

    const screens = [
      new MediumScreen( 'waterScene', 'Water', alignGroup ),
      new MediumScreen( 'soundScene', 'Sound', alignGroup ),
      new MediumScreen( 'lightScene', 'Light', alignGroup )
    ];
    const sim = new Sim( wavesIntroTitleString, screens, simOptions );
    sim.start();
  } );
} );