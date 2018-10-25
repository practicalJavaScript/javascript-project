// Write your code here
const selectItem = document.querySelector('.body ul');
const selectForm = document.querySelector('.todo');

selectItem.addEventListener('click', (e) => {
  // আইটেমটটা লিস্ট হলেই অ্যাকশন নেওয়া হবে
  if(e.target.tagName==='LI') {
    // লিস্ট কি অলরেডি কমপ্লিট করা আছে?
    if(e.target.classList.contains('done')) {
      // কমপ্লিট করা লিস্টে ক্লিক করলে সেটা ইন- কমপ্লিট হয়ে যাবে
      e.target.classList.remove('done');
    } else {
      // কমপ্লিট নাই এমন লিস্টে ক্লিক করলে সেটা কমপ্লিট হবে
      e.target.classList.add('done');
    }
  }

  // লিস্টের ভিতরে রিমুভ বাটনে ক্লিক করা হয়েছে কিনা দেখার জন্যে
  if(e.target.classList.contains('remove')) {
    // রিমুভ বাটনে ক্লিক করা হলে সেটার প্যারেন্ট নোডে গিয়ে রিমুভ করে ফেলবো
    e.target.parentNode.remove()
  }
})

selectForm.addEventListener('submit', (e) => {
  // ফর্মের ডিফল্ট আচরণ বন্ধ করবো
  e.preventDefault();
  // ইনপুট ফিল্ড থেকে ভ্যালুটা বের করে নিয়ে আসবো
  const input = e.target.task.value;
  // ইনপুট ভ্যালিডেট করা হচ্ছে, ভ্যালিডেট ফাংশন দিয়ে যেটা একটা পরেই ডিফাইন করবো
  if(validateInput(input, e.target.task)) {
    // ইনপুট ভ্যালিডেট হলে আমাদের লিস্টের প্রথম দিকে নতুন আইটেমটা ঢুকাবো নতুন আইটেমের একটা ফাংশন দিয়ে যেটা আমরা পরে ডিফাইন করবো 
    selectItem.insertAdjacentElement('afterbegin', newItem(e.target.task.value));
    // সব কাজ শেষে ইনপুট ফিল্ড খালি করে ফেলবো
    e.target.task.value = '';
  }
});

const validateInput = (input, element) => {
  // ইনপুট ফিল্ডে ইনপুট আছে কিনা সেটা দেখবো
  if(input) {
    // ইনপুট ফিল্ডে ইনপুট থাকলে যদি এরর ক্লাস থাকে তাহলে সেটা সরিয়ে ফেলবো
    element.parentNode.classList.remove('error');
    // এবং সত্য রিটার্ণ করবো
    return true;
  } else {
    // ইনপুট ফিল্ডে কোনো ইনপুট না থাকলে এরর ক্লাস অ্যাড করবো
    element.parentNode.classList.add('error');
    // এবং মিথ্যা রিটার্ণ করা
    return false;
  }
}


const newItem = (content) => {
  // নতুন লিস্ট ইলিমেন্ট তৈরী করবো
  const createAItem = document.createElement('li');
  // কন্টেন্টটা আমাদের তৈরীকৃত লিস্ট আইটেমে দিবো
  createAItem.textContent = content;
  // লিস্ট এর ভিতরে সবার আগে রিমুভ বাটন রিমুভ ফাংশনের সাহায্যে অ্যাড করবো, এই রিমুভ ফাংশন আমরা একটু পরেই ডিফাইন করবো
  createAItem.insertAdjacentElement('afterbegin', removeButton());
  // এবার নতুন এই ইলিমেন্টটা রিটার্ণ করবো
  return createAItem;
}

const removeButton = () => {
  // নতুন একটা span ইলিমেন্ট তৈরী করবো 
  const createRemoveBtn = document.createElement('span');
  // ইলিমেন্ট এ রিমুভ এর ক্লাস লাগাবো 
  createRemoveBtn.classList.add('remove');
  // ইলিমেন্ট এর ভিতরে একটা ক্রস বাটন অ্যাড করবো 
  createRemoveBtn.textContent = 'X';
  // এবার নতুন এই ইলিমেন্টটা রিটার্ন করবো
  return createRemoveBtn;
}
