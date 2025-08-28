

const callHistory = []

// heart toggle

const hearts = document.querySelectorAll(".heart")
for (let i = 0; i<hearts.length; i++){
    hearts[i].addEventListener("click", function(){
      const totalHeart = parseInt(document.getElementById("total-heart").innerText)
    let currentHeart = totalHeart
    const heartClick = 1
    let newTotalHeart = heartClick + currentHeart
    document.getElementById("total-heart").innerText = newTotalHeart  
    })
}

// calling section
const callButtons = document.querySelectorAll(".call-btn")
for(let i=0; i<callButtons.length; i++){
    callButtons[i].addEventListener("click",function(){
        const coinBalance = parseInt(document.getElementById("coins").innerText)
        if(coinBalance >= 20){
            const callRate = 20
            let newBalance = coinBalance - callRate
            document.getElementById("coins").innerText = newBalance
            const card = this.closest(".card");
            const serviceName = card.querySelector(".service-name").innerText;
            const serviceNumber = card.querySelector(".service-number").innerText;
            alert("Calling " + serviceName + " " + serviceNumber);
        }
        else {
            alert("Not Enough Balance")
        }
    
    })
}

// call history section

const callBtns = document.querySelectorAll(".call-btn")
for(let i=0; i<callBtns.length; i++){
    callBtns[i].addEventListener("click",function(){
        const card = this.closest(".card");
        const serviceName = card.querySelector(".service-name").innerText;
        const serviceNumber = card.querySelector(".service-number").innerText;
        
        const callData = {
        name: serviceName,
        number: serviceNumber,
        time:  new Date().toLocaleTimeString()
    };

    callHistory.push(callData)
    const callHistoryParent = document.getElementById("call-history-parent")
    callHistoryParent.innerHTML = ""

    for(const data of callHistory){
        const div = document.createElement("div")
        div.innerHTML = `

                
                <div class="bg-[#41ff6b1a] flex justify-between items-center mt-4 p-1"> 
                    <div>
                        <h2 class="font-semibold">${data.name}</h2>
                        <p>${data.number}</p>
                    </div>
                    <div>${data.time}</div>
                </div>
                
        `
        callHistoryParent.appendChild(div)
    }
    
    })
}

// call history clear button
document.getElementById("clear-btn").addEventListener("click", function(){
    const callHistoryClear = document.getElementById("call-history-parent")
    callHistoryClear.innerHTML = ''
    callHistoryClear.length = 0
})