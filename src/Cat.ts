export enum Categories {
    v = 'Vörös',
    fek = 'Fekete',
    feh = 'Fehér',
    c = 'Cirmos',
    sz = 'Szürke',
    e = 'Egyéb'
}

export default class Cat {
    constructor(public name: string, public category: Categories) {}
}