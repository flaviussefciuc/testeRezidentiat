import type {Question} from './models';
import {KUMAR} from './questions-kumar';
import {SURGERY} from './questions-surgery';
import {SYNOPSIS} from './questions-synopsis';
export const QUESTIONS:Question[]=[...KUMAR,...SURGERY,...SYNOPSIS];
