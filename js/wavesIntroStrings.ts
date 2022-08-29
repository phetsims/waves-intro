// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import wavesIntro from './wavesIntro.js';

type StringsType = {
  'waves-intro': {
    'title': string;
    'titleStringProperty': TReadOnlyProperty<string>;
  };
  'water': string;
  'waterStringProperty': TReadOnlyProperty<string>;
  'sound': string;
  'soundStringProperty': TReadOnlyProperty<string>;
  'light': string;
  'lightStringProperty': TReadOnlyProperty<string>;
};

const wavesIntroStrings = getStringModule( 'WAVES_INTRO' ) as StringsType;

wavesIntro.register( 'wavesIntroStrings', wavesIntroStrings );

export default wavesIntroStrings;
