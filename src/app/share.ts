// Links to single question pages and sharing them (system share sheet, else clipboard).
export const shareUrl=(id:string)=>`${location.origin}/grila/${encodeURIComponent(id)}`;
export async function shareQuestion(id:string,stem:string):Promise<string>{
 const url=shareUrl(id);
 try{if(navigator.share){await navigator.share({title:'Grilă Rezi',text:stem,url});return 'Trimis.';}}catch{/* cancelled */}
 try{await navigator.clipboard.writeText(url);return 'Link copiat.';}catch{return url;}
}
