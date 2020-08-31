import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';

@Component({
	selector: 'app-quiz',
	templateUrl: './quiz.page.html',
	styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

	firstNumber: number;
	secondNumber: number;
	guess: number;

	calculation: string;

	maxVal = 100;

	showGuess: boolean;
	allowGuess: boolean;
	guessText: string;

	allowNewGame: boolean;

	result: number;
	resultIsCorrect: boolean;
	resultClass: string;

	status: string;

	//
	PREFIX = 'QuizPage';
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	//
	constructor() { }

	ngOnInit() {
		console.log('ngOnInit');

		this.initGame();
	}

	initGame() {
		this.firstNumber = Math.floor(Math.random() * this.maxVal) + 1;
		this.secondNumber = Math.floor(Math.random() * this.maxVal) + 1;

		this.calculation = '+';

		this.guess = NaN;
		this.result = NaN;

		this.showGuess = true;
		this.allowGuess = false;

		this.allowNewGame = false;

		this.resultIsCorrect = false;
		this.resultClass = 'missing';

		this.status = ' ';
		this.guessText = 'Zahl eingeben';

		this.handleChange();
	}

	handleNewGame() {
		this.initGame();
	}

	handleChange() {
		this.log('handleChange');

		const guess = Number(this.guess);

		this.allowGuess = !(isNaN(guess) || guess === 0);
		this.guessText = this.allowGuess ? 'Raten' : 'Zahl eingeben';

		this.log('handleChange', 'guess="' + guess + '" ==> allowGuess=' + this.allowGuess);
	}

	handleGuess() {
		const result = this.firstNumber + this.secondNumber;

		this.resultIsCorrect = (this.result === Number(this.guess));
		this.resultClass = this.resultIsCorrect ? 'right' : 'wrong';

		if (this.guess === result) {
			this.status = 'Richtig';
			this.resultClass = 'richtig';

			this.allowNewGame = true;
			this.showGuess = false;
		} else {
			this.status = 'Falsch';
			this.resultClass = 'falsch';

			this.allowNewGame = false;
			this.showGuess = true;
		}

		console.log('button clicked: guess=',
					result, 'resultIsCorrect=', this.resultIsCorrect,
					'allowNewGame=', this.allowNewGame,
					'showGuess=', this.showGuess);

	}
}
