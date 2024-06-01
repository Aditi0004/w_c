function getWordCount(str) {
    let diff=str.trim().split(/\s+/);
    console.log(diff);
    if(diff==''){
        return 0;
    }
    return diff.length;
}
function counter(str){
    var alphabets=0;
    var numbers=0;
    var totalenteries=0;
    for(var i=0;i<str.length;i++){
        if(str[i]!=' ' && str[i]!='\n'){
            totalenteries++;
        }
        if((str[i]>='a'&&str[i]<='z') || (str[i]>='A' && str[i]<='Z')){
            alphabets++;
        }
        else if(str[i]>='0' && str[i]<='9'){
            numbers++;
        }
    }
    document.getElementById("enteries").value = totalenteries;
    document.getElementById("numbers").value = numbers;
    document.getElementById("alphabets").value = alphabets;
}
function wordCounter()
{
    let inputTxt = document.getElementById("inputBox");    
    let words = getWordCount(inputTxt.value);
    document.getElementById("words").value = words;
    counter(inputTxt.value);
}
