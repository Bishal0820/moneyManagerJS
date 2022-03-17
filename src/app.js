'use strict';

// accounts.forEach((account) => {
//   account.username = account.owner
//   .toLowerCase()
// .split(' ')
// .map((name) => name[0])
// .join('')
// })

// console.log(accountOne);
// console.log(accountTwo);
// const userName = accountOne.owner
// .toLowerCase()
// .split(' ')
// .map((name) => name[0])
// .join('')


// const [,{movements,interestRate}] = accounts;

// console.log(accountOne.movements);
// console.log(movements);

// movements.forEach(function(movement, i) {
//   console.log(`Index ${i} of value: ${movement}`)
// });

// const [, {movements: movementsTwo}] = accounts;

// console.log(movementsTwo);

// movements.forEach(function(mov,i){

//   console.log(mov)
//   const type= mov > 0 ? 'deposit' : 'withdrawal';
//   const html=`<div class="movements__row">
//           <div class="movements__type movements__type--${type}">
//             ${i+1} ${type}
//           </div>
//           <!-- <div class="movements__date">24/01/2037</div> -->
//           <div class="movements__value">${mov}€</div>
//         </div>`;
//   containerMovements.insertAdjacentHTML('afterbegin',html);
// })

const username = (accounts) => {
  accounts.forEach((account) => {
  account.username = account.owner
  .toLowerCase()
.split(' ')
.map((name) => name[0])
.join('')
})
}

console.log('username = ', userName)


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
  labelBalance.textContent=`${movements.reduce((acc,movement) => acc+movement,0)}€`
} 

console.log(movements.filter((movement) => movement < 0))

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


function onClick(a) { 
  a.preventDefault();
  username(accounts)
  const userName=inputLoginUsername.value;
  const pinNumber=inputLoginPin.value;
  const currentAccount = accounts.find(
    (account)=> account.username===userName
  );

  if (currentAccount?.pin===+pinNumber){
    containerApp.style.opacity = 1;
    inputLoginUsername.value=inputLoginPin.value='';
    
    labelWelcome.textContent=`Welcome ${currentAccount.owner}`;  
    console.log(currentAccount);  
    displayMovements(currentAccount.movements)
    displayBalance(currentAccount.movements)
    getInAndOut(currentAccount.movements,currentAccount.interestRate)
  }
  

}

btnLogin.addEventListener('click',onClick);