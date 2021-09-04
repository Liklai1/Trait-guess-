Webcam.set({
    width: 350, 
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera= document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="' + data_uri+ '"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/b7xype8XV/model.json', modelLoaded);
function modelLoaded(){ 
    console.log('model Loaded');
}
function check(){
    img= document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{ 
        console.log(results);
        document.getElementById("result_trait_name").innerHTML=results[0].label;
        if(results[0].label=="Great intuition"){
            document.getElementById("update_trait");
        }
        if(results[0].label=="Kind looking"){
            document.getElementById("update_trait");
        }
        if(results[0].label=="Intelligent"){
            document.getElementById("update_trait");
        }
        if(results[0].label=="Strong mindset"){
            document.getElementById("update_trait");
        }
    }
}