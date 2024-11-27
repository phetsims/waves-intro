// Copyright 2020-2024, University of Colorado Boulder

/* eslint-disable */
/* @formatter:off */

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */

import getStringModule from '../../chipper/js/browser/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/browser/LocalizedStringProperty.js';
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
