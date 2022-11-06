import {navbar} from './component/navbar.js'
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

const getdata = async () => {
    try{
        let data = await fetch('http://localhost:3000/posts')
        let actual_data = await data.json();
        append(actual_data);
    }catch(error){
        console.log(error);
    }
}
getdata();

const append = (data) => {
    let div = document.getElementById('posts');

    data.forEach((el) => {
        if(el.caption && el.image_url){
            let post_div = document.createElement("div");
            let img =  document.createElement("img");
            img.src = el.image_url;

            let caption = document.createElement("p");
            caption.textContent = el.caption;

            post_div.append(img,caption);
            div.append(post_div);
        }
    })
}