function sendMail (){
 
    let parms= {
        name : document.getElementById("p_f-name").value,
        phone : document.getElementById("p_phone").value,
        email : document.getElementById("p_email").value,
        service : document.querySelector("select").value,
        appoitment_date : document.querySelector('input[type="date"]'),
        message : document.getElementById("p_message").value,
    }

    emailjs.send("service_uze3jc8","template_jj7gm2y",parms).then(() => {
      alert("Email has been sent successfully!"); // Corrected alert function
    })
}



const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name : document.getElementById("p_f-name").value,
        phone : document.getElementById("p_phone").value,
        email : document.getElementById("p_email").value,
        service : document.querySelector("select").value,
        appoitment_date : document.querySelector('input[type="date"]'),
        message : document.getElementById("p_message").value,
  };

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzZqcpG0RF31znR_EOLFiu0hj7iykGpXFyuWb1EcQhKyFB_xXRPVZihEf9657caibcR/exec", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.status === "success") {
      alert("Form submitted successfully!");
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Error submitting form. Check console for details.");
  }
});
