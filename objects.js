
// creating and displaying a new object -- practice the for loop more. This was confusing still.
let address = {
    street: 'mystreet',
    city: 'Happy City',
    zipcode: '123456'
};

function showAddress(address) {
  for (let key in address) 
      console.log(key, address[key])
};

showAddress(address);

// factory funciton --- very simplified
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
};

let address2 = createAddress('newstreet', 'Boston', '78696');
console.log(address2);

// constructor function --- uses this keyword -- question, why would I use this over the factory? 
function Address(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
};

let address3 = new Address('anotherstreet', 'Toronto', '89887');
console.log(address3);

// create 2 new objects usig the constructor 
let myAddress = new Address('evergreen', 'Calgary', 'ty25e9');
let jonAddress = new Address('evergreen', 'Calgary', 'ty25e9');

// check if same and equal
function areSame(myAddress, jonAddress) {
    return myAddress === jonAddress;
};

function areEqual(myAddress, jonAddress) {
    return myAddress.street === jonAddress.street &&
    myAddress.city === jonAddress.ctiy && 
    myAddress.zipCode === jonAddress.zipCode;
};

console.log(areSame(myAddress, jonAddress)); 
console.log(areEqual(myAddress, jonAddress)); // this is logging false.. it should be true. What have i done wrong?

// blog post object
let blogPost = {
    title: 'super title',
    body: 'words words words words!',
    author: 'Max Power',
    views: 1234,
    comments: [
        {author: 'Minnie Mouse', body: 'Nice work!'},
        {author: 'Mickey Mouse', body: 'Bad work!'},
    ],
    isLive: true,
};
console.log(blogPost);

// make resuable blog post constructor function -- use as few params as possible
function NewBlog(title, body, author) {
        this.title = title;  // note: this and semicolon, not commas
        this.body = body;
        this.author = author;
        this.views = 0 ;// initialize post at 0 views 
        this.commments = []; // empty array allows to add different params as needed
        this.isLive = false // start at false
};
console.log(NewBlog);

let myBlog = new NewBlog('Awesome Title', 'Words words words words', 'Paul Blart Mall Cop'); // new keyword is small 'n'
console.log(myBlog);

// price range objects -- array objects  
let priceRanges = [
    { label: '$', tooltip: 'Cheap', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', tooltip: 'Mid', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
];

let restaurants = [
    {averagePerson: 5}
]
// Note: what? No idea what was done here. I pretty much copied along here. Do this again till you understand what
// his point was.