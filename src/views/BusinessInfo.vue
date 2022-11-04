<template>
  <div>
    <div class="grid grid-cols-6 gap-10">
      <div class="col-start-2 col-span-4 bg-slate-600 p-10 rounded-lg">
        <h4 class="text-5xl text-stone-300 m-4 font-semibold">
          Business Profile for {{ user.FirstName }}
        </h4>
        <p>Logged in as USER</p>
      </div>

      <div
        class="col-start-2 col-span-4 space-y-4 bg-slate-600 p-10 rounded-lg"
        v-for="index in businessRows" :key="index"
      >
        <label :class="formLabelClass"
          >Please list a business or area that you will be producing
          invoices for:</label
        >
        <div>
          <input
            v-model="business"
            type="text"
            placeholder="For example, Fitness Instructor, Plumber, Interior Design, Tutoring"
            :class="formInputClass"
          />
        </div>
        <div
        v-show="addClients"
        class="col-start-2 col-span-4 space-y-4 bg-slate-600 p-10 rounded-lg bg-slate-200"
      >
        <label :class="formLabelClass"
          >Please set out the details for any clients belonging to this:</label
        >
        <div v-for="index in clientRows" :key="index">
          <label :class="formLabelClass" class="italic text-sky-300"
            >Client {{ index }}</label
          >
          <input
            v-model="clients[index-1].ClientName"
            type="text"
            placeholder="Client Name"
            :class="formInputClass"
          />
          <input
            v-model="clients[index-1].ClientPhone"
            type="text"
            placeholder="Client Phone"
            :class="formInputClass"
          />
          <input
            v-model="clients[index-1].ClientAddress"
            type="text"
            placeholder="Client Address"
            :class="formInputClass"
          />
          <input
            v-model="clients[index-1].ClientEmail"
            type="text"
            placeholder="Client Email"
            :class="formInputClass"
          />
          <input
            v-model="clients[index-1].ClientContact"
            type="text"
            placeholder="Client Contact"
            :class="formInputClass"
          />
        </div>
        <button
          @click="addClientRow()"
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
        <button
          @click="addBusinessRow()"
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
          <span>Add another Business</span>
        </button>
      </div>
      
      
      <div class="col-start-2 col-span-4">
          <button
            type="submit"
            class="w-full text-ceenter px-4 py-3 bg-slate-400 rounded-md shadow-md text-slate-700 font-semibold"
            @click="addUserToDatabase()"
          >
            Submit
          </button>
        </div>

    <div>{{ userId }}</div>
      <div>{{ user }}</div>
      <div>{{ business }}</div>
      <div>{{ clients }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserDto, ClientDto, BusinessDto } from "@/api";
import { useUserStore } from '../stores/UserStore.ts';

export default defineComponent({
  //props: ['id'],
  data() {
    return {
    userId: this.$route.params.userId,
      businessRows: 1,
      clientRows: 1,
      addClients: true,
      allUsers: [],
      user: new UserDto(),
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
    this.fetchUser();
  },
  methods: {
    addBusinessRow(): void {
        const newBusiness = { BusinessName: this.business, Clients: this.clients};
      if (this.user.Businesses == null){
        this.user.Businesses = [ newBusiness ]
      } else {
        this.user.Businesses.push(newBusiness);
      }
      this.businessRows += 1;
      console.log(this.user);
    },
    addClientRow(): void {
      this.clientRows += 1;
      this.clients.push(new ClientDto());
    },
    fetchUser(): void {
      this.loading = true;
      this.user.Businesses = new Array<BusinessDto>();
      fetch("/api/Users/" + this.userId)
        .then((r) => r.json())
        .then((json) => {
          this.user = json as UserDto;
          this.loading = false;
          return;
        });
    },
    addUserToDatabase() {
      console.log(this.user);
      fetch("/api/Users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.user),
      })
        .then((response) => response.json())
        .then((data) => (this.userId = data.id))
        .catch((error) => {
          console.log(error, error.message);
        });
    },
  },
});
</script>
