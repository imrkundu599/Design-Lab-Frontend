<template>
<div>
  <div style="text-align:center">
    <form @submit.prevent="handleSubmit">
         <div class="container">
        <h3>Sign Up</h3>

        <div class="form-group">
            <!--<label>First Name</label>-->
            <input type="text" class="form-control" v-model="first_name" placeholder="First Name"/>
        </div>
        <div class="form-group">
            <!--<label>Last Name</label>-->
            <input type="text" class="form-control" v-model="last_name" placeholder="Last Name"/>
        </div>
        <div class="form-group">
            <!--<label>Email</label>-->
            <input type="email" class="form-control" v-model="email" placeholder="Email"/>
        </div>
        <div class="form-group">
            <!--<label>Password</label>-->
            <input type="password" class="form-control" v-model="password" placeholder="Password"/>
        </div>
        <div class="form-group">
           <!-- <label>Confirm Password</label>-->
            <input type="password" class="form-control" v-model="password_confirm" placeholder="Confirm Password"/>
        </div>
        <button class="registerbtn">Sign Up</button>
    </div>
    </form>
</div>
</div>
</template>
<script>
//import dropdown from './dropdown'
import axios from 'axios'
export default {
    name: 'Register',
    /*components:{
      dropdown,
    },*/
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirm: ''
        }
    },
    methods:{
        async handleSubmit(){
            const response = await axios.post('http://localhost:8080/user/register', {
                firstName: this.first_name,
                lastName: this.last_name,
                email: this.email,
                password: this.password
                /*password_confirm: this.password_confirm*/
            });
            console.log(response);
            this.$router.push('/login');
        }
    }
}
</script>
<style scoped>
#menu-toggle:checked + #menu {
   display: block;
   background-color: #00BFD8;
 }  

 body {
  font-family: Arial, Helvetica, sans-serif;
  /*background-color: black;*/
}

* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  padding: 16px;
  background-color: white;
}

/* Full-width input fields */
input[type=text], input[type=password], input[type=email] {
  width: 50%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus, input[type=email]:focus{
  background-color: #ddd;
  outline: none;
}
/* Set a style for the submit button */
.registerbtn {
  background-color: #00BFD8;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}
h3 {
    font-size: 25px;
    font-weight: bolder;
    color: #00BFD8;
}
</style> 