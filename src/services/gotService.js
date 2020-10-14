export default class GotService {
   constructor() {
       this._apiBase = 'https://www.anapioficeandfire.com/api';
   }
   
    async  getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
    };

    getAllCharacters() {
        return this.getResource('/characters?page=5&pageSize=10');
    }

    getCharacter(id) {
        return this.getResource(`/characters/${id}`);
    }

    getAllHouses() {
        return this.getResource('/houses?page=5&pageSize=10');
    }

    getHouses(id) {
        return this.getResource(`/houses/${id}`);
    }

    getAllBooks() {
        return this.getResource('/books?page=5&pageSize=5');
    }

    getBook(id) {
        return this.getResource(`/books/${id}`);
    }
   
}

const got = new GotService();

got.getAllCharacters()
    .then(res => {
        res.forEach( item => console.log(item.name))
    });

got.getCharacter(120)
    .then(res => console.log(res));

got.getAllHouses()
    .then(res => {
        res.forEach( item => console.log(item.name))
    });

 got.getHouses(1)
    .then(res => console.log(res));

got.getAllBooks()
    .then(res => {
        res.forEach( item => console.log(item.name))
    });

 got.getBook(1)
    .then(res => console.log(res));

 