<template>
  <div claas="relative">
    <button @click="isOpen = !isOpen" class="block h-4 w-4 rounded overflow-hidden border-2  focus:outline-none focus:border-white">
    </button>
    <button v-if="isOpen" @click="isOpen = false" class="absolute top-0 right-0 bottom-0 left-0 h-full w-full"></button>
    <div v-if="isOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
        <ul>
        <li><router-link class="lg:p-2 py-3 px-0 block border-b-2 border-transparent text-custom hover:border-indigo-400" to="/sb" exact>Savings Account</router-link></li>
        <li><router-link class="lg:p-2 py-3 px-0 block border-b-2 border-transparent text-custom hover:border-indigo-400" to="/fd" exact>Fixed Deposit Account</router-link></li>
        <li><router-link class="lg:p-2 py-3 px-0 block border-b-2 border-transparent text-custom hover:border-indigo-400" to="/rd" exact>Recurring Deposit Account</router-link></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default { 
    data(){
        return{
            isOpen: false
        }
    }
}

</script>