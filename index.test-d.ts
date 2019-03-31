import {expectType} from 'tsd';
import macosRelease = require('.');

expectType<string>(macosRelease());
expectType<string>(macosRelease('foo'));
