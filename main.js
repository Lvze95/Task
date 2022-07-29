// Fade out loading screen and reset inputs values
const fadeOutLogo = () => {
    setTimeout(() => {
        resetForm();
        const loaderWrapperElement = document.getElementsByClassName('loader-wrapper')[0];
        if(loaderWrapperElement) {
            loaderWrapperElement.style.display = 'none';
        }
    }, 1000);
}
const firebaseApp = firebase.initializeApp({ 
   apiKey: "AIzaSyCTcNFufuNeWGJmRxiEj0aqgu4BRubYBRY",
  authDomain: "autodb-1337.firebaseapp.com",
  databaseURL: "https://autodb-1337-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "autodb-1337",
  storageBucket: "autodb-1337.appspot.com",
  messagingSenderId: "147721423862",
  appId: "1:147721423862:web:bdee353c0b0851703015d7"
 });

// Reference data collection
const dataRef = firebase.database().ref('autoDB');

// Listener for submit form
document.getElementById("contactForm").addEventListener('submit', submitForm);

// Function shortcut to get data from values
function getInputVal(id){
    return document.getElementById(id).value;
}
// Function parseInt shortcut to get data from values
function getParseIntVal(id){
    return parseInt(document.getElementById(id).value);
}
// Submit Form
function submitForm(e){
    e.preventDefault();
    // Get Values
    let brand = getInputVal('brand');
    let year = getParseIntVal('year');
    let cc = getParseIntVal('cc');
    let length = getParseIntVal('length');
    let width = getParseIntVal('width');
    let weight = getParseIntVal('weight');
    // Save Data
    saveData(brand,year,cc,length,width,weight);

    // Clear from inputs
    resetForm();
}
function resetForm() {
    document.getElementById('contactForm').reset();
}

// Save data to FB
function saveData(brand,year,cc,length,width,weight){
    let newDataRef = dataRef.push();

    newDataRef.set({
        brand: brand,
        year: year,
        cc: cc,
        length: length,
        width: width,
        weight: weight
    }).then(() => {
        const alertSucces = document.querySelector('.alert-success');
        alertSucces.style.display = 'block';
        setTimeout(function(){
            alertSucces.style.display = 'none';
        },2000);
    }).catch((err)=>{
        const alertErr = document.querySelector('.alert-danger');
        alertErr.style.display = 'block';
        setTimeout(function(){
            alertErr.style.display = 'none';
        },3000);
    });
}
// Get data from FB
dataRef.get().then((snapshot) => {
    if (snapshot.exists()) {      
        const lastCar = (Object.entries(snapshot.val())[Object.entries(snapshot.val()).length-1])[1];
        for (const [key, value] of Object.entries(lastCar)) {
            document.querySelector(`#${key}`).value = value;
        }
    }
});
// Update data from FB