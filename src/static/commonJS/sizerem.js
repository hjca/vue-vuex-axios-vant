//移动端适配
export default function phoneSizem() {
  var desW = 750,
    winW = document.documentElement.clientWidth,
    radio = winW / desW;
  document.documentElement.style.fontSize = radio * 100 + 'px';
}
