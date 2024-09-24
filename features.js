
document.getElementById('donation-btn').addEventListener('click', function(){
    showSectionById('donation-form')
    this.style.backgroundColor='limegreen'
    document.getElementById('history-btn').style.backgroundColor='white'
    
})



document.getElementById('history-btn').addEventListener('click', function(){
    showSectionById('history-display')
 
    this.style.backgroundColor='limegreen'
    document.getElementById('donation-btn').style.backgroundColor='white'
  
})