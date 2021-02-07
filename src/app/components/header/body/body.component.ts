import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    mostrar = true;
frase: any = {
    mensaje: 'Arivederchi chao chao si señor (sapito tutututu)',
    autor: 'Vannesa Jessi Ana'
};

personajes: string[] = ['Lilia', 'Mimi', 'Mane'];
}