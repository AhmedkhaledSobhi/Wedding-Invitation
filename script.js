const eventDate = new Date("2025-10-19T07:00:00").getTime();
const countdownEl = document.getElementById("countdown");


// Share function
function shareInvitation() {
  if (navigator.share) {
    navigator
      .share({
        title: "دعوة زفاف",
        text: "أنت مدعو لحضور زفاف أحمد وفاطمة! 💍",
        url: window.location.href,
      })
      .then(() => alert("تمت المشاركة بنجاح!"))
      .catch((err) => console.log("خطأ في المشاركة:", err));
  } else {
    alert("المشاركة غير مدعومة على هذا المتصفح.");
  }
}

(function () {
  video.muted = true;
  video.play().catch((err) => {
    console.warn("تشغيل الصوت فشل بدون تفاعل المستخدم", err);
  });
})();

function updateCountdown() {

  const now = new Date().getTime();
  const distance = eventDate - now;
  // // إزالة كتم الصوت وتشغيل الفيديو
  // video.muted = false;
  // video.play().catch((err) => {
  //   console.warn("تشغيل الصوت فشل بدون تفاعل المستخدم", err);
  // });
  if (distance <= 0) {
    document.querySelector(".countdown-container").innerHTML = "🎉 لقد بدأ الزفاف! نتمنى لكم حياة سعيدة 💍";
    return;
  }
  video.muted = false;
  video.play().catch((err) => {
    console.warn("تشغيل الصوت فشل بدون تفاعل المستخدم", err);
  });

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hrs;
  document.getElementById("minutes").innerText = mins;
  document.getElementById("seconds").innerText = secs;
}

setInterval(updateCountdown, 1000);
// ---------------------
