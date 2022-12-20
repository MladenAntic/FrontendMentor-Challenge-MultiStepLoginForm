// Sidebar Steps
const step1 = document.querySelector(".step-1");
const step2 = document.querySelector(".step-2");
const step3 = document.querySelector(".step-3");
const step4 = document.querySelector(".step-4");

// Sections
const personalInfoSec = document.getElementById("personal-info");
const selectPlanSec = document.getElementById("select-plan");
const addOnsSec = document.getElementById("add-ons");
const summarySec = document.getElementById("summary");
const thankYouSec = document.getElementById("thank-you");

// Personal Info Content
const errorMessages = document.querySelectorAll(".error-message");
const inputs = document.querySelectorAll("input");

// Select Plan Content
const plans = document.querySelectorAll(".plan");
const planTitle = document.querySelectorAll(".plan-title");
const plansPrices = document.querySelectorAll(".plan-price");
const arcadePrice = document.querySelector(".arcade");
const advancedPrice = document.querySelector(".advanced");
const proPrice = document.querySelector(".pro");
const monthlyPricingLabel = document.querySelector(".monthly");
const yearlyPricingLabel = document.querySelector(".yearly");
const monthlyPricing = document.querySelector(".position-monthly");
const yearlyPricing = document.querySelector(".position-yearly");
const toggler = document.querySelector(".toggler");
const yearlyPricingMessage = document.querySelectorAll(
  ".yearly-pricing-message"
);

// Add Ons Content
const addOns = document.querySelectorAll(".add-on");
const addOnTitles = document.querySelectorAll(".add-on-title");
const addOnPrices = document.querySelectorAll(".add-on-price");
const checkbox = document.querySelectorAll(".checkbox");
const checkmark = document.querySelectorAll(".icon-checkmark");
const onlineServicePrice = document.querySelector(".online-service");
const largerStoragePrice = document.querySelector(".larger-storage");
const customizableProfilePrice = document.querySelector(
  ".customizable-profile"
);

// Summary Content
const planName = document.querySelector(".plan-name");
const changePlan = document.querySelector(".change-plan");
const period = document.querySelector(".period");
const selectedPlanPrice = document.querySelector(".selected-plan-price");
const selectedAddOnnWrapper = document.querySelectorAll(".selected-add-on");
const selectedAddOnn = document.querySelectorAll(".add-on-name");
const selectedAddOnnPrice = document.querySelectorAll(".selected-add-on-price");
const perPeriod = document.querySelector(".per-period");
const totalPrice = document.querySelector(".total-price");

// Buttons
const buttons = document.querySelector(".button-bg");
const previousStep = document.querySelector(".previous-step");
const nextStep = document.querySelector(".next-step");

// Check inputs validity
function personalInfoNextStep(e) {
  if (
    inputs[0].checkValidity() &&
    inputs[1].checkValidity() &&
    inputs[2].checkValidity()
  ) {
    e.preventDefault();
    personalInfoSec.classList.add("hide");
    selectPlanSec.classList.remove("hide");
    step2.classList.add("active-step");
    sectionIndex++;
    inputs.forEach((input) => {
      input.style.border = "1px solid var(--light-gray)";
      errorMessages.forEach((message) => {
        message.style.display = "none";
      });
    });
    previousStep.style.color = "var(--cool-gray)";
    previousStep.style.pointerEvents = "all";
    previousStep.style.cursor = "pointer";
  } else if (inputs[0].checkValidity()) {
    inputs[0].style.border = "1px solid var(--light-gray)";
    errorMessages[0].style.display = "none";
    if (inputs[1].checkValidity()) {
      inputs[1].style.border = "1px solid var(--light-gray)";
      errorMessages[1].style.display = "none";
    } else if (inputs[2].checkValidity()) {
      inputs[2].style.border = "1px solid var(--light-gray)";
      errorMessages[2].style.display = "none";
    }
  } else if (inputs[1].checkValidity()) {
    inputs[1].style.border = "1px solid var(--light-gray)";
    errorMessages[1].style.display = "none";
    if (inputs[0].checkValidity()) {
      inputs[0].style.border = "1px solid var(--light-gray)";
      errorMessages[0].style.display = "none";
    } else if (inputs[2].checkValidity()) {
      inputs[2].style.border = "1px solid var(--light-gray)";
      errorMessages[2].style.display = "none";
    }
  } else if (inputs[2].checkValidity()) {
    inputs[2].style.border = "1px solid var(--light-gray)";
    errorMessages[2].style.display = "none";
    if (inputs[0].checkValidity()) {
      inputs[0].style.border = "1px solid var(--light-gray)";
      errorMessages[0].style.display = "none";
    } else if (inputs[1].checkValidity()) {
      inputs[1].style.border = "1px solid var(--light-gray)";
      errorMessages[1].style.display = "none";
    }
  } else if (
    !inputs[0].checkValidity() &&
    !inputs[1].checkValidity() &&
    !inputs[2].checkValidity()
  ) {
    inputs.forEach((input) => {
      input.style.border = "1px solid var(--strawberry-red)";
      errorMessages.forEach((message) => {
        message.style.display = "block";
      });
    });
  }
  inputs.forEach((input, idx) => {
    input.addEventListener("invalid", (e) => {
      e.target.style.border = "1px solid var(--strawberry-red)";
      switch (idx) {
        case 0:
          errorMessages[0].style.display = "block";
          break;
        case 1:
          errorMessages[1].style.display = "block";
          break;
        case 2:
          errorMessages[2].style.display = "block";
          break;
      }
    });
  });
}

// Previous button display
function hidePreviousButton() {
  previousStep.style.color = "var(--white)";
  previousStep.style.pointerEvents = "none";
}

function showPreviousButton() {
  previousStep.style.color = "var(--cool-gray)";
  previousStep.style.pointerEvents = "all";
  previousStep.style.cursor = "pointer";

  previousStep.addEventListener("mouseover", () => {
    previousStep.style.color = "var(--marine-blue)";
  });
  previousStep.addEventListener("mouseout", () => {
    previousStep.style.color = "var(--cool-gray)";
  });
}

// Next Step/Confirm
function displayNextStep() {
  nextStep.innerText = "Next Step";
  nextStep.style.backgroundColor = "var(--marine-blue)";
  nextStep.style.color = "var(--alabaster)";
}

function displayConfirm() {
  nextStep.innerText = "Confirm";
  nextStep.style.backgroundColor = "var(--purplish-blue)";
  nextStep.style.color = "var(--alabaster)";
}

if (!personalInfoSec.classList.contains("hide")) {
  hidePreviousButton();
}

// Changing sections
let sectionIndex = 1;

function changeSection() {
  switch (sectionIndex) {
    case 1:
      personalInfoSec.classList.remove("hide");

      selectPlanSec.classList.add("hide");
      addOnsSec.classList.add("hide");
      summarySec.classList.add("hide");
      thankYouSec.style.display = "none";
      step2.classList.remove("active-step");

      hidePreviousButton();
      displayNextStep();
      break;
    case 2:
      selectPlanSec.classList.remove("hide");

      addOnsSec.classList.add("hide");
      summarySec.classList.add("hide");
      thankYouSec.style.display = "none";
      step3.classList.remove("active-step");

      showPreviousButton();
      displayNextStep();
      break;
    case 3:
      addOnsSec.classList.remove("hide");

      selectPlanSec.classList.add("hide");
      summarySec.classList.add("hide");
      thankYouSec.style.display = "none";
      step3.classList.add("active-step");
      step4.classList.remove("active-step");

      showPreviousButton();
      displayNextStep();
      break;
    case 4:
      summarySec.classList.remove("hide");

      addOnsSec.classList.add("hide");
      selectPlanSec.classList.add("hide");
      thankYouSec.style.display = "none";
      step4.classList.add("active-step");

      showPreviousButton();
      displayConfirm();
      break;
    case 5:
      thankYouSec.style.display = "flex";

      addOnsSec.classList.add("hide");
      selectPlanSec.classList.add("hide");
      summarySec.style.display = "none";

      buttons.style.display = "none";
      break;
  }
}

nextStep.addEventListener("click", (e) => {
  personalInfoNextStep(e);
  changeSection();
});

previousStep.addEventListener("click", () => {
  sectionIndex--;
  changeSection();
});

// Plans Section Interactivity
plans[1].addEventListener("mouseover", () => {
  plans[1].classList.add("active-plan");
});
plans[1].addEventListener("mouseout", () => {
  plans[1].classList.remove("active-plan");
});

plans[2].addEventListener("mouseover", () => {
  plans[2].classList.add("active-plan");
});
plans[2].addEventListener("mouseout", () => {
  plans[2].classList.remove("active-plan");
});

for (let i = 0; i < plans.length; i++) {
  plans[i].addEventListener("click", () => {
    plans[i].classList.add("active-plan");
    plans[i].addEventListener("mouseover", () => {
      plans[i].classList.add("active-plan");
    });
    plans[i].addEventListener("mouseout", () => {
      plans[i].classList.add("active-plan");
    });

    if (plans[i].classList.contains("active-plan")) {
      planName.innerText = planTitle[i].innerText;
      selectedPlanPrice.innerText = plansPrices[i].innerText;
    }

    calculateTotalPrice();

    totalPrice.innerText = `$${totalPrice.innerText}/mo`;
  });
}

function arcadePlan() {
  plans[0].classList.remove("active-plan");
  plans[0].addEventListener("mouseover", () => {
    plans[0].classList.add("active-plan");
  });
  plans[0].addEventListener("mouseout", () => {
    plans[0].classList.remove("active-plan");
  });
}

function advancedPlan() {
  plans[1].classList.remove("active-plan");
  plans[1].addEventListener("mouseover", () => {
    plans[1].classList.add("active-plan");
  });
  plans[1].addEventListener("mouseout", () => {
    plans[1].classList.remove("active-plan");
  });
}

function proPlan() {
  plans[2].classList.remove("active-plan");
  plans[2].addEventListener("mouseover", () => {
    plans[2].classList.add("active-plan");
  });
  plans[2].addEventListener("mouseout", () => {
    plans[2].classList.remove("active-plan");
  });
}

plans[0].addEventListener("click", () => {
  advancedPlan();
  proPlan();
});

plans[1].addEventListener("click", () => {
  arcadePlan();
  proPlan();
});

plans[2].addEventListener("click", () => {
  arcadePlan();
  advancedPlan();
});

// Price of selected plan in Summary Section
function selectedPlanSummary() {
  for (let i = 0; i < plans.length; i++) {
    if (plans[i].classList.contains("active-plan")) {
      selectedPlanPrice.innerText = plansPrices[i].innerText;
    }
  }
  for (let i = 0; i < addOns.length; i++) {
    if (addOns[i].classList.contains("active-plan")) {
      selectedAddOnnPrice[i].innerText = addOnPrices[i].innerText;
    }
  }
}

// Monthly Pricing
monthlyPricing.addEventListener("click", () => {
  toggler.style.transform = "translateX(0%)";
  monthlyPricingLabel.style.color = "var(--marine-blue)";
  yearlyPricingLabel.style.color = "var(--cool-gray)";
  arcadePrice.innerText = "$9/mo";
  advancedPrice.innerText = "$12/mo";
  proPrice.innerText = "$15/mo";
  onlineServicePrice.innerText = "+$1/mo";
  largerStoragePrice.innerText = "+$2/mo";
  customizableProfilePrice.innerText = "+$2/mo";
  yearlyPricingMessage.forEach((message) => {
    message.style.display = "none";
  });
  period.innerText = "(Monthly)";

  selectedPlanSummary();
  perPeriod.innerText = "(per month)";
  calculateTotalPrice();
  totalPrice.innerText = `$${totalPrice.innerText}/mo`;

  for (let i = 0; i < 3; i++) {
    plans[i].addEventListener("click", () => {
      let value = totalPrice.innerText.toString().replace(/\D/g, "");
      totalPrice.innerText = `$${value}/mo`;
    });
    addOns[i].addEventListener("click", () => {
      let value = totalPrice.innerText.toString().replace(/\D/g, "");
      totalPrice.innerText = `$${value}/mo`;
    });
  }
});

// Yearly Pricing
yearlyPricing.addEventListener("click", () => {
  toggler.style.transform = "translateX(190%)";
  yearlyPricingLabel.style.color = "var(--marine-blue)";
  monthlyPricingLabel.style.color = "var(--cool-gray)";
  arcadePrice.innerText = "$90/yr";
  advancedPrice.innerText = "$120/yr";
  proPrice.innerText = "$150/yr";
  onlineServicePrice.innerText = "+$10/yr";
  largerStoragePrice.innerText = "+$20/yr";
  customizableProfilePrice.innerText = "+$20/yr";
  yearlyPricingMessage.forEach((message) => {
    message.style.display = "block";
  });
  period.innerText = "(Yearly)";
  selectedPlanSummary();
  perPeriod.innerText = "(per year)";
  calculateTotalPrice();
  totalPrice.innerText = `$${totalPrice.innerText}/yr`;

  for (let i = 0; i < 3; i++) {
    plans[i].addEventListener("click", () => {
      let value = totalPrice.innerText.toString().replace(/\D/g, "");
      totalPrice.innerText = `$${value}/yr`;
    });
    addOns[i].addEventListener("click", () => {
      let value = totalPrice.innerText.toString().replace(/\D/g, "");
      totalPrice.innerText = `$${value}/yr`;
    });
  }
});

// Add Ons Interactivity
for (let i = 0; i < addOns.length; i++) {
  addOns[i].addEventListener("click", () => {
    checkbox[i].classList.toggle("active-checkbox");
    addOns[i].classList.toggle("active-plan");

    if (addOns[i].classList.contains("active-plan")) {
      selectedAddOnnWrapper[i].style.display = "flex";
      selectedAddOnn[i].innerText = addOnTitles[i].innerText;
      selectedAddOnnPrice[i].innerText = addOnPrices[i].innerText;
    } else if (!addOns[i].classList.contains("active-plan")) {
      selectedAddOnnWrapper[i].style.display = "none";
    }

    calculateTotalPrice();
    totalPrice.innerText = `$${totalPrice.innerText}/mo`;
  });
}

// Summary Section
planName.innerText = planTitle[0].innerText;
period.innerText = "(Monthly)";
perPeriod.innerText = "(per month)";

selectedAddOnn[0].innerText = addOnTitles[0].innerText;
selectedAddOnnPrice[0].innerText = addOnPrices[0].innerText;

changePlan.addEventListener("click", () => {
  summarySec.classList.add("hide");
  selectPlanSec.classList.remove("hide");
});

totalPrice.innerText = "$10/mo";

function calculateTotalPrice() {
  let summaryPlan = selectedPlanPrice.innerText.toString().replace(/\D/g, "");
  let summaryAddOn1 = addOnPrices[0].innerText.toString().replace(/\D/g, "");
  let summaryAddOn2 = addOnPrices[1].innerText.toString().replace(/\D/g, "");
  let summaryAddOn3 = addOnPrices[2].innerText.toString().replace(/\D/g, "");

  if (addOns[0].classList.contains("active-plan")) {
    totalPrice.innerText = parseInt(summaryPlan) + parseInt(summaryAddOn1);
  }

  if (addOns[1].classList.contains("active-plan")) {
    totalPrice.innerText = parseInt(summaryPlan) + parseInt(summaryAddOn2);
  }

  if (addOns[2].classList.contains("active-plan")) {
    totalPrice.innerText = parseInt(summaryPlan) + parseInt(summaryAddOn3);
  }

  if (
    addOns[0].classList.contains("active-plan") &&
    addOns[1].classList.contains("active-plan")
  ) {
    totalPrice.innerText =
      parseInt(summaryPlan) + parseInt(summaryAddOn1) + parseInt(summaryAddOn2);
  }

  if (
    addOns[0].classList.contains("active-plan") &&
    addOns[2].classList.contains("active-plan")
  ) {
    totalPrice.innerText =
      parseInt(summaryPlan) + parseInt(summaryAddOn1) + parseInt(summaryAddOn3);
  }

  if (
    addOns[1].classList.contains("active-plan") &&
    addOns[2].classList.contains("active-plan")
  ) {
    totalPrice.innerText =
      parseInt(summaryPlan) + parseInt(summaryAddOn2) + parseInt(summaryAddOn3);
  }

  if (
    addOns[0].classList.contains("active-plan") &&
    addOns[1].classList.contains("active-plan") &&
    addOns[2].classList.contains("active-plan")
  ) {
    totalPrice.innerText =
      parseInt(summaryPlan) +
      parseInt(summaryAddOn1) +
      parseInt(summaryAddOn2) +
      parseInt(summaryAddOn3);
  }

  if (
    !addOns[0].classList.contains("active-plan") &&
    !addOns[1].classList.contains("active-plan") &&
    !addOns[2].classList.contains("active-plan")
  ) {
    totalPrice.innerText = parseInt(summaryPlan);
  }
}
