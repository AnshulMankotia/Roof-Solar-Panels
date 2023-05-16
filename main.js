// Get all navigation links active
const navLinks = document.querySelectorAll("header nav ul li a");

// Add event listeners to each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    navLinks.forEach((link) => link.classList.remove("activeLink"));
    
    link.classList.add("activeLink");
  });
});
// Get all navigation links active

// Switch Between the sections through back and next buttons
var currentSectionIndex = 0;
var sections = document.getElementsByClassName("sectionNone");

function showSection(index) {
  if (index >= 0 && index < sections.length) {
    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.remove("active-section");
    }
    sections[index].classList.add("active-section");
    currentSectionIndex = index;
  }
}

function previousSection() {
  showSection(currentSectionIndex - 1);
}

function nextSection() {
  showSection(currentSectionIndex + 1);
}
// Switch Between the sections through back and next buttons


const cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
const section2 = document.querySelector(".section2");
const section1 = document.querySelector(".section1");
localStorage.setItem("city", JSON.stringify(cities));

function validateAddress() {
  const addressInput = document.getElementById("address").value;
  const cityArray = JSON.parse(localStorage.getItem("city"));
  const isValid = cityArray.includes(addressInput);
  const validationMessage = document.getElementById("validationMessage");

  if (isValid) {
    const data = {
      address: addressInput,
    };
    localStorage.setItem('myData', JSON.stringify(data));
    section1.style.display = "none";
    section2.style.display = "grid";
  } else {
    validationMessage.style.display = "block";
  }
}



// Adding Area Section and Disabling Options Section
const section3 = document.querySelector(".section3")
function addingArea() {
  section3.style.display="grid"
  section2.style.display = "none";

}

// this is for active roof slection options
const options = document.querySelectorAll('.option');

options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(opt => opt.classList.remove('active'));
    option.classList.add('active');
    
  });
});

// This is for changing images in the background
const img1 = document.querySelector(".section3 .mainDisplay #column1");
const flatRoof = document.querySelector('#flatRoof');
const ordinaryRoof = document.querySelector('#ordinaryRoof');
const pointedRoof = document.querySelector('#pointedRoof');
flatRoof.addEventListener('click', () => {
  img1.style.backgroundImage ="url('/Assets/flatPanel.png'), url('/Assets/flatRoof.png')";
  img1.style.transition ="all 1s"
})
ordinaryRoof.addEventListener('click', () => {
  img1.style.backgroundImage ="url('/Assets/ordinaryPanel.png'), url('/Assets/ordinaryRoof.png')";
  img1.style.transition ="all 1s"
})
pointedRoof.addEventListener('click', () => {
  img1.style.backgroundImage ="url('/Assets/pointedPanel.png'), url('/Assets/pointedRoof.png')";
  img1.style.transition ="all 1s"
})
// This is for changing images in the background
// This is for active roof slection options



// creating an object for ROOF TYPE
const roofSlope = {
   roof:[{
       roofType:'Flat Roof'
    },
    {
        roofType:'Ordinary ceiling'
    },
    {
        roofType:'Pointed roof'
}]
  }
  // storing it in the localStorage
  localStorage.setItem('Roof Type', JSON.stringify(roofSlope))
  console.log(roofSlope.roof[0].roofType)
  
  // creating an object for SOLAR TYPE PANELS
  const solarPanels = {
      panels:[{
          panelType:'Essential',
          price:"404492",
          investment:'2100957'
        },
        {
            panelType:'Design',
            price:"394746",
            investment:'2135811 '
        },
        {
            panelType:'Pro',
            price:"404492",
            investment:'3674594'
        }]
    }
    // storing it in the localStorage
    localStorage.setItem('Panel Type', JSON.stringify(solarPanels))
    console.log(solarPanels.panels[1].panelType)
