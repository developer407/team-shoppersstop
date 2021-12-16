const loadWidgets = (location,imgs) => {
    imgs.forEach((el) => {
        let img = document.createElement("img");
        img.src = el;
        location.append(img);
    })
}
export default loadWidgets;