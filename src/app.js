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

let currentAccount;

//console.log('username = ', userName)

const updateUI = () => {
  displayMovements(currentAccount.movements)
  displayBalance(currentAccount.movements)
  getInAndOut(currentAccount.movements,currentAccount.interestRate)
}

function onClick(a) { 
  a.preventDefault();
  username(accounts)
  const userName=inputLoginUsername.value;
  const pinNumber=inputLoginPin.value;
  currentAccount = accounts.find(
    (account)=> account.username===userName
  );

  if (currentAccount?.pin===+pinNumber){
    containerApp.style.opacity = 1;
    inputLoginUsername.value=inputLoginPin.value='';
    
    labelWelcome.textContent=`Welcome ${currentAccount.owner}`;  
    console.log(currentAccount);  
    updateUI();

    btnTransfer.addEventListener('click',(e)=>{
      e.preventDefault();      
      const transferAmount=+inputTransferAmount.value;
      
      const receiverAccount=accounts.find(
        (account)=>account.username===inputTransferTo.value
        );

        if (
          transferAmount > 0 &&
          currentAccount.balance >= transferAmount &&
          receiverAccount &&
          receiverAccount.username !== currentAccount.username
        ) {
          receiverAccount.movements.push(transferAmount);
          currentAccount.movements.push(-transferAmount);
        }
      console.log('receive = ',receiverAccount.movements);
      console.log('sent = ',currentAccount.movements);
      updateUI();

      })
  }
  

}

btnLogin.addEventListener('click',onClick);
