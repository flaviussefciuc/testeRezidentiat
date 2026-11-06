import test from 'node:test';
import assert from 'node:assert/strict';
import {emphasize,isNegative} from '../src/app/emphasis.ts';

const marked=(s:string)=>emphasize(s).filter(x=>x.k).map(x=>`${x.k}:${x.t}`);
test('polarity and qualifiers are emphasised, plain words are not',()=>{
 assert.deepEqual(marked('În nefrectomia radicală se îndepărtează următoarele, cu EXCEPȚIA:'),['neg:cu EXCEPȚIA']);
 assert.deepEqual(marked('Cel mai frecvent agent al pneumoniei comunitare este:'),['qual:Cel mai frecvent']);
 assert.deepEqual(marked('Tratamentul de primă intenție în HTA:'),['qual:de primă intenție']);
 assert.deepEqual(marked('Pacientul nu răspunde la nitroglicerină'),[]);
 assert.deepEqual(marked('Care afirmație NU este corectă?'),['neg:NU este']);
 assert.deepEqual(marked('Anemia nu este caracteristică pentru:'),['neg:nu este']);
 assert.deepEqual(marked('Numaidecât'),[]);
 assert.equal(emphasize('cu excepția').map(s=>s.t).join(''),'cu excepția');
});
test('negative stems are recognised',()=>{
 assert.ok(isNegative('Următoarele sunt adevărate, cu excepția:'));
 assert.ok(isNegative('Despre sepsis, afirmația falsă este:'));
 assert.ok(!isNegative('O valoare fals scăzută a HbA1c poate rezulta din:'));
 assert.ok(!isNegative('Contraindicațiile IECA includ:'));
});
