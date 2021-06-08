import {expectType} from 'tsd';
import macosRelease = require('.');

expectType<{name: string, version: string}>(macosRelease());
expectType<{name: string, version: string} | undefined>(macosRelease('foo'));
