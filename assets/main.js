const categories={
waterproofing:["Roof & Terrace Waterproofing","Roof Leakage","Joint Leakage","Basement Waterproofing","Water Tank Waterproofing","Terrace Garden Waterproofing","Wall Dampness","Roof Dampness","Bathroom Seepage / Tile Joint Retrofitting","Other Waterproofing Requirement"],
crack:["Wall Crack Repair","Roof Crack Repair","Building Crack Sealing","Structural Crack Repair","Roof Crack Grouting","Expansion Joint Treatment","Joint Sealing","Sealant Solutions","Other Crack / Joint Issue"],
structural:["Damaged Beam Repair","Damaged Column Repair","Structural Defect Rectification","RCC Anti-Corrosive Treatment","High-Performance Concrete","Old Building Renovation","Building Retrofitting","Other Structural Repair"],
coating:["Heat-Insulated Roof Coating","Protective Wall Coating","Algae Protection","Fungus Protection","Anti-Corrosive RCC Treatment","Epoxy Coating for Concrete","Protective Coating for Concrete","Other Coating Requirement"],
industrial:["Heavy Machinery Foundation Grouting","Rigid Flooring","Heavy-Duty Flooring","Industrial Flooring","Concrete Flooring Solutions","High-Performance Concrete","Other Industrial Requirement"],
renovation:["Building Renovation","Building Retrofitting","Bathroom Retrofitting","Concrete Repair","General Building Maintenance","Not Sure — Need Expert Advice","Other Requirement"]};
const titles={waterproofing:"Waterproofing & Leakage",crack:"Crack & Joint Repair",structural:"Structural Repair & Retrofitting",coating:"Protective Coatings & Treatments",industrial:"Industrial & Flooring Solutions",renovation:"Renovation & Other Solutions"};
function initRequest(){const grid=document.querySelector("#categoryGrid");if(!grid)return;const subs=document.querySelector("#subcategories"),list=document.querySelector("#subList"),title=document.querySelector("#selectedCategory");grid.addEventListener("click",e=>{const b=e.target.closest(".category");if(!b)return;document.querySelectorAll(".category").forEach(x=>x.classList.remove("active"));b.classList.add("active");const key=b.dataset.category;title.textContent=titles[key];list.innerHTML=categories[key].map(x=>`<button type="button" class="sub">${x}</button>`).join("");subs.classList.add("show");document.querySelector("#requestCategory").value=titles[key];document.querySelector("#requestSubcategory").value=""});list.addEventListener("click",e=>{const b=e.target.closest(".sub");if(!b)return;document.querySelectorAll(".sub").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");document.querySelector("#requestSubcategory").value=b.textContent});document.querySelector("#requestForm")?.addEventListener("submit",e=>{e.preventDefault();const name=document.querySelector("#name").value.trim(),phone=document.querySelector("#phone").value.trim(),category=document.querySelector("#requestCategory").value,sub=document.querySelector("#requestSubcategory").value,location=document.querySelector("#location").value.trim(),details=document.querySelector("#details").value.trim();if(!category){alert("Choose one of the 6 main categories.");return}if(!name||!phone){alert("Enter your name and phone number.");return}const msg=`Safe Roof Chemicals Request\nName: ${name}\nPhone: ${phone}\nCategory: ${category}\nSubcategory: ${sub||"Not selected"}\nLocation: ${location}\nDetails: ${details}`;window.open("https://wa.me/919444408430?text="+encodeURIComponent(msg),"_blank")})}
document.addEventListener("DOMContentLoaded",initRequest);

/* =========================================================
   UNIVERSAL MOBILE NAVIGATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.getElementById("mobileMenuBtn");

    const mobileNav =
        document.getElementById("mobileNav");


    if (!menuButton || !mobileNav) {
        return;
    }


    menuButton.addEventListener("click", function () {

        mobileNav.classList.toggle("active");

        if (mobileNav.classList.contains("active")) {

            menuButton.innerHTML = "✕";

        } else {

            menuButton.innerHTML = "☰";

        }

    });


    /* Close menu when a link is clicked */

    const mobileLinks =
        mobileNav.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileNav.classList.remove("active");

            menuButton.innerHTML = "☰";

        });

    });

});