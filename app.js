
const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const yearContainer = document.querySelector('#year')
const spinnerContainer = document.querySelector('#loading')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

yearContainer.textContent = nextYear


const updateTimeDown = () => {
	const currentTime = new Date()
	const difference = newYearTime - currentTime
	const days = Math.floor(difference / 1000 / 60 / 60 / 24)
	const hours = Math.floor(difference / 1000 / 60 / 60) % 24
	const minutes = Math.floor(difference / 1000 / 60) % 60
	const seconds = Math.floor(difference / 1000) % 60

	secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
	minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
	hoursContainer.textContent = hours < 10 ? '0' + hours : hours
	daysContainer.textContent = days < 10 ? '0' + days : days
}

setTimeout(() => {
	spinnerContainer.remove()
	
},1000)

setInterval(() =>{
	
updateTimeDown()
	
},1000)