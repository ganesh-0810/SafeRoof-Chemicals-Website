/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const mobileNav =
    document.getElementById("mobileNav");


if (mobileMenuBtn && mobileNav) {

    mobileMenuBtn.addEventListener("click", () => {

        mobileNav.classList.toggle("show");

        if (mobileNav.classList.contains("show")) {

            mobileMenuBtn.textContent = "✕";

        } else {

            mobileMenuBtn.textContent = "☰";

        }

    });

}



/* =========================================================
   REQUEST DATA
========================================================= */

const requestData = {

    waterproofing: {

        title: "Waterproofing & Leakage",

        items: [

            "Roof & Terrace Waterproofing",

            "Roof Leakage",

            "Joint Leakage",

            "Basement Waterproofing",

            "Water Tank Waterproofing",

            "Terrace Garden Waterproofing",

            "Wall Dampness",

            "Roof Dampness",

            "Bathroom Seepage / Tile Joint Retrofitting",

            "Other Waterproofing Requirement"

        ]

    },


    crack: {

        title: "Crack & Joint Repair",

        items: [

            "Wall Crack Repair",

            "Roof Crack Repair",

            "Building Crack Sealing",

            "Structural Crack Repair",

            "Roof Crack Grouting",

            "Expansion Joint Treatment",

            "Joint Sealing",

            "Sealant Solutions",

            "Other Crack / Joint Issue"

        ]

    },


    structural: {

        title: "Structural Repair & Retrofitting",

        items: [

            "Damaged Beam Repair",

            "Damaged Column Repair",

            "Structural Defect Rectification",

            "RCC Anti-Corrosive Treatment",

            "High-Performance Concrete",

            "Old Building Renovation",

            "Building Retrofitting",

            "Other Structural Repair"

        ]

    },


    coating: {

        title: "Protective Coatings & Treatments",

        items: [

            "Heat-Insulated Roof Coating",

            "Protective Wall Coating",

            "Algae Protection",

            "Fungus Protection",

            "Anti-Corrosive RCC Treatment",

            "Epoxy Coating for Concrete",

            "Protective Coating for Concrete",

            "Other Coating Requirement"

        ]

    },


    industrial: {

        title: "Industrial & Flooring Solutions",

        items: [

            "Heavy Machinery Foundation Grouting",

            "Rigid Flooring",

            "Heavy-Duty Flooring",

            "Industrial Flooring",

            "Concrete Flooring Solutions",

            "High-Performance Concrete",

            "Other Industrial Requirement"

        ]

    },


    renovation: {

        title: "Renovation & Other Solutions",

        items: [

            "Building Renovation",

            "Building Retrofitting",

            "Bathroom Retrofitting",

            "Concrete Repair",

            "General Building Maintenance",

            "Not Sure — Need Expert Advice",

            "Other Requirement"

        ]

    }

};



/* =========================================================
   REQUEST ELEMENTS
========================================================= */

const categoryGrid =
    document.getElementById("categoryGrid");

const subcategoryArea =
    document.getElementById("subcategoryArea");

const subcategoryGrid =
    document.getElementById("subcategoryGrid");

const selectedCategory =
    document.getElementById("selectedCategory");

const requestCategory =
    document.getElementById("requestCategory");

const requestSubcategory =
    document.getElementById("requestSubcategory");

const requestForm =
    document.getElementById("requestForm");

const backButton =
    document.getElementById("backToCategories");

const progressSpans =
    document.querySelectorAll(".request-progress span");

const stepLabel =
    document.querySelector(".request-step-label");


function setStep(step) {

    if (progressSpans && progressSpans.length >= 3) {

        progressSpans.forEach((span, index) => {

            if (index < step) {

                span.classList.add("progress-active");

            } else {

                span.classList.remove("progress-active");

            }

        });

    }

    if (stepLabel) {

        if (step === 1) {

            stepLabel.textContent = "SELECT YOUR REQUIREMENT";

        } else if (step === 2) {

            stepLabel.textContent = "CHOOSE SPECIFIC REQUIREMENT (OPTIONAL)";

        } else if (step === 3) {

            stepLabel.textContent = "TELL US HOW WE CAN REACH YOU";

        }

    }

}



/* =========================================================
   OPEN CATEGORY
========================================================= */

function openCategory(categoryKey) {

    const category =
        requestData[categoryKey];

    if (!category) return;


    /* Save selected category */

    requestCategory.value =
        category.title;


    requestSubcategory.value = "";


    /* Update heading */

    selectedCategory.textContent =
        category.title;


    /* Clear old options */

    subcategoryGrid.innerHTML = "";


    /* Create subcategory buttons */

    category.items.forEach((item) => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "subcategory-option";

        button.textContent =
            item;


        button.addEventListener(
            "click",
            () => {

                /* Remove previous selection */

                document
                    .querySelectorAll(
                        ".subcategory-option"
                    )
                    .forEach(option => {

                        option.classList.remove(
                            "selected"
                        );

                    });


                /* Select this one */

                button.classList.add(
                    "selected"
                );


                requestSubcategory.value =
                    item;


                /* Step 3 reached */
                setStep(3);


                /* Show form */

                requestForm.classList.add(
                    "show"
                );


                /* Scroll slightly */

                setTimeout(() => {

                    requestForm.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }, 150);

            }
        );


        subcategoryGrid.appendChild(
            button
        );

    });


    /* Hide main categories */

    categoryGrid.style.display =
        "none";


    /* Show subcategories & form */

    subcategoryArea.classList.add(
        "show"
    );

    requestForm.classList.add(
        "show"
    );

    setStep(2);

}



/* =========================================================
   CATEGORY BUTTONS
========================================================= */

document
    .querySelectorAll(".category-card")
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const category =
                    button.dataset.category;

                openCategory(category);

            }
        );

    });



/* =========================================================
   SOLUTION CARDS
   Clicking a solution automatically
   opens the matching request category
========================================================= */

document
    .querySelectorAll(".solution-card")
    .forEach((card) => {

        card.addEventListener(
            "click",
            () => {

                const category =
                    card.dataset.requestCategory;

                if (category) {

                    openCategory(category);

                }

            }
        );

    });



/* =========================================================
   BACK TO MAIN CATEGORIES
========================================================= */

if (backButton) {

    backButton.addEventListener(
        "click",
        () => {

            subcategoryArea.classList.remove(
                "show"
            );


            requestForm.classList.remove(
                "show"
            );


            categoryGrid.style.display =
                "";


            requestCategory.value =
                "";

            requestSubcategory.value =
                "";

            setStep(1);

        }
    );

}



/* =========================================================
   WHATSAPP FORM
========================================================= */

const form =
    document.getElementById("requestForm");


if (form) {

    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();


            const phone =
                document
                    .getElementById("phone")
                    .value
                    .trim();


            const location =
                document
                    .getElementById("location")
                    .value
                    .trim();


            const details =
                document
                    .getElementById("details")
                    .value
                    .trim();


            const category =
                requestCategory.value;


            const subcategory =
                requestSubcategory.value;



            if (!category) {

                alert(
                    "Please select a requirement category."
                );

                return;

            }


            const chosenSubcategory =
                subcategory || "General Requirement / Consultation";


            if (!name || !phone) {

                alert(
                    "Please enter your name and phone number."
                );

                return;

            }



            /*
             * IMPORTANT:
             * Replace this number with the actual
             * Safe Roof WhatsApp business number.
             */

            const whatsappNumber =
                "919444408430";


            const message =

                `Hello Safe Roof Chemicals,

I have a building-related requirement.

*Category:* ${category}

*Requirement:* ${chosenSubcategory}

*Name:* ${name}

*Phone:* ${phone}

*Project Location:* ${location || "Not provided"}

*Details:* ${details || "Not provided"}

Please help me with the right solution.

Thank you.`;



            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(message);


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}



/* =========================================================
   HEADER SHADOW ON SCROLL
========================================================= */

const header =
    document.getElementById("header");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 10px 30px rgba(16,45,52,.06)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);



/* =========================================================
   CLOSE MOBILE MENU AFTER CLICK
========================================================= */

document
    .querySelectorAll(".mobile-nav a")
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                mobileNav.classList.remove(
                    "show"
                );

                mobileMenuBtn.textContent =
                    "☰";

            }
        );

    });

    /* =========================================================
   COMPANY IMAGE SLIDER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slider-image");

    if (!slides.length) return;

    let currentSlide = 0;

    setInterval(function () {

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active");

    }, 3000);

});