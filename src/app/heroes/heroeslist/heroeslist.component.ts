import { Component } from '@angular/core';
import { IHeroes } from '../heroes';

@Component({
  selector: 'app-heroeslist',
  standalone: false,
  templateUrl: './heroeslist.component.html',
  styleUrl: './heroeslist.component.css'
})
export class HeroeslistComponent {

imageWidth=20;
imageMargin=3;
muestraImage=true;
listFilter:string='True';

showImage():void{
  this.muestraImage=!this.muestraImage
}

heroes:IHeroes[]=[
  {
     image:"https://dragonball-api.com/transformaciones/Broly_DBS_Base.webp",
     nombre:"Broly",
     description: "final flash",
     rece:"saiyan",
     ki: "7162671627"
}, {
     image:"https://dragonball-api.com/characters/15Dokkan.webp",
     nombre:"15",
     description: "final flash",
     rece:"saiyan",
     ki: "7162671627"
},
{
image:"https://dragonball-api.com/characters/Lunch_traje_de_sirvienta_en_el_manga.webp",
     nombre:"milk",
     description: "final flash",
     rece:"Dios",
     ki: "7162671627"
},
]
}
