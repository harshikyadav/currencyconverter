const img_flag_from_ele=document.querySelector("#img_flag_from");
const url="https://latest.currency-api.pages.dev/v1/currencies/";

const dropdowns=document.querySelector("#fromselect");
const dropdownsto=document.querySelector("#toselect");
console.log(dropdowns.value);
for(let code in countryList){
    let option=document.createElement('option');
    let option2=document.createElement('option');
    option.value=code;
    option2.value=code;
    option.innerText=code;
    option2.innerText=code;
    dropdowns.append(option);
    dropdownsto.append(option2);
}
const message=document.querySelector('#mmm');
const form=document.querySelector('form');
const amount=document.querySelector('#amount');
const convertessage=document.querySelector('#c');
function submit_handler(evt){
    evt.preventDefault();
    const select_data_from=dropdowns.value.toLowerCase();
    const select_data_to=dropdownsto.value.toLowerCase();
    console.log(select_data_to);
    const finalurl=`${url}${select_data_from}.json`;
    console.log(finalurl);
    async function fetchapi(){
        const promisefirst=await fetch(finalurl);
        const jsoncovert=await promisefirst.json();

        console.log(jsoncovert[select_data_from][select_data_to]);
        message.innerText=`1${select_data_from.toUpperCase()}=${jsoncovert[select_data_from][select_data_to]}${select_data_to.toUpperCase()}`;
        
        const amount_in_number=Number(amount.value);
        const amount_convert=jsoncovert[select_data_from][select_data_to];

        
        convertessage.innerText=`${amount_in_number*amount_convert}`;
        
    }
    fetchapi();
}
form.addEventListener('submit',submit_handler);
const img_flag_to=document.querySelector('#img_flag_to');
function handler(evt){
    const data=evt.target.value;
   
    img_flag_from_ele.src=`https://flagsapi.com/${countryList[data]}/flat/64.png`;
}
dropdowns.addEventListener('click',handler);
function handlerto(evt){
    const data=evt.target.value;
   
    img_flag_to.src=`https://flagsapi.com/${countryList[data]}/flat/64.png`;
}
dropdownsto.addEventListener('click',handlerto);