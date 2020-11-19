let booksArray = [
    {
        name: "book",
        year: 1958
    },
    {
        name: "book 1",
        year: 1989
    },    
    {
        name: "book 2",
        year: 2001
    },
    {
        name: "book 3",
        year: 1990
    },
    {
        name: "book 4",
        year: 1976
    },
    {
        name: "book 5",
        year: 1991
    },
    {
        name: "book 6",
        year: 2002
    },    
    {
        name: "book 7",
        year: 2019
    }
]

booksArray.sort((a,b) => a.year - b.year);

const filteredBooks = [];


const myInput = document.querySelector("#myInput");
let myDiv = document.querySelector("#filteredBooks");


function handleKeyUp(e){
    const searchTerm = e.target.value;
    myDiv.innerHTML = "";

    for(i=0;i<booksArray.length;i++){
        let regSearchTerm = new RegExp(searchTerm,'g');

        if(regSearchTerm.test(booksArray[i].name)){
            filteredBooks.push(booksArray[i]);
            myDiv.innerHTML += `<div>${filteredBooks[i].name}</div>`
        }

    }

}

