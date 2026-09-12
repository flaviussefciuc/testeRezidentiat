import type {Question} from './models';
import {KUMAR} from './questions-kumar';
import {SURGERY} from './questions-surgery';
import {SYNOPSIS} from './questions-synopsis';
import {ELECTROLYTES_SOURCE} from './bank/electrolytes-source';
import {SEPSIS_SOURCE} from './bank/sepsis-source';

export const SOURCE_CHECKED_QUESTIONS:Question[]=[...SEPSIS_SOURCE,...ELECTROLYTES_SOURCE];
export const LEGACY_QUESTIONS:Question[]=[...KUMAR,...SURGERY,...SYNOPSIS];
// Old stems/options/keys remain addressable for saved attempts and open drafts.
// New sessions use the revised chapter; they never silently rescore old IDs.
export const QUESTIONS:Question[]=[...LEGACY_QUESTIONS.filter(q=>!['sepsis','electroliti'].includes(q.topicId)),...SOURCE_CHECKED_QUESTIONS];
export const QUESTION_HISTORY:Question[]=[...LEGACY_QUESTIONS,...SOURCE_CHECKED_QUESTIONS];
