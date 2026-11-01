function triggerWarning() {
  const msg = document.getElementById('warningMsg');
  if (msg) {
    msg.style.display = 'block'; // إظهار الرسالة
    setTimeout(() => {
      msg.style.display = 'none'; // إخفاؤها بعد 3 ثوانٍ تلقائياً
    }, 3000);
  }
}
