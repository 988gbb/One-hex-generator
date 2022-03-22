const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function() {
  let hexColor = "#"
  for(let i = 0; i < 6; i++){
    hexColor += hex[getRandomNumber()]
  }
  color.textContent = hexColor
  document.body.style.backgroundColor = hexColor
})

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length)
}

document.getElementById("btnCopy").addEventListener("click", copy_hex)

function copy_hex() {
  let copyText = document.getElementById("color")
  let textArea = document.createElement("textarea")
  textArea.value = copyText.textContent
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand("Copy")
  textArea.remove()
  document.getElementById("btnCopy").innerHTML = "Copied!"
}
