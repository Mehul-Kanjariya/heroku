import {navbar} from './component/navbar.js'
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

//a7511c282853e66801e8e3d2bd5614d8

let create_btn = document.getElementById('create_btn')

create_btn.onclick = function () {
    createPost();
};

let inp_image = document.getElementById('image');

inp_image.onchange = () => {
    handleImage()
}

let image_url;

const handleImage = async () => {
    let img = document.getElementById('image');
    // access the image data
    let actual_img = img.files[0];
    console.log(actual_img);

    let form = new FormData()

    form.append('image',actual_img);

    let res = await fetch(`https://api.imgbb.com/1/upload?key=9a0087fec906d3331a3ae743b583860e`, {

        method: 'POST',
        body:form,
    });

    let data = await res.json();
    console.log(data)
    
    image_url = data.data.display_url;
}

const createPost = async () =>{

    let id = document.getElementById('id').value;
    let caption = document.getElementById('caption').value;

    let sent_this_data = {
        id,
        caption,
        image_url,
    };

    // above data is accessible to whom? => local
    // is it suppose to be accessible to everyone? => yes
    // where above data should go? => server : ( local server )
    // json server package

    let res = await fetch(`http://localhost:3000/posts`, {
        method: 'POST',
        body: JSON.stringify(sent_this_data),

        headers: {
            'Content-Type': 'application/json',
        },
    });
    let data = await res.json();
    console.log(data);
}