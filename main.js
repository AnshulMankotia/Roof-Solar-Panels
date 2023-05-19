var currentSectionIndex = 0;
var sections = document.getElementsByClassName("sectionNone");
var previousButton = document.getElementById("previousButton");
var navLinks = document.getElementsByClassName("navLinks")[0].getElementsByTagName("a");

function showSection(index) {
  if (index >= 0 && index < sections.length) {
    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.remove("active-section");
    }
    sections[index].classList.add("active-section");
    currentSectionIndex = index;

    // Update active link based on current section index
    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("activeLink");
    }
    navLinks[currentSectionIndex].classList.add("activeLink");

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

// Add event listeners to the navigation links
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function(e) {
    e.preventDefault(); // Prevent the default link behavior

    // Remove the "activeLink" class from all links
    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("activeLink");
    }

    // Add the "activeLink" class to the clicked link
    this.classList.add("activeLink");

    var targetSection = this.getAttribute("href"); // Get the target section ID
    var index = Array.from(sections).findIndex(function(section) {
      return section.id === targetSection.substring(1);
    });
    showSection(index);
  });
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
const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', () => {
  localStorage.setItem('Roof Slope', selectedOption);
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
const defaultOption = document.querySelector('#ordinaryRoof');
defaultOption.classList.add('active');
const selectedOption = defaultOption.querySelector('span:first-child').innerText;
localStorage.setItem('Roof Slope', selectedOption);
img1.style.backgroundImage = "url('/Assets/ordinaryPanel.png'), url('/Assets/ordinaryRoof.png')";
img1.style.transition = "all 1s";
// This is for changing images in the background
// This is for active roof slection options


// ---------------------------SECTION-4---------------------------------------------------------------

const optionsPanel = document.querySelectorAll('.option1');
const valueDiv = document.querySelector('.price .value span:first-child');
const investmentDiv = document.querySelector('.price .investment span:first-child');

const priceData = {
  'Essential': '4041368 kr',
  'Design': '3943986 kr',
  'Pro': '4041368 kr'
};
const investData = {
  'Essential': '20533121 kr',
  'Design': '20881223 kr',
  'Pro': '36268860 kr'
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
document.getElementById('design').classList.add('active'); // Add the 'active' class to the 'design' option
localStorage.setItem('Panel Type', 'Design'); // Set 'Design' as the default value in local storage

options2.forEach(option => {
  option.addEventListener('click', function() {
    const optionId = this.id;
    const contentId = optionId + '-content';
    contentDisplays.forEach(contentDisplay => contentDisplay.style.display = 'none');
    document.getElementById(contentId).style.display = 'flex';
    localStorage.setItem('Panel Type', optionId.charAt(0).toUpperCase() + optionId.slice(1)); // Store the selected option in local storage
  });
});


// This is for active panel Type slection options



// Add an event listener to the checkbox
var checkbox = document.querySelector('.checkbox input');
checkbox.addEventListener('change', function() {
  var rows = document.getElementsByClassName('row');

  if (this.checked) {
    // Remove the 'activeRow' class from all rows
    for (var j = 1; j < rows.length; j++) {
      rows[j].classList.remove('activeRow');
    }
    // Delete the stored value from local storage
    localStorage.removeItem('Ownership');
  } else {
    // Add the 'activeRow' class to the initially selected row
    rows[1].classList.add('activeRow');
    // Get the selected option text
    var selectedOption = rows[1].querySelector('.selection').innerText;
    // Store the selected option in local storage
    localStorage.setItem('Ownership', selectedOption);
  }
});

// Add an event listener to each row
var rows = document.getElementsByClassName('row');
for (var i = 1; i < rows.length; i++) {
  rows[i].addEventListener('click', function() {
    // Remove the 'activeRow' class from all rows
    for (var j = 1; j < rows.length; j++) {
      rows[j].classList.remove('activeRow');
    }
    // Add the 'activeRow' class to the clicked row
    this.classList.add('activeRow');
    // Get the selected option text
    var selectedOption = this.querySelector('.selection').innerText;
    // Store the selected option in local storage
    localStorage.setItem('Ownership', selectedOption);
    // Uncheck the checkbox
    checkbox.checked = false;
  });
}


