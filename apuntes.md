Typescript
- npm install -g typescript
- tsc -v para ver la vesrión intalada
- tsc index.ts para "convertirlo" en JS
- tsc *.ts para hacerlo con todos los .ts
- rsc --w para dejar en watching y que haga los cambios en el JS cada vez que se guarda


Tipos en TypeScript que no están en JavaScript:
Tuple: Array con diferentes tipos [number, string] = [22, 'Ana']
Enum:
    import { LoyaltyUser } from './enums'
    export enum LoyaltyUser {goldUser = 'goldUser'}
Any: para poder poner cualquier parámetro
Union: function add(firstValue : (number | string), secondValue: (number | string))
    Le dices qué tipo de parámetro es: número o string
Literal:
    type Price = 25 | 30 | 45
    const property : {
        price: Price;
    }
    O también directamente:
    const property : {
        price: 25 | 30 | 45;
    }
Void:


INTERFACE:
interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}

const reviews: Review[] = {
    name: 'Sheia',
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: '01-04-2021'
}