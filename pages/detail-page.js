//detail-page.js
/*
A user can leave their name and write a comment, when they click submit, 
their name and comment will be displayed on the page.
--to-do list:
- X Create input field for name, one for comment, and a submit-button.
- X Add an event (name and comment) listener/handler to the button.
- X Gather data of input fields.
- X Create elements to display the data.
- X Adjust the elements so they display the data.
- Display the adjusted elements on the page.
- Empty the input fields after submitting so the next user can type new text.
*/

function submitComment() {
    const inputField = document.getElementById('name');
    const name = inputField.value;
    console.log(name);
    const msgField =document.getElementById("msg");
    const msg = msgField.value;
    console.log(msg);

    //Here we create elements for the comments
    const comment = document.createElement("section");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    
    
    //Adjust the elements.
    h3.innerHTML = `${name} said:`;
    p.innerHTML = `${msg}`;
    comment.classList.add("comment");
    comment.appendChild(h3);
    comment.appendChild(p);
    console.log(comment);

    //This will display the newly added elements (and their input) on the page
    const commentSection = document.getElementById("comments");
    console.log(commentSection);
    commentSection.appendChild(comment);

    //This resets the fields
    inputField.value = null;
    msgField.value = null;


}

