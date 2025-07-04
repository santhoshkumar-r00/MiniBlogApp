function createBlog() {
    var imageValue = document.getElementById("imageURL").value.trim();
    var titleValue = document.getElementById("title").value.trim();
    var descriptionValue = document.getElementById("description").value.trim();


    //using aleart notification
    if (titleValue === '' || descriptionValue === '') {
        alert("ples fill your blog ")
        return;
    }

    //create element

    var article = document.createElement("article")
    article.classList.add("post")

    var img = document.createElement("img")
    img.src = imageValue;
    img.alt = "some error for your image,pleas enter correct URL";

    var title = document.createElement("h2");
    title.textContent = titleValue;

    var description = document.createElement("p");
    description.textContent = descriptionValue;

    var button = document.createElement("button");
    button.textContent = 'delete'
    button.classList.add("delete")

    //append the post or article
    article.appendChild(img);
    article.appendChild(title);
    article.appendChild(description);
    article.appendChild(button);


    //append main container
    var main = document.getElementById("main_container").appendChild(article);

    //clear input field
    document.getElementById("imageURL").value = '';
    document.getElementById("title").value = '';
    document.getElementById("description").value = '';


    //delete button function
    button.addEventListener('click', function () {
        this.parentElement.remove()
    })

}