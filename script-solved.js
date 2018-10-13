// প্রয়োজনীয় সব ইলিমেন্ট সিলেক্ট করে নিন
const stats = document.querySelector('.stats');
const btnStart = document.querySelector('button[name=start]');
const btnClick = document.querySelector('button[name=click]');

// ডিফল্ট উইন স্কোর সেট করুন
const winScore = 10;

// একটা কাউন্ট ভ্যারিয়েবল সেট করুন
let count = 0;

// স্টার্ট বাটনে ক্লিক ইভেন্ট লাগান
btnStart.addEventListener('click', () => {
  // ক্লিক করলেই গেইম শুরু হওয়ার ফাংশন চলবে
  start();
});

// ক্লিক বাটনে ক্লিক ইভেন্ট লাগান
btnClick.addEventListener('click', () => {
  // ক্লিক করলেই কাউন্ট এক করে বাড়বে
  count++;
  // কাউন্টটা শো করান
  stats.textContent = count;
});

// গেইম শুরু করার ফাংশন
const start = () => {
  // কাউন্ট জিরোতে সেট হবে
  count = 0;

  // কাউন্টের টেক্সটাও জিরোতে সেট হবে
  stats.textContent = count;

  // ক্লিক বাটন থেকে ডিসাবল্ড অবস্থা সরিয়ে ফেলা
  btnClick.removeAttribute('disabled');

  // কাউন্ট শুরু করা
  startCounting();
}

// কাউন্ট শুরু করার ফাংশন
const startCounting = () => {
  // সেট টাইম আউট ফাংশন, ২ সেকেন্ড এর জন্যে অপেক্ষা করবে
  setTimeout(() => {
    // উইন হয়েছে কিনা দেখার জন্যে
    if(isWin()) {
      // উইন হলে উইনের টেক্সট দেখানো
      stats.textContent = 'You Won!';
    } else {
      // উইন না হলে উইন হয়নি সে টেক্সট দেখানো
      stats.textContent = 'You Lost!';
    }
    // উইন হয়ে গেলে ক্লিক বাটন ডিসাবল করে ফেলা
    btnClick.setAttribute('disabled', true);
  }, 2000);
}

// উইন হয়েছে কিনা চেক করুন
const isWin = () => {
  // স্কোর চেক করা
  if(count < winScore) {
    // কাউন্ট উইনস্কোর থেকে ছোটো হলে উইন হয়নি
    return false;
  } else {
    // কাউন্ট উইনস্কোর থেকে বড় হলে উইন হয়েছে
    return true;
  }
}
