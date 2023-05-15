import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	titulo = 'Você quer se juntar ao time da Convem?';
	resposta: string = '';
	mensagem: string = '';

	constructor(private http: HttpClient) {}

	enviarResposta() {
		this.http
			.post<any>('http://localhost:3000/api/resposta', {
				resposta: this.resposta,
			})
			.subscribe(
				(response) => {
					if (response === 'Sucesso') {
						this.mensagem =
							'Você está mais próximo de se juntar ao time!';
					} else {
						this.mensagem = 'Erro';
					}
				},
				(error) => {
					console.log(error);
				}
			);
	}
}
