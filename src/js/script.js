const sunIcon = document.querySelector(".icn-sun")
const moonIcon = document.querySelector(".icn-moon")

const userTheme = localStorage.getItem("theme")
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

const iconToogle = () => {
    sunIcon.classList.toggle("display-none")
    moonIcon.classList.toggle("display-none")
}

const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark")
        moonIcon.classList.add("display-none")
        return
    }
    sunIcon.classList.add("display-none")
}

const themeSwitch =()=>{
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
        iconToogle()
        return
    }
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
    iconToogle()
}

sunIcon.addEventListener("click", ()=>{
    themeSwitch()
})
moonIcon.addEventListener("click", ()=>{
    themeSwitch()
})

themeCheck()