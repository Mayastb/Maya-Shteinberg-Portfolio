let randomNumber = Math.floor (Math.random() * 8);


function answer(){
  const ball = document.getElementById("userQuestion").value;
  
  switch (randomNumber) {
    case 0:
      console.log('זה ודאי');
      break;
    case 1:
      console.log('כך הוחלט');
      break;
    case 2:
      console.log('התשובה מעורפלת, נסה שנית');
      break;
    case 3:
      console.log('לא ניתן לחזות כעת');
      break;  
    case 4:
      console.log('אל תבנה על זה');
      break;
    case 5:
      console.log('המקורות שלי אומרים "לא"');
      break;
    case 6:
      console.log('התוצאה לא נראית חיובית');
      break;
    case 7:
      console.log('הסימנים מצביעים על "כן"');
      break;
    
}}

