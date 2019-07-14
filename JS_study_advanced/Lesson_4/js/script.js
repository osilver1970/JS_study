let textArea = document.querySelector('#myTextArea');

textArea.value = new String(`Astonished, Krage replied, 
"Smart is as smart does, mister. Let him go while you're healthy."

Raven smiled for the first time in Shed's recollection. 
"That wasn't smart." 
There was an audible pop. Red screamed. 
"Count!" Krage snapped. 
Count hurled Shed aside. 
He was twice Red's size, quick, strong as a mountain, and barely as smart. Nobody survived Count. 
A wicked nine-inch dagger appeared in Raven's hand. Count stopped so violently his feet tangled. 
He fell forward, rolling off the edge of Raven's table. 
"Oh, shit," Shed groaned. 
Somebody was going to get killed. Krage wouldn't put up with this. It would be bad for business. 
But as Count rose, Krage said, "Count, help Red." 
His tone was conversational.
Count obediently turned to Red, who had dragged himself away to nurse his wrist. 
"Maybe we had a little misunderstanding here," Krage said. "I'll put it plain, Shed. You've got one week to pay me. The big and the nut both." 

"But... ."
"No buts, Shed. That's according to terms. Kill somebody. Rob somebody. Sell this dump. But get the money." 
The or-elses did not have to be explained.`); // Делаю без сервера

let textArValue = textArea.value;

document.querySelector('#doubleToSingle').addEventListener('click', (e) => {
    textArValue = textArea.value;
    textArea.value = changeD_S(textArValue);
});

document.querySelector('#singleToDoubleQuotes').addEventListener('click', (e) => {
    textArValue = textArea.value;
    textArea.value = changeS_D(textArValue);
});

const changeD_S = function (str) {
    str = str.replace(/"/g, "\'");
    return str;
}

const changeS_D = function (str) {
    str = str.replace(/(\s)'/g, "$1\"");
    str = str.replace(/'(\s)/g, "\"$1");
    return str;
}

document.querySelector('#inputYourFile').addEventListener('click', (e) => {
    console.log(document.getElementById("myFile").files[0]);
    if (document.getElementById("myFile").files[0] === undefined) {
        textArea.value = "Choose your file by 'Выберите файл' button!";
    } else {
        let file = document.getElementById("myFile").files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            let textArea = document.getElementById("myTextArea");
            textArea.value = e.target.result;
        };
        reader.readAsText(file);
    }
});
