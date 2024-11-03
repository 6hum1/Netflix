document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq-item");

    faqs.forEach(faq => {
        const plus = faq.querySelector(".plus");
        const para = faq.querySelector(".para");
        const cross = faq.querySelector(".cross");

        plus.addEventListener("click", () => {
            console.log("Plus clicked"); // Debugging log
            para.classList.remove("hidden");
            para.classList.add("block");
            cross.classList.remove("hidden");
            cross.classList.add("block");
            plus.classList.add("hidden");
        });

        cross.addEventListener("click", () => {
            console.log("Cross clicked"); // Debugging log
            para.classList.add("hidden");
            para.classList.remove("block");
            cross.classList.add("hidden");
            cross.classList.remove("block");
            plus.classList.remove("hidden");
        });
    });
});
    