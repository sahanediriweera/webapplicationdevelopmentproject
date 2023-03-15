
const images = [


require('./13hours.jpg'),
require('./antman.jpg'),
require('./avatar.jpg'),
require('./avengers.jpg'),
require('./babylon.jpg'),
require('./batman.jpg'),
require('./blackhawckdown.jpg'),
require('./enola.jpg'),
require('./glassonion.jpg'),
require('./hod.jpeg'),
require('./impossible.jpg'),
require('./interstella.jpg'),
require('./johnwick.jpg'),
require( './justiceleague.jpg'),
require('./knight.jpg'),
require( './loki.jpg'),
require( './oppenheimer.jpg'),
require('./persia.jpg'),
require('./power.jpg'),
require('./sherlock.jpg'),
require('./spider.jpg'),
require('./theintern.jpg'),
require('./thor.jpg'),
require('./ww.png')]

function getImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

export default getImage;

