function loadCategories() {
  // 1 - Fetch The data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // 2 - Convert promise to json
    .then((res) => res.json())
    // 3 - Send data to display
    .then((data) => {
      displayCategories(data.categories);
    });
}

function displayCategories(categories) {
  // Get The Container
  const categoryContainer = document.getElementById("category-container");

  // Loop Operation on Array of Object
  for (const cat of categories) {
    // Create Element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
      <button class="btn bg-gray-200 hover:bg-red-500 hover:text-white">${cat.category}</button>
    `;
    // Append The Element
    categoryContainer.append(categoryDiv);
  }
}

loadCategories();
