import { BusinessDto, ClientDto, UserDto } from "@/api";
import router from "@/router";
import UserApiService from "@/services/UserApiService";
import { defineStore } from "pinia"; //takes two arguments - string of storename, and store config object

export const useUserStore = defineStore("UserStore", {
  state() {
    //function to return an object which contains the state, similar to data property
    return {
      user: new UserDto(),
    };
  },
  getters: {
    firstName(): string {
      return this.user.FirstName;
    },
  },
  actions: {
    async getUser(): Promise<UserDto> {
      if (this.user.UserId){
        const fetchedUser = await UserApiService.fetchUser(this.user.UserId);
        this.setUser(fetchedUser);
        return fetchedUser;
      }
      return new UserDto();
    },
    setUser(user: UserDto): void {
      this.user = user;
    },
    async addUserToDatabase() {
        UserApiService.addNewUser(this.user)
        .then((responseId) => {
          this.user.UserId = responseId;
          router.push('BusinessInfo');
        })
    },
    async updateUserInDatabase(){
        this.user.Email = "THIS IS MY NEW EMAIL AFTER PUT"
        UserApiService.updateUser(this.user)
    },
    async addBusinessesToDatabase(){
        if (this.user.Businesses){
            const responseStatus = await UserApiService.addBusinesses(this.user.Businesses);
            if (responseStatus){
              router.push('WelcomeUser');
            }
        }
    },
    addBusiness(): void { 
        if (this.user.UserId){
            this.user.Businesses?.push(new BusinessDto('', this.user.UserId));
        }
    },
    startAddingClients(index: number): void {
      if (this.user.Businesses != null) {
        this.user.Businesses[index].Clients = [new ClientDto()];
      }
    },
    addClient(index: number): void {
      if (this.user.Businesses) {
        const business = this.user.Businesses[index];
        if (business.Clients) {
          business.Clients.push(new ClientDto());
        }
      }
    },
  },
});
