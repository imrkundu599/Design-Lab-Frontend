<template>
<body>
  <header class="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2">
    <div class="flex-1 flex justify-between items-center">
      <!--<a href="#">
        <img src="logo.jpg" width="70" height="70">
    </a>-->
  </div>

   <label for="menu-toggle" class="pointer-cursor lg:hidden block"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
  <input class="hidden" type="checkbox" id="menu-toggle" />

  <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
    
  </div>
  </header>
  <main>
    <section class="presentation">
      <div class="introduction">
        <div class="intro-text">
          <h1 class="start">Interest Calculation System</h1>
          <h2 class="page">For Retail Bank</h2>
           <p class="hom text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg">Use Interest Calculation System to calculate interest </p>
            <p class="hom text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg">for your Savings,Fixed Deposit,Recurring Deposit account</p>
        </div>
        <div class="cta">
          <router-link class="cta-select" to="/register" tag="button">Sign Up</router-link>
          <router-link class="cta-select" to="/login" tag="button">Login</router-link>
          <!--<button class="cta-select">Discover</button>-->
        </div>
      </div>
        <div class="cover">
          <img src="bank.svg">
        </div>
     </section>
      <div class="invisible sm:invisible md:invisible lg:visible xl:visible">
     <img class ="bk" src="header-background.jpg" >
     </div>

  </main>
  </body> 

</template>

<script>
/*import dropdown from './dropdown'*/
export default {
   name: 'Home',
  /* components: {
       dropdown,
     },*/
 data() {
   return{ 
   }
 },
} 
</script>

<style scoped>
#menu-toggle:checked + #menu {
   display: block;
   background-color: #00BFD8;
 }
 .main img {
   display: inline-flex;
}
.presentation {
	display: flex;
	width: 90%;
	margin: auto;
	min-height: 80vh;
  align-items: center;
  
}
.introduction {
	flex: 1;
}
.intro-text h1 {
	font-size: 40px;
  font-weight: bolder;
  line-height: 20pt;
  color: #00BFD8;
  margin-left: 80px;

}
.intro-text h2 {
	font-size: 35px;
  font-weight: bolder;
  line-height: 50pt;
  margin-left: 80px;
}
.intro-text p {
	margin-top: 5px;
  color: #585772;
  line-height: 15pt;
  font-family: Raleway;
  margin-left: 80px;
  font-weight: bolder;
}
.cta {
  padding: 50px 0px 0px 0px;
  margin-top: -20px;
}
.cta-select {
	border: 1px solid #00BFD8;
  background-color: #00BFD8;
	padding: 10px 30px;
	color: #fff;
	text-decoration: none;
  transition: 0.6s ease;
  font-family: Raleway; 
  border-radius: 20px;
	width: 150px;
	height: 50px;
	cursor: pointer;
  font-size: 16px;
  line-height: 20pt;
  margin-left: 80px;
}
.cover {
	flex: 1;
	display: flex;
	justify-content: center;
	height: 70vh;
}
.cover img {
	height: 100%;
}
.bk{
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: -1; 
  opacity: 0.7;
  height: 100% 
}
.heading{
    margin-top: -40px;
  }
@keyframes drop {
	0% {
		opacity: 0;
		transform: translateY(-80px);
	}
	100% {
		opacity: 1;
		transform: translateY(0px);
	}
}

@media screen and (max-width: 1024px) {
	.presentation {
		flex-direction: column;
	}
	.introduction {
		margin-top: 5vh;
		/*text-align: center;*/
	}
	.intro-text h1 {
    font-size: 30px;
    margin-left: 20px;
  }
  .intro-text h2 {
    font-size: 30px;
     margin-left: 20px;
  }
	.intro-text p {
    font-size: 9px;
    line-height: 10pt;
     margin-left: 20px;
  }
  .cta{
    padding: 30px 0px 0px;
  }
	.cta-select {
     margin-left: 100px;
     margin-top: 10px;
     font-size: 12px;
     width: 110px;
     height: 45px;
  }
  .cover img {
    height: 65%; 
  }
  .cover{
    margin-top: 40px;
    margin-left: -30px;
  }
	.bk {
		opacity: 0.2;
  }
  .heading{
    margin-top: -125px;
  }
  .main img{
    margin-left: -38px;
    margin-right: 45px;
  }
  .hom{
    text-align: center;
  }
  .start{
    text-align: center;
  }
  .page{
    text-align: center;
  }
  .main{
    text-align: center;
    /*padding-right: 20px;*/
  }
  .lg5{
    padding-right: 20px;
    padding-left: 10px;
  }
  .lg6{
    padding-left: 5px;
    padding-right: 30px;
  }
}
</style>

