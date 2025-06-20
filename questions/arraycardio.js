const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

/// filter names of people which have J in there name
// filter inventeror who are born before 1600
// filter inventors who have A in their names
// get a array of all inventor name only

// find how many inventors are born before 1600 and how may total inventors are there in data 
// same for peoples  J length total peoples





let peopleName = people.filter((name)=>{
return name.toLowerCase().includes("j")
}) 
console.log(peopleName)
console.log(`people with j in their name : ${peopleName.length}`)


let inventeroBornBefore1600 =inventors.filter((inventor)=>{
return inventor.year<1600
})

console.log("born before 1600",inventeroBornBefore1600)
console.log("inventors born before 1600 : ",inventeroBornBefore1600.length)

let inventorsWithAInName = inventors.filter((inventor)=>{
  return inventor.first.toLowerCase().includes("a")
})

console.log(inventorsWithAInName)
console.log("inventors with a in their name",inventorsWithAInName.length)


let namesOfInventors = inventors.map((i)=>{
return i.first.concat(" ",i.last)
})

console.log(namesOfInventors)

let namesOnly = inventorsWithAInName.map((i,idx)=>{
return i.first.concat(" ",i.last)
})
console.log(namesOnly.length , inventors.length)
