<template>
<div>
    <header class="lg:px-16 px-6 flex flex-wrap items-center bg-custom lg:py-0 py-2">
    <div class="flex-1 flex justify-between items-center">
      <!--<a href="#">
        <img src="logo.jpg" width="70" height="70">
    </a>-->
  </div>

   <label for="menu-toggle" class="pointer-cursor lg:hidden block"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
  <input class="hidden" type="checkbox" id="menu-toggle" />

  <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
    <nav>
      <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
        <li><router-link class="lg:p-2 py-3 px-0 block border-b-2 border-transparent text-white hover:border-indigo-400" to="/" exact>Home</router-link></li>
        <li><a href="javascript:void(0)" @click="handleClick" class="lg:p-2 py-3 px-0 block border-b-2 border-transparent text-white hover:border-indigo-400">Logout</a></li>
        <!--<li><router-link class="lg:p-2 py-3 px-0 block border-b-2 border-transparent text-white hover:border-indigo-400" to="/services" exact>Services</router-link></li>-->
        <!--<li><router-link class="lg:p-2 py-3 px-0 block border-b-2 border-transparent text-white hover:border-indigo-400" to="/pricing" exact>Pricing</router-link></li>
        <li><router-link class="lg:p-2 py-3 px-0 block border-b-2 border-transparent text-white hover:border-indigo-400" to="/request" exact>Request</router-link></li>-->
         <li><a class="lg:p-2 py-3 px-0 block border-b-2 border-transparent text-white hover:border-indigo-400" href="#">Accounts</a></li>
         <dropdown/>
        <!--<li><router-link class="lg:p-2 py-3 px-0 block border-b-2 border-transparent text-white hover:border-indigo-400" to="/contact"  exact>Contact</router-link></li>-->
      </ul>
    </nav>
    <a href="#" class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
           <span class="fa-stack">
                   <i class="fas fa-circle text-custom fa-stack-2x"></i>
                      <i class="fab fa-facebook-f  fa-stack-1x fa-inverse"></i>
               </span>
             <span class="fa-stack">
                   <i class="fas fa-circle text-custom fa-stack-2x"></i>
                   <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
               </span>
    </a>
  </div>
  </header>

   <div style="text-align:center">
    <form @submit.prevent="handleSubmit">
        <div class="container">
        <!--<div v-if="error" class="alert alert-danger" role="alert">
            {{error}}
        </div>-->
        <h3>Fill up the form for calculating interest for Recurring Deposit Account</h3>

        <div class="form-group">
            <!--<label>Email</label>-->
            <input type="number" class="form-control" v-model="amount" placeholder="Enter the amount you want to deposit"/>
        </div>
        <div class="form-group">
            <!--<label>Password</label>-->
            <input type="number" class="form-control" v-model="time" placeholder="Enter the time duration in year"/>
        </div>
        <div class="form-group">
            <!--<label>Password</label>-->
            <input type="number" class="form-control" v-model="age" placeholder="Enter your age"/>
        </div>
        <button class="calbtn">Calculate Interest</button>
    </div>
    </form>
    <h3 v-if="res">Interest : Rs. {{res.interest}}      Total Amount: Rs. {{res.total_ammount}}</h3>
</div>
</div>
</template>

<script>
import dropdown from './dropdown'
import axios from 'axios'
export default {
    name: 'RD',
     components:{
      dropdown,
    },
    data() {
        return {
            amount: '',
            time: '',
            age: '',
            accountType:'rd',
            ageGroup:'',
            url: '',
            res: ''
        }
    },
    methods: {
        async handleSubmit() {
           /* try{*/
           if (this.age>=18 && this.age<=45) {
             this.ageGroup='18-45'
           } else {
             this.ageGroup='45-60'
           }
          this.url = "http://localhost:8080/user/interestCalculate?accountType="+this.accountType+
          "&ageGroup="+this.ageGroup+"&principle="+this.amount+"&time="+this.time
          console.log(this.url);
          console.log(localStorage.getItem('jwt'));
          
           const response = await axios.get(this.url,{
                                          headers: {
                                              Authorization: 'Bearer ' + localStorage.getItem('jwt') ,
                                          }
                                        });
            console.log(response);
            this.res = response.data;
            
            //this.$router.push('/userhome');
           
            /*}catch(error) {
                this.error ='Invalid email or password'}*/
            },
           // console.log(response),
      //  }
      handleClick() {
       localStorage.removeItem('jwt');
       this.$router.push('/');
     }
    }

   // }
/*}*/
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
 input[type=number] {
  width: 50%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=number]:focus {
  background-color: #ddd;
  outline: none;
}
/* Set a style for the submit button */
.calbtn {
  background-color: #00BFD8;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 0.9;
}

.calbtn:hover {
  opacity: 1;
}
h3 {
    font-size: 25px;
    font-weight: bolder;
    color: #00BFD8;
}
</style>