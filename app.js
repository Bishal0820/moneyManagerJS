const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const accountOne = {
  owner: 'Bishal Paudel',
  movements: [200, -300, 400, 800, 300],
  interrestRate: 1.5,
  pin: 1234,
};


const userName = accountOne.owner
.toLowerCase()
.split(' ')
.map((name) => name[0])
.join('')

console.log('username = ', userName)
const accountTwo = {
  owner: 'Mokshada Upreti',
  movements: [1000, -600],
  interrestRate: 1.1,
  pin: 2222,
};

const accounts = [accountOne, accountTwo];

accounts.forEach((account) => {
  account.username = account.owner
  .toLowerCase()
.split(' ')
.map((name) => name[0])
.join('')
})

console.log(accountOne);
console.log(accountTwo);


const [{movements}] = accounts;

// console.log(accountOne.movements);
console.log(movements);

// movements.forEach(function(movement, i) {
//   console.log(`Index ${i} of value: ${movement}`)
// });

// const [, {movements: movementsTwo}] = accounts;

// console.log(movementsTwo);

movements.forEach(function(mov,i){

  console.log(mov)
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

