import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'Você quer se juntar ao time da Convem?';
	decision: string = '';
	message: string = '';

	constructor(private http: HttpClient) {}

	sendResponse() {
		this.http
			.post<any>('http://localhost:3000/api/decision', {
				decision: this.decision,
			})
			.subscribe(
				(response) => {
					if (response === 'Sucesso') {
						this.message =
							'Você está mais próximo de se juntar ao time!';
					} else {
						this.message = 'Erro';
					}
				},
				(error) => {
					console.error(error);
					this.message = 'Erro';
				}
			);
	}
}
