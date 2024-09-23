document.getElementById('quata-injured-donate').addEventListener('click',function(event){
    event.preventDefault()
    const amount = getInputFieldValueById('amount-donate-injured');
    // console.log(amount);

    const balance =getTextField('your-balance');
    // console.log(balance)
    // validate
    if(amount > balance){
        alert('you do not have sufficient balance to transfer');
        return;
    }else if(isNaN(amount) || amount < 0){
        alert('failed to donate money for the injured in Quota Movement');
        return;
    }else{
        const noakhaliDonation = getTextField('total-donation-injured');
        // console.log(feniDonation)
            
            // added to 
        const newBalanceNoakhali =  noakhaliDonation + amount ;
        document.getElementById('total-donation-injured').innerText=newBalanceNoakhali;


            //deducted from main balance
            const newBalance =  balance - amount ;
            document.getElementById('your-balance').innerText=newBalance;
            onclick=my_modal_5.showModal()

            //added to transaction history
       
        const historyItem = document.createElement('div');
        historyItem.className = 'bg-white p-8 border-2 rounded-xl  container mx-auto shadow-xl'

        historyItem.innerHTML = `
              <p class='text-xl font-bold '> <span class='text-2xl  text-red-800'>${amount}</span> Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
              <p class='font-semibold  py-2'>Your new Balance is <span class='font-bold text-lg text-red-800'> ${newBalance}</span> Taka</p>
              <p class='text-sm opacity-80'> Date : ${new Date().toLocaleString('en-GB', { timeZoneName: 'long' })}</p>
        `;
        const historyContainer = document.getElementById('history-container');
        historyContainer.insertBefore(historyItem,historyContainer.firstChild)
        
    }


})