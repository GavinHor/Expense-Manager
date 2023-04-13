import { claims } from "./claims";

  export const myClaims=[{
      id: 'T023AB',
      type: 'Travel',
      amount: '£ 59.99',
      submission: '21/02/2023',
      expDate: '10/02/2023',
      status: 'PENDING',
      employee: 'Asia Belfiore',
  } , {
    id: 'MC445AB',
    type: 'Meal',
    amount: '£ 11.00',
    submission: '21/02/2023',
    expDate: '10/02/2023',
    status: 'PENDING',
    employee: 'Asia Belfiore',
  }
  , {
    id: 'MC445AB',
    type: 'Meal',
    amount: '£ 11.00',
    submission: '21/02/2023',
    expDate: '10/02/2023',
    status: 'APPROVED',
    employee: 'Asia Belfiore',
  }]

  export const myEmps=[{
    id: 'AQ001',
    name: 'Ammar Quadir',
    role: 'Line Manager',
    pendingClaims: '2',
    score: '81%',
    lm: 'Asia Belfiore',
  },{
    id: 'GH202',
    name: 'Gavin Hor',
    role: 'Consultant',
    pendingClaims: '3',
    score: '77%',
    lm: 'Asia Belfiore',
  },{
    id: 'DM907',
    name: 'Daniel Mascerne',
    role: 'Internal Staff',
    pendingClaims: '2',
    score: '79%',
    lm: 'Asia Belfiore',
  }  ,{
    id: 'VV300',
    name: 'Vasileios Vogiatzis',
    role: 'Internal Staff',
    pendingClaims: '2',
    score: '79%',
    lm: 'Asia Belfiore',
  },{
    id: 'MAI347',
    name: 'Mohammed Al-Islam',
    role: 'Internal Staff',
    pendingClaims: '2',
    score: '79%',
    lm: 'Asia Belfiore',
  }
  ,{
    id: 'SB006',
    name: 'Sidharth Bhat',
    role: 'Internal Staff',
    pendingClaims: '2',
    score: '79%',
    lm: 'Asia Belfiore',
  }]

  export const userDetails =[{
    id: '1',
    name: 'Asia Belfiore',
    email: 'a.belfiore@FDM.uk',
    password: 'ciao',
    initials: 'AB',
    role: 'Consultant',
    numOfEmps: '3',
    allowance: '£ 800',
    spent: '£ 627.44',
    score: '91%',
    currency: '£ - GBP',
    
}];