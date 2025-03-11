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

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
}

const loadCategoriesVideos = (id) => {

  const url = `
    https://openapi.programming-hero.com/api/phero-tube/category/${id}
  `;
  console.log(url);

  fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  
}

function displayCategories(categories) {
  // Get The Container
  const categoryContainer = document.getElementById("category-container");

  // Loop Operation on Array of Object
  for (const cat of categories) {
    // Create Element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
      <button onclick="loadCategoriesVideos(${cat.category_id})" class="btn btn-sm bg-gray-200 hover:bg-red-500 hover:text-white">${cat.category}</button>
    `;
    // Append The Element
    categoryContainer.append(categoryDiv);
  }
}

const displayVideos = (videos) => {
  const videosContainer = document.getElementById("videos-container");
  videos.forEach((video) => {
    console.log(video);

    const videoCard = document.createElement("div");
    videoCard.classList.add("cursor-pointer");
    videoCard.innerHTML = `
      <div class="relative">
        <img src="${video.thumbnail}" alt="" class="w-full h-60 rounded-xl object-cover">
        <p class="absolute bottom-3 right-3 bg-[#171717] text-white text-sm py-1 px-3 rounded ">3hrs 56 min ago</p>
      </div>
      <div class="flex items-start gap-3 my-5">
        <div class="avatar">
          <div class="w-12 rounded-full">
            <img src="${video.authors[0].profile_picture}" />
          </div>
        </div>
      
        <div class="space-y-1">
          <h3 class="text-lg font-bold">${video.title}</h3>
          <div class="flex items-center gap-2">
            <p class=" text-[#17171770]">${video.authors[0].profile_name}</p>
            <img src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" class="w-6 h-6">
          </div>
          <p class="text-sm text-[#17171770]">${video.others.views} Views</p>
        </div>
      </div>
    `;
    
    videosContainer.append(videoCard);
  });
};

loadCategories();
