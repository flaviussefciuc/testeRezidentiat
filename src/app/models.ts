export interface Topic { id: string; name: string; book: 'Kumar & Clark' | 'Lawrence' | 'Sinopsis'; chapter: number; pages: string; }
export interface Question { id: string; topicId: string; type: 'CS' | 'CM'; stem: string; options: string[]; correct: number[]; explanation: string; source: string; }
export interface Answer { questionId: string; selected: number[]; }
export interface Attempt { id: string; userId: string; mode: 'practice' | 'exam'; startedAt: string; completedAt: string; answers: Answer[]; }
export interface Draft { id: string; owner: string; mode: 'practice' | 'exam'; startedAt: string; deadline: number | null; questionIds: string[]; answers: Record<string,number[]>; checked: string[]; flagged: string[]; index: number; }
