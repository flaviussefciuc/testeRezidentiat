// Printed page → page of the locally indexed PDF extract, per syllabus chapter.
// Derived from the citations of the source-checked questions (constant offset inside
// each contiguous block of the extract). New sets use it so their PDF references agree
// with the rest of the chapter. Pages inside a gap of the extract (hepatology 1276–1283,
// acid–base 195–202, endocrinology 619) have no PDF page: the number computed for them is a
// placeholder, and the app never shows PDF pages for edition-level (Set 2026) questions.
export const PDF_GAPS:Record<string,[number,number][]>={hepatologie:[[1276,1283]],electroliti:[[195,202]],endocrinologie:[[619,619]]};
export const PDF_PAGE:Record<string,(p:number)=>number>={
 sepsis:p=>p-146,electroliti:p=>p-149,ati:p=>p-182,hematologie:p=>p<=336?p-275:p-289,reumatologie:p=>p<=454?p-370:p-372,endocrinologie:p=>p<=619?p-523:p-525,diabet:p=>p-601,neurologie:p=>p<=848?p-696:p-715,pneumologie:p=>p<=961?p-789:p<=972?p-790:p-792,tromboembolism:p=>p-810,cardiologie:p=>p<=1048?p-837:p<=1107?p-839:p-851,hta:p=>p-855,gastro:p=>p<=1166?p-871:p<=1176?p-876:p-897,hepatologie:p=>p<=1279?p-962:p<=1284?p-970:p-973,nefrologie:p=>p<=1368?p-1020:p<=1387?p-1036:p-1040,hiv:p=>p-1059,
 perioperator:p=>p,hemostaza:p=>p-26,'infectii-chir':p=>p-55,trauma:p=>p-57,arsuri:p=>p-58,hernii:p=>p-59,esofag:p=>p<=142?p-60:p-68,stomac:p=>p<=168?p-70:p<=174?p-73:p-77,intestin:p=>p<=199?p-78:p-82,colon:p=>p<=219?p-83:p<=225?p-85:p-87,biliar:p=>p-88,pancreas:p=>p-89,'ficat-splina':p=>p<=324?p-130:p-138,vascular:p=>p<=527?p-315:p-321,orl:p=>p-327,ortopedie:p=>p-328,urologie:p=>p-329,
 dermato:p=>p-195,pediatrie:p=>p-195,gineco:p=>p-222,obstetrica:p=>p-222,psihiatrie:p=>p-222,epidemio:p=>p-222,
};
