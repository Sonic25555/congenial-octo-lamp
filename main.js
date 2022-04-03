var dog=0;
var cat=0;
var bird=0;
function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4Y3_KOSFX/model.json',modelReady);}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
     random_number_r = Math.floor (Math.random() * 255) + 1;
     random_number_g = Math.floor (Math.random() * 255) + 1;
     random_number_b = Math.floor (Math.random() * 255) + 1;

     document.getElementById("result_label").innerHTML = 'I can hear - '+
     results[0].label;
     document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
     (results[0].confidence*100).toFixed(2)+" %";
     document.getElementById("result_label").style.color = "rgb("
     + random_number_r+","+random_number_g+","+random_number_b+")";
     document.getElementById("result_confidence").style.color = "rgb("
     +random_number_r+","+random_number_g+","+random_number_b+")";
        img = document.getElementById('dog');
        img1 = document.getElementById('cat');
        img2 = document.getElementById('bird')
        img3 = document.getElementById('bg');
   
        if(results[0].label == "Dog") {
            img.src = 'dog.png';
            img1.src = 'BLANK_ICON.png';
            img2.src = 'BLANK_ICON.png';
            img3.src = 'BLANK_ICON.png';
        } else if(results[0].label == "Cat") {
            img.src = 'BLANK_ICON.png';
            img1.src = 'cat.png';
            img2.src = 'BLANK_ICON.png';
            img3.src = 'BLANK_ICON.png';
        } else if(results[0].label == "Bird") {
            img.src = 'BLANK_ICON.png';
            img1.src = 'BLANK_ICON.png';
            img2.src = 'download.png';
            img3.src = 'BLANK_ICON.png';
        } else{
            img.src = 'BLANK_ICON.png';
            img1.src = 'BLANK_ICON.png';
            img2.src = 'BLANK_ICON.png';
            img3.src = 'bg.png';
        }
    } 
    }

