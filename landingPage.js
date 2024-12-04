

function SignUp() {
	window.location.href = "./signup.html";
}

function LogIn() {
	window.location.href = "./login.html";
}

let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial-content");

function showTestimonial(index) {
	testimonials.forEach((testimonial, i) => {
		testimonial.classList.remove("active");
		if (i === index) {
			testimonial.classList.add("active");
		}
	});
}

function showPrevious() {
	currentTestimonial =
		(currentTestimonial - 1 + testimonials.length) % testimonials.length;
	showTestimonial(currentTestimonial);
}

function showNext() {
	currentTestimonial = (currentTestimonial + 1) % testimonials.length;
	showTestimonial(currentTestimonial);
}
