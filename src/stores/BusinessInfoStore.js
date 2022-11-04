import { defineStore } from 'pinia'; //takes two arguments - string of storename, and store config object

export const useBusinessInfoStore = defineStore('BusinessInfo', {
    state(){
        return {
            businesses: [],
            clients: [],
        }
    }
});

