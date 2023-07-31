// פונקציה שמציגה את הפרטים שהוזנו בצור קשר
function displayContactDetails() {
    const contactDetails = JSON.parse(localStorage.getItem('contactDetails'));

    
    const contactInfoList = document.getElementById('contactInfo');

    
    const nameListItem = document.createElement('li');
    nameListItem.textContent = `שם: ${contactDetails.name}`;
    contactInfoList.appendChild(nameListItem);

    const emailListItem = document.createElement('li');
    emailListItem.textContent = `אימייל: ${contactDetails.email}`;
    contactInfoList.appendChild(emailListItem);

    const phoneListItem = document.createElement('li');
    phoneListItem.textContent = `טלפון: ${contactDetails.phone}`;
    contactInfoList.appendChild(phoneListItem);

    const messageListItem = document.createElement('li');
    messageListItem.textContent = `הודעה: ${contactDetails.message}`;
    contactInfoList.appendChild(messageListItem);
}

// פונקציה ששומרת את הפרטים שהוזנו
function saveContactDetails(event) {
    event.preventDefault(); 

    // הצגת הפרטים שהוזנו בטופס
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const contactDetails = {
        name,
        email,
        phone,
        message,
    };

    localStorage.setItem('contactDetails', JSON.stringify(contactDetails));

    // ניתוב לדף תודה
    window.location.href = '../thank you/thankyou.html';
}


document.addEventListener('DOMContentLoaded', displayContactDetails);
