// Copyright 2020-2023, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/LocalizedStringProperty.js';
import wavesIntro from './wavesIntro.js';

type StringsType = {
  'waves-intro': {
    'title': string;
    'titleStringProperty': LocalizedStringProperty;
  };
  'water': string;
  'waterStringProperty': LocalizedStringProperty;
  'sound': string;
  'soundStringProperty': LocalizedStringProperty;
  'light': string;
  'lightStringProperty': LocalizedStringProperty;
};

const WavesIntroStrings = getStringModule( 'WAVES_INTRO' ) as StringsType;

wavesIntro.register( 'WavesIntroStrings', WavesIntroStrings );

export default WavesIntroStrings;
