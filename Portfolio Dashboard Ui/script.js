document.addEventListener("DOMContentLoaded", () => {
    let modeSwitch = document.querySelector(".mode-switch");

    modeSwitch.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark")
    })

    let listView = document.querySelector(".list-view")
    let gridView = document.querySelector(".grid-view")
    let projectsList = document.querySelector(".project-boxes")

    listView.addEventListener("click", () => {
        gridView.classList.remove("active")
        listView.classList.add("active")
        projectsList.classList.remove("jsGridView")
        projectsList.classList.add("jsListView")
    })
    gridView.addEventListener("click", () => {
        gridView.classList.add("active")
        listView.classList.remove("active")
        projectsList.classList.add("jsGridView")
        projectsList.classList.remove("jsListView")
    })
    document.querySelector(".messages-btn").addEventListener("click", () => {
        document.querySelector(".messages-section").classList.add("show")
    })
    document.querySelector(".messages-close").addEventListener("click", () => {
        document.querySelector(".messages-section").classList.remove("show")
    })
})