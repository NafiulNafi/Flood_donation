//section
function showSectionById(id){

    
    //hide all
    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('history-display').classList.add('hidden');


    //show the section with the provided id
    document.getElementById(id).classList.remove('hidden');
}


//input field
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value ;
    return parseFloat(inputValue);
 }
 

 // text field 
function getTextField (id){
    const textValue = document.getElementById(id).innerText;
    return parseFloat(textValue);

}