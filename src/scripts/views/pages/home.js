import RestaurantsSource from '../../data/restaurants-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="hero">
        <h2>Nature's welcomes you to embark on a culinary adventure with our handpicked restaurant listings. Discover
        unique dining
        experiences, savor global flavors, and let the magic of food and nature unite.</h2>
      </div>
      <div class="welcome">
        <h2>Explore Restaurant</h2>
      </div>
      <div class="restaurant-list">
        <!-- Daftar restoran akan ditampilkan di sini -->
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantsSource.RestaurantsList();
    const restaurantList = document.querySelector('.restaurant-list');

    restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('div');
      restaurantItem.classList.add('restaurant-item');

      // Menggunakan template yang sudah diimpor
      restaurantItem.innerHTML = createRestaurantItemTemplate(restaurant);

      restaurantList.appendChild(restaurantItem);
    });
  },
};

export default Home;
