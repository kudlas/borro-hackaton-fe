export class ProductsService {

    static async getProducts() {
        return await fetch('https://jsonplaceholder.typicode.com/posts').then( response => (
            (response.status === 200) ? response.json() : Promise.reject('timeout')
        ) );
    }

}