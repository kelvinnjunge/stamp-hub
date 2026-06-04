const PHONE = "+254778046004";
const WHATSAPP_LINK = `https://wa.me/254778046004?text=${encodeURIComponent("Hello, I'd like to order a rubber stamp.")}`;

const products = [
    {
        name: "Self-Inking Stamps",
        price: "From KSh 2,500",
        desc: "Armor S-3355D, A-3355 & more.",
        img: "src/assets/Self-Inking Stamps.jpeg",
    },
    {
        name: "Wood Handle Stamps",
        price: "From KSh 500",
        desc: "Classic, durable wooden stamps.",
        img: "src/assets/Wood Handle Stamps.jpeg",
    },
    {
        name: "Desk Embossers",
        price: "From KSh 4,500",
        desc: "Heavy-duty Armor desk seal.",
        img: "src/assets/Desk Embossers.jpeg",
    },
    {
        name: "Pocket Embossers",
        price: "From KSh 3,500",
        desc: "Armor A40 portable embosser.",
        img: "src/assets/Pocket Embossers.jpeg",
    },
    {
        name: "Date & Time Stamps",
        price: "From KSh 3,000",
        desc: "Armor DT-42 self-inking daters.",
        img: "src/assets/Date & Time Stamps.jpeg",
    },
    {
        name: "Large Format Stamps",
        price: "From KSh 2,500",
        desc: "Armor 6040-S & DT 6040 sizes.",
        img: "src/assets/Large Format Stamps.jpeg",
    },
    {
        name: "Pre-Inked Date Stamps",
        price: "From KSh 1,800",
        desc: "Armor Printer DT 6040 dater.",
        img: "src/assets/Pre-Inked Date Stamps.jpeg",
    },
    {
        name: "Safety & Notice Signs",
        price: "From KSh 800",
        desc: "CCTV, warning & notice signage.",
        img: "src/assets/Safety & Notice Signs.jpeg",
    },
    {
        name: "Custom Logo Seal",
        price: "Quote on request",
        desc: "Bring your logo, we deliver.",
        img: "src/assets/Custom Logo Stamps.jpeg",
    },
];

function renderProducts() {
    const grid = document.getElementById("product-grid");
    if (!grid) return;

    const html = products
        .map(
            (product) => `
      <article class="product-card">
        <img src="${product.img}" alt="${product.name}" loading="lazy" />
        <div class="product-card-content">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="product-card-footer">
            <span class="product-price">${product.price}</span>
            <a href="${WHATSAPP_LINK}" target="_blank" rel="noreferrer">Order →</a>
          </div>
        </div>
      </article>`
        )
        .join("");

    grid.innerHTML = html;
}

function initLinks() {
    const whatsappLinks = document.querySelectorAll("#whatsapp-link, #whatsapp-link-2");
    whatsappLinks.forEach((element) => {
        if (element instanceof HTMLAnchorElement) {
            element.href = WHATSAPP_LINK;
        }
    });
}

window.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    initLinks();
});
