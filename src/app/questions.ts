import type {Question} from './models';
import {KUMAR} from './questions-kumar';
import {SURGERY} from './questions-surgery';
import {SYNOPSIS} from './questions-synopsis';
import {HEMATOLOGY_SOURCE} from './bank/hematology-source';
import {INTENSIVE_CARE_SOURCE} from './bank/intensive-care-source';
import {ELECTROLYTES_SOURCE} from './bank/electrolytes-source';
import {SEPSIS_SOURCE} from './bank/sepsis-source';
import {ADVANCED_REVISIONS} from './bank/advanced-revisions';
import {RHEUMATOLOGY_ADVANCED} from './bank/rheumatology-advanced';
import {advancedEligibilityErrors} from './bank/advanced-author';

export const PREVIOUS_SOURCE_QUESTIONS:Question[]=[...SEPSIS_SOURCE,...ELECTROLYTES_SOURCE,...INTENSIVE_CARE_SOURCE,...HEMATOLOGY_SOURCE];
export const ADVANCED_CANDIDATES=[...ADVANCED_REVISIONS,...RHEUMATOLOGY_ADVANCED];
export const SOURCE_CHECKED_QUESTIONS=ADVANCED_CANDIDATES.filter(q=>advancedEligibilityErrors(q).length===0);
export const LEGACY_QUESTIONS:Question[]=[...KUMAR,...SURGERY,...SYNOPSIS];
// Old stems/options/keys remain addressable for saved attempts and open drafts.
// New sessions use the revised chapter; they never silently rescore old IDs.
export const QUESTIONS:Question[]=[...LEGACY_QUESTIONS.filter(q=>!['sepsis','electroliti','ati','hematologie'].includes(q.topicId)),...SOURCE_CHECKED_QUESTIONS];
export const QUESTION_HISTORY:Question[]=[...LEGACY_QUESTIONS,...PREVIOUS_SOURCE_QUESTIONS,...SOURCE_CHECKED_QUESTIONS];
