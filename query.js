import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "SUPABASE_URL_HERE";
const supabaseKey =
  "API_KEY_HERE";
const supabase = createClient(supabaseUrl, supabaseKey);

const userName = document.getElementById("name");
const email = document.getElementById("email");
const phoneno = document.getElementById("phoneno");
const query = document.getElementById("query");

// Create an instance of Notyf
var notyf = new Notyf({
  duration: 1000,
  position: {
    x: "center",
    y: "top",
  },
});

async function insertQuery() {
  const { data, error } = await supabase.from("User Data").insert([
    {
      name: userName.value,
      email: email.value,
      phoneno: phoneno.value,
      query: query.value,
    },
  ]);

  if (error) {
    notyf.error("There was an error submitting your query! Please try again.");
  } else {
    notyf.success(
      "Your query has been successfully submitted! We will get in touch with you soon."
    );
  }
}

// Add event listener to button to handle form submission via JavaScript
document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default form submission
  if (
    userName.value === "" ||
    email.value === "" ||
    phoneno.value === "" ||
    query.value === ""
  ) {
    notyf.error("Oops! Please fill in all required fields."); // Handle any error responses from API requests via Supabase
  } else {
    insertQuery(); // Call function to insert data via Supabase
    userName.value = "";
    email.value = "";
    phoneno.value = "";
    query.value = "";
  }
});
