import { defineStore } from "pinia";
import { restaurants, attractions, checkinSpots } from "@/data";

export const useMainStore = defineStore("main", {
  state: () => ({
    restaurants: restaurants,
    attractions: attractions,
    checkinSpots: checkinSpots,
    loading: false,
    error: null,
  }),

  getters: {
    getRestaurantById: (state) => (id) => {
      return state.restaurants.find((restaurant) => restaurant.id === id);
    },
    getAttractionById: (state) => (id) => {
      return state.attractions.find((attraction) => attraction.id === id);
    },
    getCheckinSpotById: (state) => (id) => {
      return state.checkinSpots.find((spot) => spot.id === id);
    },
  },
});
