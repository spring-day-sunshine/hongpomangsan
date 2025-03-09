const externalview = () => {
    const externalviewImges = document.getElementsByClassName("externalview_imges")[0];

    const img = document.createElement("img");
    img.setAttribute("src", "img/main/externalview/1/externalview_1.jpeg");
    img.setAttribute("class", "externalview_img");

    externalviewImges.appendChild(img);
};

export default externalview;
