
function showSectionById(id){

    
    
    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('history-display').classList.add('hidden');



    document.getElementById(id).classList.remove('hidden');
}



function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value ;
    return parseFloat(inputValue);
 }
 


function getTextField (id){
    const textValue = document.getElementById(id).innerText;
    return parseFloat(textValue);

}