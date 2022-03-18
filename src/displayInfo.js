const displayMovements = (movements) => {
    movements.forEach(function(mov,i){
    const type= mov > 0 ? 'deposit' : 'withdrawal';
    const html=`<div class="movements__row">
            <div class="movements__type movements__type--${type}">
              ${i+1} ${type}
            </div>
            <!-- <div class="movements__date">24/01/2037</div> -->
            <div class="movements__value">${mov}€</div>
          </div>`;
    containerMovements.insertAdjacentHTML('afterbegin',html);
    })
  }
  
  const displayBalance = (movements) => {
    const balance = movements.reduce((acc,movement) => acc+movement,0);
    labelBalance.textContent=`${balance}€`
    currentAccount.balance=balance;
  } 
  
  //console.log(movements.filter((movement) => movement < 0))
  
  const getInAndOut = (movements, interestRate) => {
    
    const inValue = movements
      .filter((movement) => movement > 0)
      .reduce((acc,mov) => acc + mov, 0);  
    
    const outValue = movements
      .filter((movement) => movement < 0)
      .reduce((acc,mov) => acc + mov, 0);
  
    const interest = movements
       .filter((move)=>move>0)
       .map((deposite)=>+(deposite*(interestRate / 100)).toFixed(2))
       .reduce((acc,mov) => acc + mov, 0);
    
    labelSumIn.textContent = `${inValue}€`;
    labelSumOut.textContent = `${outValue}€`;
    labelSumInterest.textContent = `${interest}€`;
  }