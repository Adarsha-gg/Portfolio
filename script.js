about = () => {
    window.open(link.href, "_self")
}

document.addEventListener("DOMContentLoaded", function() {
    const imageUrls = [
        "https://media1.tenor.com/m/1-m75iimhPYAAAAC/gopher-groundhod.gif",
        "https://media1.tenor.com/m/zfhl02Fs4ZwAAAAC/raccoon-dancing-in-a-circle-raccoon-dancing.gif",
        "https://media.tenor.com/qJRMLPlR3_8AAAAi/maxwell-cat.gif"
        // Add more URLs as needed
    ];

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        return imageUrls[randomIndex];
    }

    const capyImage = document.querySelector(".capy");
    capyImage.src = getRandomImage();
});