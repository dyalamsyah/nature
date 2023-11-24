import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (restaurant) => {
  const imageUrl = `${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}`;
  return `
    <h1 class="restaurant-name">${restaurant.name}</h1>
    <img class="lazyload restaurant-image" src="${imageUrl}" alt="${
    restaurant.name
  }" />
    <div class="restaurant-info">
      <h3>Kategori</h3>
      <p>${restaurant.categories
        .map((category) => category.name)
        .join(", ")}</p>
      <h3>Deskripsi</h3>
      <p>${restaurant.description}</p>
      <h3>Kota</h3>
      <p>${restaurant.city}</p>
      <h3>Alamat</h3>
      <p>${restaurant.address}</p>
      <h3>Menu</h3>
      <h4>Makanan:</h4>
      <p>${restaurant.menus.foods.map((food) => food.name).join(", ")}</p>
      <h4>Minuman:</h4>
      <p>${restaurant.menus.drinks.map((drink) => drink.name).join(", ")}</p>
      <h3 class="comment">Review</h3>
      <div class="restaurant-reviews">
          ${restaurant.customerReviews
            .map(
              (review) => `
            <div class="restaurant-review">
              <p>"${review.review}"</p>
              <p>by ${review.name}</p>
              <p><small> On ${review.date}</small></p>
            </div>`
            )
            .join("")}
      </div>
    </div>
  `;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-header">
      <img class="lazyload restaurant-header_poster" alt="${
        restaurant.name
      }" src="${
  restaurant.pictureId
    ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
    : "https://picsum.photos/id/666/800/450?grayscale"
}">
      <div class="restaurant-rating">
        <p>⭐️<span class="restaurant-item_header_rating_score">${
          restaurant.rating
        }</span></p>
      </div>
    </div>
    <div class="restaurant-content">
      <h2 class="restaurant-name"><a href="#/detail/${restaurant.id}">${
  restaurant.name
}</a></h2>
      <p class="restaurant-detail_description">${restaurant.description.slice(
        0,
        108
      )}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
