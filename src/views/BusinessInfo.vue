<template>
  <div>
    <div class="grid grid-cols-6 gap-10">
      <div class="col-start-2 col-span-4 bg-slate-600 p-10 rounded-lg">
        <h4 class="text-5xl text-stone-300 m-4 font-semibold">
          Business Profile for {{ user.FirstName }}
        </h4>
      </div>

      <div
        class="col-start-2 col-span-4 space-y-4 bg-slate-600 p-10 rounded-lg"
        v-for="(business, index) in user.Businesses"
        :key="index"
      >
        <label :class="formLabelClass"
          >Please list a business or area that you will be producing invoices
          for:</label
        >
        <div>
          <input
            v-model="business.BusinessName"
            type="text"
            placeholder="For example, Fitness Instructor, Plumber, Interior Design, Tutoring"
            :class="formInputClass"
          />
        </div>
        <button
          v-show="business.Clients == null"
          @click="startAddingClients(index)"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          <span>Click to start adding Clients for this Business</span>
        </button>
        <div
          v-show="business.Clients"
          class="col-start-2 col-span-4 space-y-4 bg-slate-600 p-10 rounded-lg bg-slate-200"
        >
          <label :class="formLabelClass"
            >Please set out the details for any regular clients belonging to
            this business:</label
          >
          <div v-for="(client, index) in business.Clients" :key="index">
            <label :class="formLabelClass" class="italic text-sky-300"
              >Client {{ index }}</label
            >
            <input
              v-model="client.ClientName"
              type="text"
              placeholder="Client Name"
              :class="formInputClass"
            />
            <input
              v-model="client.ClientPhone"
              type="text"
              placeholder="Client Phone"
              :class="formInputClass"
            />
            <input
              v-model="client.ClientAddress"
              type="text"
              placeholder="Client Address"
              :class="formInputClass"
            />
            <input
              v-model="client.ClientEmail"
              type="text"
              placeholder="Client Email"
              :class="formInputClass"
            />
            <input
              v-model="client.ClientContact"
              type="text"
              placeholder="Client Contact"
              :class="formInputClass"
            />
          </div>
          <button
            @click="addClient(index)"
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            <span>Add another Client</span>
          </button>
        </div>
        <div>
          <button
            @click="addBusiness()"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            <span>Add another Business</span>
          </button>
        </div>
      </div>

      <div class="col-start-2 col-span-4">
        <button
          type="submit"
          class="w-full text-ceenter px-4 py-3 bg-slate-400 rounded-md shadow-md text-slate-700 font-semibold"
          @click="addBusinessesToDatabase()"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { BusinessDto } from "@/api";
// import { defineComponent } from "vue";
// import { ClientDto, BusinessDto } from "@/api";
import { useUserStore } from "../stores/UserStore";
import { onBeforeMount } from "vue-demi";

export default {
  setup() {
    const userStore = useUserStore();
    const user = userStore.user;
    const { addBusiness, addClient, startAddingClients, updateUserInDatabase, addBusinessesToDatabase } = userStore;
    const formLabelClass = "block mb-3 text-slate-400 font-semibold";
    const formInputClass =
      "border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider";

    onBeforeMount(() => {
        if (user.UserId){
            user.Businesses = [new BusinessDto('', user.UserId)];
        }
    });

    return {
      userStore,
      user,
      formLabelClass,
      formInputClass,
      addBusiness,
      addClient,
      startAddingClients,
      updateUserInDatabase,
      addBusinessesToDatabase
    };
  },
};

/*

export default defineComponent({
  //props: ['id'],
  data() {
    return {
      addClients: true,
      allUsers: [],
      user: useUserStore().user,
      business: '',
      clients: [new ClientDto()],
      submissionSuccess: null,
      loading: false,
      formLabelClass: "block mb-3 text-slate-400 font-semibold",
      formInputClass:
        "border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider",
    };
  },
  beforeMount() {
    this.user.Businesses = [new BusinessDto()];
  },
  methods: {
    // addBusiness(){
    //     useUserStore.add
    // },
    // addClient(index: number): void {
    //   if (this.user.Businesses != null){
    //     this.user.Businesses[index].Clients.push(new ClientDto());
    //   }
    // },
    addUserToDatabase() {
    //   console.log(this.user);
    //   fetch("/api/Users", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(this.user),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => (this.userId = data.id))
    //     .catch((error) => {
    //       console.log(error, error.message);
    //     });
    },
  },
});

*/
</script>
