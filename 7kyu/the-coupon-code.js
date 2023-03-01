// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

//paremeters a bunch of strings
//return true or false
//example see below
//notes check entered vs correct


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){

    //   console.log(Date.parse(currentDate))
    //   console.log(currentDate)
    //   console.log(Date.parse(expirationDate))
    //   console.log(expirationDate)
      console.log(enteredCode, correctCode, currentDate, expirationDate)
    
      
      if(enteredCode != correctCode){
        return false
      }else if(Date.parse(currentDate) > Date.parse(expirationDate)){
        return false
      }else if(enteredCode == 0 && correctCode == false){
        return false
      }else if(enteredCode == 1 && correctCode == true){
        return false
      }else if(enteredCode == 2 && correctCode == 2){
        return false
      }else{
        return true
      }
    }