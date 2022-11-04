<template>
  <div>
    <div class="grid grid-cols-6 gap-10">
      <div class="col-start-2 col-span-4 bg-slate-600 p-10 rounded-lg">
        <h4 class="text-5xl text-stone-300 m-4 font-semibold">
          Create Invoice Profile
        </h4>
      </div>
      <div
        class="col-start-2 col-span-3 space-y-4 bg-slate-600 p-10 rounded-lg"
      >
        <label :class="formLabelClass">First Name (Required)</label>
        <input
          v-model="user.FirstName"
          type="text"
          placeholder="First Name"
          :class="formInputClass"
        />
        <label :class="formLabelClass">Last Name (Required)</label>
        <input
          v-model="user.LastName"
          type="text"
          placeholder="Last Name"
          :class="formInputClass"
        />
        <label :class="formLabelClass">Email (Required)</label>
        <input
          v-model="user.Email"
          type="text"
          placeholder="Email"
          :class="formInputClass"
        />
        <label :class="formLabelClass">Address (Required)</label>
        <input
          v-model="user.Address"
          type="text"
          placeholder="Street, Postcode, City, Country"
          :class="formInputClass"
        />
        <label :class="formLabelClass">Phone</label>
        <input
          v-model="user.Phone"
          type="text"
          placeholder="Optional"
          :class="formInputClass"
        />
        <label :class="formLabelClass">Website</label>
        <input
          v-model="user.Website"
          type="text"
          placeholder="Optional"
          :class="formInputClass"
        />
      </div>
      <div
        class="col-start-5 col-span-1 flex flex-col space-y-4 bg-slate-600 p-10 rounded-lg"
      >
        <div>
          <label :class="formLabelClass">Bank Details (Required)</label>
          <input
            v-model="user.BankDetails[0].BankName"
            type="text"
            placeholder="Bank Name"
            :class="formInputClass"
          />
          <input
            v-model="user.BankDetails[0].AccountName"
            type="text"
            placeholder="Account Name"
            :class="formInputClass"
          />
          <input
            v-model="user.BankDetails[0].AccountNumber"
            type="text"
            placeholder="Account Number"
            :class="formInputClass"
          />
          <input
            v-model="user.BankDetails[0].SortCode"
            type="text"
            placeholder="Sort Code"
            :class="formInputClass"
          />
          <input
            v-model="user.BankDetails[0].OtherInfo"
            type="text"
            placeholder="Other Information - Optional"
            :class="formInputClass"
          />
        </div>
        <div>
          <label :class="formLabelClass">Tax Rate</label>
          <input
            v-model="user.TaxRate"
            type="text"
            placeholder="Optional"
            :class="formInputClass"
          />
          <label :class="formLabelClass" class="pt-3">NI Number</label>
          <input
            v-model="user.NINumber"
            type="text"
            placeholder="Optional"
            :class="formInputClass"
          />
        </div>
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
      <div>{{ user }}</div>
      <div>{{ allUsers}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserDto } from "@/api";
import router from "@/router";


export default defineComponent({
  //props: ['id'],
  data() {
    return {
      allUsers: [],
      user: new UserDto(),
      userId: 0,
      submissionSuccess: null,
      loading: false,
      formLabelClass: "block mb-3 text-slate-400 font-semibold",
      formInputClass:
        "border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider",
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers(): void {
      this.allUsers = [];
      this.loading = true;
      fetch("/api/Users")
        .then((r) => r.json())
        .then((json) => {
          this.allUsers = json;
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
        .then((data) => {
          this.userId = data.userId;
          router.push({ name: 'BusinessInfo', params: {userId: data.userId}})
        })
        .catch((error) => {
          console.log(error, error.message);
        });
    },
  },
});
</script>
