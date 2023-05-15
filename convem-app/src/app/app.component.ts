import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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
				(error: HttpErrorResponse) => {
					if (error.error instanceof ErrorEvent) {
						// Erro do lado do cliente
						console.error('Ocorreu um erro:', error.error.message);
					} else {
						// Erro do lado do servidor
						console.error(
							`Código do erro: ${error.status}, ` +
								`mensagem: ${error.error}`
						);
					}
					this.mensagem = 'Erro';
				}
			);
	}
}
