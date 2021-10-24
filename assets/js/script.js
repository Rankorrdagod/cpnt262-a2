const travelImages = [
{
    id: 1,
    title: 'New York Skyline',
    description: "Skyline of the beautiful big apple. What a view!",
    width: '480px',
    height: '300px',
    pathURL: 'image-1.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/New_York_City',
    credit: 'Pixabay',
    creditURL: 'https://pixabay.com/photos/city-buildings-architecture-towers-336708/'
},
{
    id: 2,
    title: 'The Canals',
    description: "Look at the sunset over the canals.",
    width: '480px',
    height: '300px',
    pathURL: 'image-2.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Canal',
    credit: 'Pixabay',
    creditURL: 'https://pixabay.com/photos/city-buildings-architecture-towers-336708/'
},
{
    id: 3,
    title: 'Santorini',
    description: "Villas overlooking the sea in Santorini",
    width: '480px',
    height: '300px',
    pathURL: 'image-3.jpg',
    linkURL: 'hhttps://en.wikipedia.org/wiki/Santorini',
    credit: 'Pixabay',
    creditURL: 'https://pixabay.com/photos/city-buildings-architecture-towers-336708/'
},
{
    id: 4,
    title: 'Catacombs',
    description: "It may look creepy but its quite special!",
    width: '480px',
    height: '300px',
    pathURL: 'image-4.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Catacombs',
    credit: 'Pixabay',
    creditURL: 'https://pixabay.com/photos/city-buildings-architecture-towers-336708/'
},
{
    id: 5,
    title: 'Mosque',
    description: "A Mosque used for prayer, prisitine white walls everywhere!",
    width: '480px',
    height: '300px',
    pathURL: 'image-5.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Mosque',
    credit: 'Pixabay',
    creditURL: 'https://pixabay.com/photos/city-buildings-architecture-towers-336708/'
},
{
    id: 6,
    title: 'City Street',
    description: "Twisting corridors in old Italian city!",
    width: '480px',
    height: '300px',
    pathURL: 'image-6.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Venice',
    credit: 'Pixabay',
    creditURL: 'https://pixabay.com/photos/city-buildings-architecture-towers-336708/'
},
{
    id: 7,
    title: 'Big Ben',
    description: "Big Ben looking out over the city.",
    width: '480px',
    height: '300px',
    pathURL: 'image-7.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Big_Ben',
    credit: 'Pixabay',
    creditURL: 'https://pixabay.com/photos/city-buildings-architecture-towers-336708/'
},
{
    id: 8,
    title: 'Parthenon',
    description: "Old Roman architecture is still around today!",
    width: '480px',
    height: '300px',
    pathURL: 'image-8.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Parthenon',
    credit: 'Pixabay',
    creditURL: 'https://pixabay.com/photos/city-buildings-architecture-towers-336708/'
},
{
    id: 9,
    title: 'Chicago',
    description: "The busy streets of Chicago, always moving!",
    width: '1000px',
    height: '600px',
    pathURL: 'image-9.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Chicago',
    credit: 'Pixabay',
    creditURL: 'https://pixabay.com/photos/city-buildings-architecture-towers-336708/'
}
];


let output = '';

travelImages.forEach(function(travel){
    console.log(travel)
    output += `
    <figure>
    <a href="${travel.creditURL}">
    <img src="assets/images/${travel.pathURL}" alt="${travel.title}" width="${travel.width}" height="${travel.height}">
    </a><figcaption>${travel.description}</figcaption>
    </figure>
    `

});
const gallery =  document.querySelector('.gallery');
gallery.innerHTML = output;
