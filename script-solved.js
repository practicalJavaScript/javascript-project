// প্রয়োজনীয় সব ইলিমেন্ট সিলেক্ট করে নিন
const tipCalculator = document.querySelector('.tip-calculator');
const selectTotal = document.querySelector('.amount_total span');
const selectTipPerPerson = document.querySelector('.tip_per_person span');

// ডাটা স্ট্রাকচার, ইনপুট ফিল্ডের নামের সাথে মিল রেখে
const data = {
  bill: 0,
  tip: 0,
  person: 1,
  total: 0,
  tip_per_person: 0
}

// ইনপুট ভ্যালিডেট করা, ইনপুট আসলেই নাম্বার কিনা
const validateInput = input => {
  return (/^\d+$/).test(input);
}

// ফর্মের ইনপুট ফিল্ডে কোনোরকম পরিবর্তন আসলেই আমরা অ্যাকশন নিবো
tipCalculator.addEventListener('change', (e) => {
  // ফর্মের ইনপুট ঠিক আছে কি নেই সেটার উপর ভিত্তি করে এখানে অ্যাকশন নিবো
  if(validateInput(e.target.value)) {
    // ইনপুট ঠিক থাকলে আমরা আমাদের এরর ক্লাসটা সরিয়ে নিবো ইনপুট থেকে
    e.target.classList.remove('err');
    // এখন আমরা আমাদের টার্গেগেটেড ইলিমেন্টটার ভ্যালু অ্যাসাইন করবো(এজন্যেই ডাটা স্ট্রাকচারের কীগুলোর নাম ইনপুট ফিল্ডের নামের সাথে মিল রেখেছি), আর সেই ভ্যালো যাতে ফ্লোট নাম্বার হয় সেটাও খেয়াল রাখবো
    data[e.target.name] = parseFloat(e.target.value);
    // টোটাল হিসেব করবো
    data.total = data.bill + (data.bill * data.tip / 100);
    // টোটালটা আমাদের ডকুমেন্ট এ শো করাবো
    selectTotal.textContent = data.total;
    // পার পারসন টিপ কতো করে আসে সেটা হিসেব করবো
    data.tip_per_person = parseFloat(data.tip / data.person);
    // পার পারসন এর টিপ টা ডকুমেন্ট এ দেখাবো
    selectTipPerPerson.textContent = data.tip_per_person;
  } else {
    // ইনপুট ভ্যালিড না হলে এরর ক্লাস লাগাবো ইউজারকে সুন্দর একটা ভুল হয়েছে ইফেক্ট দেওয়ার জন্যে
    e.target.classList.add('err');
  }
});
