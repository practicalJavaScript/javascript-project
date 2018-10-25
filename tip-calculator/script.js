// Write your code here
const tipCalculator = document.querySelector('.tip-calculator');
const selectTotal = document.querySelector('.amount_total span');
const selectTipPerPerson = document.querySelector('.tip_per_person span');

const data = {
  bill: 0,
  tip: 0,
  person: 1
}

tipCalculator.addEventListener('change', (e) => {
    // ইনপুট ঠিক আছে কি নেই সেটার উপর ভিত্তি করে এখানে অ্যাকশন নিবো
  if(validateInput(e.target.value)) {
        // ইনপুট ঠিক থাকলে আমরা আমাদের এরর ক্লাস(যদি থাকে) সরিয়ে নিবো 
        // ইনপুট থেকে। এই অতিরিক্ত ক্লাসের সাহায্যে এরর থাকলে আমরা আলাদা 
        // সিএসএস দিয়ে স্টাইলিং করতে পারবো
    e.target.classList.remove('err');

        // এখন আমরা আমাদের টার্গেগেটেড ইলিমেন্টটার ভ্যালু অ্যাসাইন করবো
        // (এজন্যেই ডাটা স্ট্রাকচারের কীগুলোর নাম ইনপুট ফিল্ডের নামের সাথে 
        // মিল রেখেছি), আর সেই ভ্যালো যাতে ফ্লোট নাম্বার হয় সেটাও খেয়াল রাখবো
    data[e.target.name] = parseFloat(e.target.value);
       // টোটাল টিপ কতো আসে সেটা হিসেব করবো
    const tip = (data.bill * data.tip) / 100;
        // টোটাল হিসেব করবো
    let total = data.bill + tip;
        // পার পার্সন হিসেব করবো
    total = total / data.person;
        // টোটালটার দশমিককে ফিক্সড করে দিবো
    total = total.toFixed(2);
        // টোটালটা আমাদের ডকুমেন্ট এ শো করাবো
    selectTotal.textContent = total;

        // পার পার্শনের টিপ কতো আসে সেটা হিসেব করবো
    let tip_per_person = tip / data.person;
        // দশমিককে ফিক্সড করে দিবো
    tip_per_person = tip_per_person.toFixed(2);
       // ডকুমেন্ট এ শো করাবো
    selectTipPerPerson.textContent = tip_per_person;
  } else {
       // ইনপুট ভ্যালিড না হলে এরর ক্লাস লাগাবো ইউজারকে সুন্দর একটা 
       // ভুল হয়েছে ইফেক্ট দেওয়ার জন্যে
    e.target.classList.add('err');
  }
});

const validateInput = input => {
  return (/^\d+$/).test(input);
}
