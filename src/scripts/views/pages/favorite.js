import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Favorite = {
  async render() {
    return `
      <div class="content">
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector("#restaurants");

    if (restaurants.length == 0) {
      restaurantContainer.innerHTML = "Tidak ada restaurant untuk ditampilkan";
    } else {
      restaurantContainer.innerHTML = "";
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML +=
          createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
