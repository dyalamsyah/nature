const { async } = require("regenerator-runtime");
const assert = require("assert");

Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("Showing Empty Liked Restaurant", async ({ I }) => {
  I.see("Tidak ada restaurant untuk ditampilkan", "#restaurants");
});
Scenario("Showing One Restaurant Liked", async ({ I }) => {
  I.see("Tidak ada restaurant untuk ditampilkan", "#restaurants");
  I.amOnPage("/");

  I.seeElement(".restaurant-name a");
  const firstRestaurant = locate(".restaurant-name a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".restaurant-item");
  const likedRestaurantTitle = await I.grabTextFrom(".restaurant-name");

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario("Unliking One Restaurant", async ({ I }) => {
  I.see("Tidak ada restaurant untuk ditampilkan", "#restaurants");
  I.amOnPage("/");

  I.seeElement(".restaurant-name a");
  const firstRestaurant = locate(".restaurant-name a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".restaurant-item");
  const likedRestaurantTitle = await I.grabTextFrom(".restaurant-name");

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(firstRestaurant);
  I.click("#likeButton");
  I.amOnPage("/#/favorite");
  I.see("Tidak ada restaurant untuk ditampilkan", "#restaurants");
});
