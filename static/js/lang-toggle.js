document.addEventListener("DOMContentLoaded", () => {
    const langToggle = document.getElementById("lang-toggle");
    const elementsToTranslate = document.querySelectorAll("[data-key]");
    let currentLang = localStorage.getItem("lang") || "en"; // Default to English

    // Function to apply translations
    function translatePage(lang) {
        elementsToTranslate.forEach((el) => {
            const key = el.getAttribute("data-key");
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        localStorage.setItem("lang", lang); // Save language preference
    }

    // Toggle Language on Button Click
    langToggle.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "fr" : "en";
        translatePage(currentLang);

        // Update button text
        langToggle.textContent = currentLang === "en" ? "Fr" : "En";
    });

    // Apply saved or default language on page load
    translatePage(currentLang);
    langToggle.textContent = currentLang === "en" ? "Fr" : "En";
});
