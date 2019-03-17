import {expectType} from 'tsd-check';
import macosRelease from '.';

expectType<string>(macosRelease());
expectType<string>(macosRelease('foo'));
