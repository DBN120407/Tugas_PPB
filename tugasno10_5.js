// lenght
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateInitials(firstName, lastName) {
    // Ambil inisial dari masing-masing nama
    const firstNameInitial = firstName.charAt(0).toUpperCase();
    const lastNameInitial = lastName.charAt(0).toUpperCase();
    
    // Buat format string yang diinginkan
    const formattedString = `Nama Depan: ${firstNameInitial}; Nama Belakang: ${lastNameInitial}`;
    
    return formattedString;
  }
  
  // Contoh pemanggilan fungsi
  const firstName = "Dimas";
  const lastName = "Bayu Nuroho";
  const initials = generateInitials(firstName, lastName);
  console.log(initials); // Output: "Nama Depan: J; Nama Belakang: D"