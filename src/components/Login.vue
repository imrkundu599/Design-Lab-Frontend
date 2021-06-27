<template>
<div>

   <div style="text-align:center">
    <form @submit.prevent="handleSubmit">
        <div class="container">
        <div v-if="error" class="alert alert-danger" role="alert">
            {{error}}
        </div>
        <h3>Login</h3>

        <div class="form-group">
            <!--<label>Email</label>-->
            <input type="email" class="form-control" v-model="email" placeholder="Email"/>
        </div>
        <div class="form-group">
            <!--<label>Password</label>-->
            <input type="password" class="form-control" v-model="password" placeholder="Password"/>
        </div>
        <button class="loginbtn">Login</button>
        <!--<h3 v-if="auth">Hi {{auth.first_name}}</h3>
        <h3 v-if="!auth">Incorrect Password</h3>-->

        <!--<p class="forgot-password text-right">
          <router-link to="forgot">Forgot password?</router-link>
        </p>-->
    </div>
    </form>
</div>
</div>
</template>
<script>
//import dropdown from './dropdown'
import axios from 'axios'
export default {
    name: 'Login',
     /*components:{
      dropdown,
    },*/
    data() {
        return {
            email: '',
            password: '',
            error: ''
           // auth: ''
        }
    },
    methods: {
        
        async handleSubmit() {
           try{
           const response = await axios.post('http://localhost:8080/user/authenticate', {
                email: this.email,
                password: this.password
            });
            console.log(response);
            
            localStorage.setItem('jwt', response.data.jwt);
            /*localStorage.setItem('userId', response.data.userId);
            localStorage.setItem('email', response.data.email);
            localStorage.setItem('firstName', response.data.firstName);*/
            //this.$store.dispatch('user', response.data.user);
            this.$router.push('/userhome');
           /* console.log(localStorage.getItem('jwt'));
            const respon = await axios.get('http://localhost:8080/user/authenticate',{
                                          headers: {
                                              Authorization: 'Bearer ' + localStorage.getItem('jwt') ,
                                          }
                                        });
           this.auth = respon.data;*/
            }catch(error) {
                this.error ='Invalid email or password'}
        }
           // console.log(response),
        }
        

    }
/*}*/
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
 input[type=password], input[type=email] {
  width: 50%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=password]:focus, input[type=email]:focus{
  background-color: #ddd;
  outline: none;
}
/* Set a style for the submit button */
.loginbtn {
  background-color: #00BFD8;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 0.9;
}

.loginbtn:hover {
  opacity: 1;
}
h3 {
    font-size: 25px;
    font-weight: bolder;
    color: #00BFD8;
}
</style>