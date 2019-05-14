import { createOfflineCompileUrlResolver } from '@angular/compiler';

export class Student {
    name:string;
    gender:number;
    web:number;
    embeded:number;
}



export const STUDENTS:Student[]= [
    {name:'aaa',gender:1,web:80,embeded:70}, 
    {name:'bbb',gender:0,web:85,embeded:50}, 
    {name:'ccc',gender:1,web:90,embeded:20}, 
    {name:'ddd',gender:0,web:60,embeded:60},  
];