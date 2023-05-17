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

// ------------------------------------------------------------------------------------------

// Switch Between the sections through back and next buttons
var currentSectionIndex = 0;
var sections = document.getElementsByClassName("sectionNone");
var previousButton = document.getElementById("previousButton");

function showSection(index) {
  if (index >= 0 && index < sections.length) {
    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.remove("active-section");
    }
    sections[index].classList.add("active-section");
    currentSectionIndex = index;
    
    // Show or hide previous button based on the current section index
    if (currentSectionIndex === 0) {
      previousButton.style.opacity = 0;
    } else {
      previousButton.style.opacity = 1;
    }
  }
}

function previousSection() {
  showSection(currentSectionIndex - 1);
}

function nextSection() {
  showSection(currentSectionIndex + 1);
}
// Switch Between the sections through back and next buttons

// --------------------------SECTION-1----------------------------------------------------------------

// Validate ADDRESS and set data to the local storage 
const cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
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
    localStorage.setItem('Address', JSON.stringify(data));
  } else {
    validationMessage.style.display = "block";
  }
}
// Validate ADDRESS and set data to the local storage 

// --------------------------SECTION-2----------------------------------------------------------------

// this is to store data in local storage as Area Input fileld
function areaInput(){
  const areaInputValue = document.querySelector('#areaInput').value;
  const data1 = {
    area: areaInputValue + " m²",
  };
  localStorage.setItem('Area', JSON.stringify(data1))
}
// this is to store data in local storage as Area Input fileld

// --------------------------SECTION-3----------------------------------------------------------------

// this is for active roof slection options
const options = document.querySelectorAll('.option');

options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(opt => opt.classList.remove('active'));
    option.classList.add('active');
    const selectedOption = option.querySelector('span:first-child').innerText;
    localStorage.setItem('Roof Slope', selectedOption);
  });
});
// this is for active roof slection options

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


// ---------------------------SECTION-4---------------------------------------------------------------

const optionsPanel = document.querySelectorAll('.option1');
const valueDiv = document.querySelector('.price .value span:first-child');
const investmentDiv = document.querySelector('.price .investment span:first-child');

const priceData = {
  'Essential': 4041368 +" kr",
  'Design': 3943986 +" kr",
  'Pro': 4041368 +" kr"
};
const investData = {
  'Essential': 20533121 +" kr",
  'Design': 20881223 +" kr",
  'Pro': 36268860 +" kr"
};

const setActivePanel = (selectedOption) => {
  optionsPanel.forEach(option => option.classList.toggle('active', option === selectedOption));
  localStorage.setItem('Panel Type', selectedOption.querySelector('span:first-child').innerText);
  valueDiv.textContent = priceData[selectedOption.innerText] || 0;
  investmentDiv.textContent = investData[selectedOption.innerText] || 0;
};

optionsPanel.forEach(option => option.addEventListener('click', () => setActivePanel(option)));

const options2 = document.querySelectorAll('.option1');
const contentDisplays = document.querySelectorAll('.contentDisplay');
contentDisplays.forEach(contentDisplay => contentDisplay.style.display = 'none');
document.getElementById('design-content').style.display = 'flex';

options2.forEach(option => {
  option.addEventListener('click', function() {
    const optionId = this.id;
    const contentId = optionId + '-content';
    contentDisplays.forEach(contentDisplay => contentDisplay.style.display = 'none');
    document.getElementById(contentId).style.display = 'flex';
  });
});
// This is for active panel Type slection options

