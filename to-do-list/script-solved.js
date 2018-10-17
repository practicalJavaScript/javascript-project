// প্রয়োজনীয় সব ইলিমেন্ট সিলেক্ট করে নিন
const selectItem = document.querySelector('.body ul');
const selectForm = document.querySelector('.todo');

// আইটেমে ক্লিক করলে, ক্লিক হ্যান্ডেলারটা লাগিয়েছি আন-অর্ডার লিস্টের উপরে যাতে সবগুলো চাইল্ড লিস্টকে আমরা অ্যাক্সেস করতে পারি
selectItem.addEventListener('click', (e) => {
  // আইটেমটটা লিস্ট হলেও অ্যাকশন নেওয়া হবে
  if(e.target.tagName==='LI') {
    // লিস্ট কি অলরেডি ডান করা আছে?
    if(e.target.classList.contains('done')) {
      // ডান করা লিস্টে ক্লিক করলে সেটা আন-ডান হয়ে যাবে
      e.target.classList.remove('done');
    } else {
      // ডান নাই এমন লিস্টে ক্লিক করলে সেটা ডান হবে
      e.target.classList.add('done');
    }
  }

  // লিস্টের ভিতরে রিমুভ বাটনে ক্লিক করা হয়েছে কিনা দেখার জন্যে
  if(e.target.classList.contains('remove')) {
    // রিমুভ বাটনে ক্লিক করা হলে সেটার প্যারেন্ট নোডে গিয়ে রিমুভ করে ফেলা
    e.target.parentNode.remove()
  }
})

// ফর্ম সাবমিশন হ্যান্ডেল করার জন্যে
selectForm.addEventListener('submit', (e) => {
  // ফর্মের ডিফল্ট আচরণ বন্ধ করার জন্যে
  e.preventDefault();
  // ইনপুট ফিল্ড থেকে ভ্যালুটা বের করে নিয়ে আসলাম
  const input = e.target.task.value;
  // ইনপুট ভ্যালিডেট করা হচ্ছে, ভ্যালিডেট ফাংশন দিয়ে
  if(validateInput(input, e.target.task)) {
    // ইনপুট ভ্যালিডেট হলে আমাদের লিস্টের প্রথম দিকে নতুন আইটেমটা ঢুকাবো নতুন আইটেমের একটা ফাংশন দিয়ে(পরে ডিফাইন করা হয়েছে)
    selectItem.insertAdjacentElement('afterbegin', newItem(e.target.task.value));
    // সব কাজ শেষে ইনপুট ফিল্ড খালি করে ফেলা
    e.target.task.value = '';
  }
});

// ইনপুট ভ্যালিডেট করা, ইনপুট ক্যালকুলেশন করার মতো কিনা
const validateInput = (input, element) => {
  // ইনপুট ফিল্ডে ইনপুট আছে কিনা?
  if(input) {
    // ইনপুট ফিল্ডে ইনপুট থাকলে যদি এরর ক্লাস থাকে তাহলে সেটা সরিয়ে ফেলা, আর এরর ক্লাস না থাকলেও কোনো সমস্যা নাই
    element.parentNode.classList.remove('error');
    // সত্য রিটার্ণ করা
    return true;
  } else {
    // ইনপুট ফিল্ডে কোনো ইনপুট না থাকলে এরর ক্লাস অ্যাড করা
    element.parentNode.classList.add('error');
    // মিথ্যা রিটার্ণ করা
    return false;
  }
}

// নতুন আইটেম তৈরী করা
const newItem = (content) => {
  // নতুন লিস্ট নেওয়া
  const createAItem = document.createElement('li');
  // কন্টেন্টটা লিস্ট এর ভিতরে দেওয়া
  createAItem.textContent = content;
  // লিস্ট এ রিমুভ বাটন রিমুভ ফাংশনের সাহায্যে অ্যাড করা
  createAItem.insertAdjacentElement('afterbegin', removeButton());
  // এবার নতুন এই ইলিমেন্ট রিটার্ণ করা
  return createAItem;
}

// রিমুভ বাটন তৈরী করা
const removeButton = () => {
  // নতুন একটা ইলিমেন্ট বানানো
  const createRemoveBtn = document.createElement('span');
  // ইলিমেন্ট এ রিমুভ এর ক্লাস লাগানো
  createRemoveBtn.classList.add('remove');
  // ইলিমেন্ট এর ভিতরে ক্রস বাটন অ্যাড করা
  createRemoveBtn.textContent = 'X';
  // এবার নতুন এই ইলিমেন্টটা রিটার্ন করা
  return createRemoveBtn;
}
