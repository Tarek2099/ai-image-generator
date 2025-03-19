const updateImages = (imageIndex, URL)=>{
    const getImgCard = document.getElementById(`img-card-${imageIndex}`);
    if(!getImgCard) return;
    getImgCard.classList.remove("loading");
    getImgCard.innerHTML = `<img src="${URL}" class="result-image">
                            <div class="img-overlay">
                                <a href="${URL}" class="img-download-btn" download="${Date.now()}.png">
                                    <i class="fa-solid fa-download"></i>
                                </a>
                            </div>`
}

export default updateImages;