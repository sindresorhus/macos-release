import {expectType} from 'tsd';
import macosRelease from './index.js';

expectType<{name: string; version: string}>(macosRelease());
expectType<{name: string; version: string} | undefined>(macosRelease('foo'));
