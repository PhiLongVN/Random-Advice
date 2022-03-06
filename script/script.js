let advice = [
  {
    id: 1,
    content:
      'Nếu cuộc đời ném vào mặt bạn một quả chanh, hãy vắt nước chanh thay vì chê nó chua quá',
  },
  {
    id: 2,
    content:
      'Khi bạn không thể tìm thấy ánh nắng mặt trời, hãy là ánh nắng mặt trời.',
  },
  {
    id: 3,
    content: 'Cách tốt nhất để cổ vũ bản thân là cố gắng cổ vũ người khác',
  },
  {
    id: 4,
    content:
      'Hạnh phúc là một sự lựa chọn. Đau khổ cũng là một sự lựa chọn. Hãy lựa chọn khôn ngoan',
  },
  {
    id: 5,
    content:
      'Chất lượng hạnh phúc của bạn phụ thuộc vào chất lượng suy nghĩ của bạn',
  },
  {
    id: 6,
    content: 'Hôm nay, tôi chọn là phiên bản tốt nhất của chính mình.',
  },
  {
    id: 7,
    content:
      'Hạnh phúc đạt được khi bạn ngừng chờ đợi điều đó xảy ra và thực hiện các bước để biến nó thành hiện thực',
  },
  {
    id: 8,
    content:
      'Mọi người sẽ quên những gì bạn nói, quên những gì bạn đã làm, nhưng họ sẽ không bao giờ quên cảm xúc mà bạn mang lại cho họ',
  },
  {
    id: 9,
    content:
      'Hãy tử tế, vì tất cả những người bạn gặp đều đang chiến đấu một trận chiến khó khăn của họ',
  },
  {
    id: 10,
    content:
      'Mục đích chính của chúng ta trong cuộc sống này là giúp đỡ người khác. Và nếu bạn không thể giúp họ, ít nhất đừng làm họ bị thương',
  },
  {
    id: 11,
    content: 'Hãy là sự thay đổi mà bạn muốn thấy trên thế giới',
  },
  {
    id: 12,
    content: 'Không một hành động tử tế nào, dù nhỏ đến đâu, lại bị lãng phí',
  },
  {
    id: 13,
    content:
      'Trong đời người có ba điều quan trọng: thứ nhất là sống tử tế, thứ hai là tử tế, và thứ ba là phải tử tế',
  },
  {
    id: 14,
    content: 'Không ai trở nên nghèo khó bằng việc chia sẻ và cho đi',
  },
  {
    id: 15,
    content: 'Hãy sống mỗi ngày như thể đó là ngày cuối cùng của bạn.',
  },
  {
    id: 16,
    content:
      'Cuộc sống là 10% những gì xảy ra với bạn và 90% là cách bạn phản ứng với nó',
  },
];
let num;
let num2;
let text;
let numbeAdvice;

const dice = document.querySelector('.dice');
const title = document.querySelector('h2');
const para = document.querySelector('p');

dice.addEventListener('click', randomPara);

function randomPara() {
  num = Math.floor(Math.random() * (16 - 1 + 1)) + 1;
  if (num2 == num) {
    randomPara();
  } else {
    num2 = num;
    text = advice[num2]['content'];
    numbeAdvice = advice[num2]['id'];

    title.innerHTML = `ADVICE #${numbeAdvice}`;
    para.innerHTML = text;
  }
}

randomPara();
