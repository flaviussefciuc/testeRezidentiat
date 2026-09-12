import {INTENSIVE_CARE_SOURCE} from './intensive-care-source';
import {ELECTROLYTES_SOURCE} from './electrolytes-source';
import {SEPSIS_SOURCE} from './sepsis-source';
import {HEMATOLOGY_SOURCE} from './hematology-source';
export const MEDICINE_A=[
...SEPSIS_SOURCE,
...ELECTROLYTES_SOURCE,
...INTENSIVE_CARE_SOURCE,
...HEMATOLOGY_SOURCE,
];
