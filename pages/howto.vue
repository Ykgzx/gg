<template>
    <div class="container">
       <div class="close-button">X</div>
       <div class="content">
           <div class="usage-guidelines text">Usage Guidelines</div>
           <div class="usage-steps text">Usage Steps</div>
           <div class="writer-agreement text">Writer Agreement</div>
           <div class="faq text">Frequently Asked Questions</div>
           <div class="issue-report text">Issue Reporting</div>
       </div>
   </div>
</template>

<style>
.container {
   
   position: fixed;
   top: 20px; 
   right: 20px; 
   width: 360px;
   height: 483px;
   background: #FFFFFF;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 20px;
}

@media only screen and (min-width: 768px) {
   .container {
     top: 40px; 
     right: 40px; 
   }
 }

 .close-button {
   position: relative;
   width: 16px;
   height: 30px;
   left: 328px;
   top: 13px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 300;
   font-size: 25px;
   line-height: 30px;
   color: #000000;
}

.content {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 0px;
   gap: 50px;
   position: relative;
   width: 210px;
   height: 355px;
   left: 47px;
   top: 65px;
   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.text {
   font-family: 'Inder';
   font-style: normal;
   font-weight: 400;
   font-size: 25px;
   line-height: 31px;
   color: #000000;
}

.usage-guidelines {
   width: 300px;
   height: 31px;
}

.usage-steps {
   width: 172px;
   height: 31px;
}

.writer-agreement {
   width: 210px;
   height: 31px;
}

.faq {
   width: 300px;
   height: 31px;
}

.issue-report {
   width: 360px;
   height: 31px;
   color: #B30C0C;
}
</style>