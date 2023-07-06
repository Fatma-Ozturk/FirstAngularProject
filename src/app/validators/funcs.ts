import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export function capitalLetterValidation(control: AbstractControl): ValidationErrors | null {

	const value = control.value;

	const ascii: string[] = [];

	for (let i = 65; i <= 90; i++) {
		ascii.push(String.fromCharCode(i));
	}
	if (ascii.indexOf(value[0]) == -1){
		return {capitalLetter: true};
	}
	return null;
}

export function capitalLetterPValidation(count: number): ValidatorFn { return (control: AbstractControl): ValidationErrors | null => {
	
		const value = control.value;
		
		const ascii: string[] = [];
		
		for (let i = 65; i <= 90; i++) {
			ascii.push(String.fromCharCode(i));
		}

		let state: boolean = true;
		for (let c = 0; c < count; c++) {
			if (ascii.indexOf(value[c]) == -1){
				state = false;
				break ;
			}
		}
		if (!state)
			return { capitalLetterP : true }
		return null;
	};
}

export function matchPassword(): ValidatorFn { return (control: AbstractControl): ValidationErrors | null => {

	const password = control.get('password')?.value;
	const passwordConfirm = control.get('passwordConfirm')?.value;

	if (password != passwordConfirm)
		return { noMatch : true}
	return null;
};}