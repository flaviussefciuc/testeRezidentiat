import {set2026} from '../set-author';

// Set 2026 · Bolile vasculare (Lawrence, cap. 26). P. 540 (venele varicoase și insuficiența
// venoasă cronică) was asked three times in 2023–2025; p. 537–538 (tromboza venoasă profundă) once.
const IV='Insuficiența venoasă cronică',TV='Tromboza venoasă profundă — Tratament';

export const VASCULAR_2026=set2026('vascular',[
[['Ulcerul venos, spre deosebire de ulcerul arterial:',
 ['apare deasupra maleolei mediale, pe fond de hiperpigmentare','este de obicei puțin dureros, cu margini neregulate','se ameliorează la ridicarea membrului','apare pe pulpa degetelor și pe călcâi','are durerea calmată de atârnarea membrului'],'ABC',540,IV,
 'Diferențierea ulcerului venos de cel arterial după sediu, durere și poziție.',
 ['Hipertensiunea venoasă afectează zona supramaleolară medială, cu hiperpigmentare și lipodermatoscleroză.','Ulcerul venos este superficial, cu margini neregulate și durere moderată.','Ridicarea membrului scade presiunea venoasă și edemul.','Nu: ulcerul de pe degete și călcâi, cu margini nete, este arterial.','Nu: durerea calmată de atârnarea membrului este a ischemiei arteriale.']],
 'Distractorii descriu ulcerul arterial.',['ulcer venos','hiperpigmentare']],
[['Filtrul de venă cavă inferioară este indicat în tromboza venoasă profundă când:',
 ['anticoagularea este contraindicată','embolia pulmonară recidivează sub anticoagulare corectă','complicațiile anticoagulării impun oprirea ei','tromboza este distală, limitată la gambă','pacientul preferă filtrul în locul anticoagulării'],'ABC',538,TV,
 'Indicațiile filtrului de venă cavă, alternativă la anticoagulare doar în situații precise.',
 ['Când anticoagularea nu se poate face, filtrul previne embolia pulmonară.','Recidiva emboliei sub anticoagulare corectă este o indicație clasică.','O hemoragie sub anticoagulare care impune oprirea tratamentului justifică filtrul.','Nu: tromboza izolată a gambei nu este o indicație de filtru.','Nu: filtrul nu înlocuiește anticoagularea la pacientul care o poate primi.']],
 'Distractorii transformă filtrul într-o alternativă de rutină.',['filtru de venă cavă','anticoagulare']],
]);
