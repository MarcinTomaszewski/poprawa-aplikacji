/*metoda createElement tworzy obiekt ReactElement. Metoda przyjmuje 3 parametry(nazwę klasy, propsy, dzieci elementu).
1. nazwę klasy, na podstawie której ma zostać stworzony element,
2. propsy, czyli właściwości danego elementu (wejścia),
3. dzieci elementu, czyli to, co ma się znaleźć wewnątrz. Może to być zarówno tekst, jak i kolejny ReactElement.
*/
//var element1 = React.createElement('div', {}, 'Hello world'); 

/*metoda render() umieszcza w odpowiednim miejscu DOM element, który został stworzony. Przyjmuje 2 argumenty.
1. ReactElement (np. ten który stworzyliśmy linijkę wyżej 'element'),
2. węzeł drzewa DOM, do którego element ma się "wpiąć".
*/
//ReactDOM.render(element1, document.getElementById('app'));       

//console.log(element);

//tablica z danymi o filmach
var movies = [
    {
        id: 1,
        title: 'Harry Potter', 
        desc: 'film o czarodzieju',
        year: 2001,
        photo: 'harry-potter.jpg'       //mam problem z wstawieniem zdjącia
    }, 
    {
        id: 2,
        title: 'Król Lew', 
        desc: 'film o królu sawanny',
        year: 1994,
        photo: 'król-lew.jpg'
    },
    {   id: 3,
        title: 'Skazani na Shawshank',
        desc: 'film o niesłusznie skazanym bankierze',
        year: 1994,
        photo: 'shawshank.jpg'
    },
    {
        id: 4,
        title: 'Nietykalni',
        desc: 'Sparaliżowany milioner zatrudnia do opieki młodego chłopaka z przedmieścia',
        year: 2011,
        photo: 'nietykalni.jpg'
    }, 
    {
        id: 5,
        title: 'Zielona mila',
        desc: 'Emerytowany strażnik więzienny opowiada przyjaciółce o niezwykłym mężczyźnie',
        year: 1999,
        photo: 'zielona-mila.jpg'
    }, 
    {
        id: 6,
        title: 'Ojciec chrzestny',
        desc: 'Opowieść o nowojorskiej rodzinie mafijnej',
        year: 1972,
        photo: 'ojciec-chrzesny.jpg'
    }, 
];

//metoda map() przyjmuje jako parametr funkcje, która przechodzi przez każdy element tablicy, który następnie jest mapowany do postaci ReactElementu korzystającego z informacji o filmie (movie.title i movie.desc)
var moviesElements = movies.map(function(movie){
    return React.createElement('li', {key: movie.id}, 
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('p', {}, 'Rok produkcji: ' + movie.year),
        React.createElement('p', {}, movie.photo)
    );
});

//odpowiednie umieszczenie elementów w liście
var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );
    
ReactDOM.render(element, document.getElementById('app'));

/*var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {},
            React.createElement('li', {},
                React.createElement('h2', {}, 'Harry Potter'),
                React.createElement('p', {}, 'Film o czarodzieju')
            ),
            React.createElement('li', {},
                React.createElement('h2', {}, 'Król Lew'),
                React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
            )
        )
    );*/

