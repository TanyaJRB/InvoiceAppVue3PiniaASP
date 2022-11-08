<template>
  <div>
    {{ user }}
  </div>
</template>

<script lang="ts">
import { UserDto } from "@/api";
import { useUserStore } from "../stores/UserStore";
import { onBeforeMount, ref } from 'vue';
//import { onServerPrefetch } from "vue";

export default {
  setup() {
    const userStore = useUserStore();
    //   const user = userStore.user;
    const { getUser } = userStore;
    let user = ref();
   
    // onServerPrefetch(async () => {
    //   user = (await getUser()) as UserDto;
    // });
    onBeforeMount(async () => {
      user.value = (await getUser()) as UserDto;
    });

    return {
      userStore,
      user,
      getUser,
    };
  },
};
</script>
