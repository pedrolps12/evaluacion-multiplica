// Dado el siguiente array, retornar solo los nombres de las personas que donan organos y que no sean solteros

var peoples = [
    {
        name : 'Pepe',
        donacion: true,
        esposas: ['Rosangela', 'Mayte']
    },
    {
        name : 'Juan',
        donacion: false,
        esposas: ['Yaharia']
    },
    {
        name : 'Lalo',
        donacion: true,
        esposas: []
    }
]
const getpeoples = (peoples) => peoples.filter(people => people.donacion && people.esposas.length > 0).map((people) => people.name);
