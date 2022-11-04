import { UserDto } from '@/api';
import { defineStore } from 'pinia'; //takes two arguments - string of storename, and store config object

export const useUserStore = defineStore('UserStore', {
    state(){
        //function to return an object which contains the state, similar to data property
        return {
            user: new UserDto()
        }
    }
});

