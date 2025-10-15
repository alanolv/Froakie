import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  
	findAll() {
		return [
			{ id: 1, name: 'Bulbasaur' },
			{ id: 2, name: 'Charmander' },
			{ id: 3, name: 'Squirtle' },
		];
	}
}
