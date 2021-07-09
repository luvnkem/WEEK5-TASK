const meters = document.getElementById('meters');
const inches = document.getElementById('inches');
const feet = document.getElementById('feet');
const yards = document.getElementById('yards');

meters.addEventListener('input', unitConverter);
inches.addEventListener('input', unitConverted);
feet.addEventListener('input', unitConvert);
yards.addEventListener('input', unitConverters);


function unitConverter(e){
    let unitC = e.target.value;
    document.getElementById('inches').value = unitC * 39.37;
    document.getElementById('feet').value = unitC * 3.281;
    document.getElementById('yards').value = unitC * 1.094;
 }