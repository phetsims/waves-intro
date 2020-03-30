// Copyright 2020, University of Colorado Boulder

/**
 * FaucetButtonSoundSelector is a Scenery node that allows the user to choose between various options for push button
 * sounds.
 */

import PhetFont from '../../scenery-phet/js/PhetFont.js';
import Node from '../../scenery/js/nodes/Node.js';
import Text from '../../scenery/js/nodes/Text.js';
import AquaRadioButtonGroup from '../../sun/js/AquaRadioButtonGroup.js';
import wavesIntro from './wavesIntro.js';

// constants
const RADIO_BUTTON_FONT = new PhetFont( 12 );

class FaucetButtonSoundSelector extends Node {

  constructor( selectorProperty ) {

    // set up a global variable to control this option (this is only acceptable because it's temporary code)
    const radioButtonsGroup = new AquaRadioButtonGroup(
      selectorProperty,
      [
        {
          node: new Text( 'Previous sound', { font: RADIO_BUTTON_FONT } ),
          value: 0
        },
        {
          node: new Text( 'New squishy sound 005', { font: RADIO_BUTTON_FONT } ),
          value: 1
        },
        {
          node: new Text( 'New squishy sound 007', { font: RADIO_BUTTON_FONT } ),
          value: 2
        },
        {
          node: new Text( 'New squishy sound 008', { font: RADIO_BUTTON_FONT } ),
          value: 3
        }
      ],
      {
        spacing: 13
      }
    );

    super( { children: [ radioButtonsGroup ] } );
  }
}

wavesIntro.register( 'FaucetButtonSoundSelector', FaucetButtonSoundSelector );
export default FaucetButtonSoundSelector;