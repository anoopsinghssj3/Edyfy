import React from 'react'

function ContactDeveloper() {
    return (
        // contact developer page-41
        <div className="contact-developer">
            
    <div class="container">
        <a href="#" class="back-button">&#8592;</a>
        <h2>Contact <br/> Developers</h2>
        
        <label for="phone1">Phone 1</label>
        <input type="text" id="phone1" value="9XXXXXXXXX" readonly/>
        
        <label for="phone2">Phone 2</label>
        <input type="text" id="phone2" value="9XXXXXXXXX" readonly/>
        
        <label for="email">Email us at :</label>
        <input type="text" id="email" value="xyzcompany@gmail.com" readonly/>
    </div>
        </div>
    )
}

export default ContactDeveloper