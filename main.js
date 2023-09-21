const tommyElement = document.querySelector("#itsme")
tommyElement.addEventListener("click", event => {
    console.log("The click worked!!!!!!!!!!!!!!!!!!?")
})
tommyElement.innerHTML = "There goes the neighborhood"

//rendering names to the beanteam div

const beanteam = document.querySelector(".beanteam")
beanteam.innerHTML = `
<p id="c8--haleigh">Haleigh</p>

<p id="c8--Kari"> Kari</p>

<p id="c8--brianna">Brianna</p>

<p id="c8--elf">Darrin</p>

<p id="c8--chris">Christian</p>

<p id="c8--hotGoblinLeader">Hannah</p>

<button class="button">Click me</button>`


const array = ["monkies", "tacos", "poop", "x"]
const [first, second, third, fourth] = array
console.log(second)

beanteam.addEventListener("click", e => {
    if (event.target.id.startsWith("c8--")){

        const [, name] = e.target.id.split("--")

        if(name === "haleigh"){
            console.log("we clicked haleigh")
        }
        else if(name === "Kari"){
            console.log("We Love Arrays!!")

        }
        else if(name === "elf"){
            console.log("Sup")

        }
    }




//     if(e.target.id === "haleigh")
//     console.log("we clicked haleigh")
// else if(e.target.id === "elf"){
//     console.log("we clicked elf")

// }
})








// const kariElement = document.querySelector("#Kari")
// document.querySelector("#Kari").addEventListener("click", event => {
//     console.log("Hopefully it works!!!!!!!!!!!!!!!!!!?")
// })
// kariElement.innerHTML = "What does the innerHTML tag do?"

// const darrinElement = document.querySelector("#elf")
// darrinElement.innerHTML = "Darrin looks like an elf"
// document.querySelector("#elf").addEventListener("click", event => {
//     console.log("Yeehaw 🤠")
// })

// const briannaElement = document.querySelector("#brianna")
// briannaElement.innerHTML = "Hello!"

// document.querySelector("#brianna").addEventListener("click", event => {
//     console.log("It works!")
// })



// const chrisElement = document.querySelector("#chris")

// chrisElement.addEventListener("click", event => {
// console.log("cool")
    
// })
// chrisElement.innerHTML = "coool"

// const haleighElement = document.querySelector("#haleigh")

// haleighElement.addEventListener("click", event => {
//     console.log ("success!!")
// })
// haleighElement.innerHTML = "hi"





// const goblinLeaderElement = document.querySelector("#hotGoblinLeader")

// goblinLeaderElement.addEventListener("click", event => {
//     console.log("I am the leader of the hot goblins.")
// })

// goblinLeaderElement.innerHTML = "Goblin Leader"