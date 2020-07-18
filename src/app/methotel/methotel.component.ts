import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Soba } from '../novesobe/novesobe.component';


@Component({
  selector: 'methotel',
  templateUrl: './methotel.component.html',
  styleUrls: ['./methotel.component.styl']
})
export class MethotelComponent {
  
  

  ime = '';
  cena:number;

  sobe = [
    {ime:'Soba120', cena:100 },
    { ime:'Soba121',cena:90  },
    {ime:'Soba122',cena:110  },
    { ime:'Soba122',cena:80  },
    { ime:'Soba123',cena:75  }
    ]

add(i:string,c:number){
  
  var novaSoba = { ime:i,cena:c} 
  console.log(novaSoba)
   this.sobe.push(novaSoba)

}

delete(ime){
  let index = this.sobe.findIndex(d => d.ime === ime); 
  this.sobe.splice(index, 1);
}

edit(ime){

  let index = this.sobe.findIndex(d => d.ime === ime); 

  this.ime = this.sobe[index].ime
  this.cena = this.sobe[index].cena

  this.sobe.splice(index, 1);

  document.getElementById("cenaSobe").focus();

}

  randomize(){
    this.sobe.sort((d1, d2) => {
      if (d1.cena > d2.cena) return 1;
      if (d1.cena < d2.cena) return -1;
      return 0;
    });
  }

  dodaj(event:Soba){
    console.log(event.cena)
    console.log(event.ime)
    if(event.cena !=null && event.ime != "" )
    this.sobe.push(event)
  }

}
