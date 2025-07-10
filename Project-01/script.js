let count = 0;



// selecting element from html body
const countDisplay = document.getElementById("count");
const decreaseBtn = document.getElementById("decreases");
const increasesBtn = document.getElementById("increases");
const resetBtn = document.getElementById("reset");

// creating ui updating function

function updateCount(){
    countDisplay.textContent = count;
    localStorage.setItem("counter", count);// storing in local storage
}

// adding eventListeners for adding,subtracting

increasesBtn.addEventListener("click", () =>{
    count = count + 2.5;
    updateCount();
})
decreaseBtn.addEventListener("click", () =>{
    count = count - 2.5;
    updateCount();
})
resetBtn.addEventListener("click", () =>{
    count = 0;
    updateCount();
})

// load saved count in local storage

count = localStorage.getItem("counter")?parseInt(localStorage.getItem("counter")):0;updateCount();