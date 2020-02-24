import { Component } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  notas =[];
  ngOnInit():void{
    $('.collapsible').collapsible();
  }
  agruegarnota(header: HTMLInputElement, body:HTMLInputElement){
    const titulo = header.value;
    const cuerpo = body.value;

    if (titulo ==='') {
      alert('Ingrese un titulo para nota');
    } else if(cuerpo ===''){
      alert('Ingrese un cuerpo para nota');
    } else {
      const nota = {
        eltitulo: titulo,
        elcuerpo: cuerpo
      };
      this.notas.push(nota);
      header.value ='';
      body.value ='';
    }
  }
}
