// প্রয়োজনীয় সব ইলিমেন্ট সিলেক্ট করে নিন
const selectKeypad = document.querySelector('.keypad');
const selectInput = document.querySelector('input[name=input]');
const selectEqualBtn = document.querySelector('.btn-equal');
const selectResult = document.querySelector('.result p');

// ইনপুট ডাটা
let data = '';

// ইনপুট ফিল্ডের চেঞ্জ ইভেন্ট
selectInput.addEventListener('change', (e) => {
  // ইনপুট ফিল্ডের ইনপুট ডাটাতে স্টোর করে ফেলা
  data = e.target.value;
  // ডাটা অনুযায়ী ইকুয়্যাল বাটনের অবস্থা দেখা
  equalBtnState(e.target.value);
})

// ক্যালকুলেটরের কীপ্যাড বাটনের ইভেন্ট, পুরোটা কীপ্যাডের উপ ইভেন্ট লাগানো হয়েছে
selectKeypad.addEventListener('click', (e) => {
  // ইলিমেন্ট যদি বাটনই হয় তাহলে অ্যাকশন নেওয়া
  if(e.target.tagName==='P') {
    // আমাদের বাটনের কাজ অনুযায়ী ডাটা সেট করা
    switch (e.target.textContent) {
      case 'C':
        // এই কেস হলে ডাটা ক্লিয়ার করা ফেলা
        data = '';
        break;
      case '=':
        // এই কেস হলে ডাটাতে এটার কোনো ইফেক্ট পড়বে না
        break;
      case 'x':
        // এই কেস হলে এটাকে আসল ম্যাথ অপারেটর * এ কনভার্ট করে ফেলা
        data += '*';
        break;
      case '%':
        // এই কেস হলে মূল ক্যালকুলেশনের জন্যে তৈরী করে একটা এক্সপ্রেশন তৈরী করা
        data += '/100*'
        break;
      default:
        // বাই ডিফল্ট বাটনের ভ্যালু ডাটাতে অ্যাড করা
        data += e.target.textContent;
    }
    // ইনপুট ফিল্ডে ডাটা দেখানো
    selectInput.value = data;

    // ডাটা অনুযায়ী ইকুয়্যাল বাটনের অবস্থা দেখা
    equalBtnState(selectInput.value);
  }
})

// ইকুয়্যাল বাটনের ক্লিক হ্যান্ডেল করা
selectEqualBtn.addEventListener('click', () => {
  // আগে শিউর হওয়া ইকুয়্যাল বাটন ডিসাবল না এনাবল
  if(!selectEqualBtn.classList.contains('disabled')) {
    // আমাদের ম্যাথমেটিক্যাল এক্সপ্রেশন তৈরী, এখন এটাকে ইভালিউট করা
    const result = eval(data);
    // এবার রেসাল্ট ইউজারকে দেখানো
    selectResult.textContent = result;
  }
})

// ইকুয়্যাল বাটনের অবস্থার ফাংশন
const equalBtnState = (value) => {
  // ইনপুট ফিল্ডের ডাটা ভ্যালিডেট করা
  if(validateInput(value)) {
    // ইকুয়্যাল বাটন একমাত্র ইনপুট ক্যালকুলেট করার মতো হলেই ক্লিক এনাবল করা
    selectEqualBtn.classList.remove('disabled');
  } else {
    // নাইলে বাটন ডিসাবল করে রাখা
    selectEqualBtn.classList.add('disabled');
  }
}

// ইনপুট ভ্যালিডেট করা, ইনপুট ক্যালকুলেশন করার মতো কিনা
const validateInput = input => {
  // রেগুলার এক্সপ্রেশন দিয়ে ইনপুট যাচাই
  return (/^[-+]?[0-9\.]+?([-+*/x%]+[-+]?[0-9\.]+)*$/).test(input);
}
