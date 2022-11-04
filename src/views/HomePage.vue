<template>
    <div >
       <button>
            <router-link :to="{ name: 'UserForm' }">Create New User</router-link>
       </button>
       <button>
            <router-link :to="{ name: 'HelloWorld' }">Existing User</router-link>
       </button>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        methods: {
        },
    });
</script>