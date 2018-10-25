// Write your code here
const stats = document.querySelector('.stats'); // যেখানে ক্লিকের কাউন্ট দেখাবে
const btnStart = document.querySelector('button[name=start]'); // স্টার্ট বাটন 
const btnClick = document.querySelector('button[name=click]'); // ক্লিক বাটন

const winScore = 10; // উইন স্কোর
let count = 0; // কাউন্ট করার ভ্যারিয়েবল

btnStart.addEventListener('click', () => {
  start();
});

btnClick.addEventListener('click', () => {
      // কাউন্ট এক করে বাড়ানো 
   count++;
  // কাউন্টটা ইউআইতে দেখানো 
   stats.textContent = count;
});

const start = () => {
  // কাউন্ট জিরোতে সেট করা
  count = 0;
  // এখন এই কাউন্টটাকে ইউআইতে দেখানো
  stats.textContent = count;
  // ক্লিক বাটন থেকে ডিসাবল্ড অবস্থা সরিয়ে ফেলা
  btnClick.removeAttribute('disabled');
  // কাউন্ট শুরু করা
  startCounting();
}

const startCounting = () => {
  // সেট টাইম আউট ফাংশন ২ সেকেন্ড এর জন্যে অপেক্ষা করবে
  setTimeout(() => {
    // উইন হয়েছে দেখবো
    if(isWin()) {
      // উইন হলে উইনের টেক্সট দেখাবো
      stats.textContent = 'You Won!';
    } else {
      // উইন না হলে উইন হয়নি সে টেক্সট দেখাবো
      stats.textContent = 'You Lost!';
    }
    // ফলাফল দেখানো হয়ে গেলে ক্লিক বাটন ডিসাবল করে ফেলবো
    btnClick.setAttribute('disabled', true);
  }, 2000);
}

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