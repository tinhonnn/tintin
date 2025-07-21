<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Happy Birthday Gia Huy!</title>
  <style>
    body {
      margin: 0;
      font-family: "Segoe UI", sans-serif;
      background: linear-gradient(to bottom right, #fdd9e3, #fceabb);
      overflow-x: hidden;
      text-align: center;
    }

    #giftBox {
      width: 150px;
      cursor: pointer;
      margin: 150px auto 20px;
      transition: transform 0.3s ease;
    }

    #giftBox:hover {
      transform: scale(1.1);
    }

    #message {
      display: none;
      padding: 20px;
      max-width: 700px;
      margin: auto;
    }

    #birthdayText {
      font-size: 18px;
      white-space: pre-wrap;
      text-align: left;
    }

    .confetti {
      position: fixed;
      top: 0;
      width: 10px;
      height: 10px;
      z-index: 999;
      animation: fall 3s linear infinite;
      border-radius: 50%;
    }

    @keyframes fall {
      to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
      }
    }

    .gif {
      margin-top: 30px;
      width: 250px;
    }
  </style>
</head>
<body>

  <img id="giftBox" src="https://i.imgur.com/1J6z2tV.png" alt="Gift Box" />
  <div id="message">
    <div id="birthdayText"></div>
    <img class="gif" src="https://media.giphy.com/media/3ohs7KViF7Yv4dzFFW/giphy.gif" alt="Birthday Gif" />
  </div>

  <audio id="birthdayMusic" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>

  <script>
    const giftBox = document.getElementById('giftBox');
    const message = document.getElementById('message');
    const birthdayText = document.getElementById("birthdayText");
    const birthdayMusic = document.getElementById("birthdayMusic");

    const texts = [
      `Chúc mừng sinh nhật bạn Gia Huy – Người đồng đội trên sân cỏ và tri kỷ tuổi học trò!

Nhớ những ngày tháng “chinh chiến” trên sân đá banh, từng trận đấu không phân thắng bại, từng cú sút căng như đời học sinh năm cuối. Mồ hôi thì chảy như suối, nhưng tình bạn thì cũng vì thế mà lớn dần theo từng nhịp bóng lăn. 🥳🔥`,
      `Rồi những hôm kéo nhau đi Luxury Billiard, đứa thì đánh bi, đứa thì lo canh giờ, đứa thì… bày trò chọc phá. Cứ thế mà quen nhau, gắn bó chẳng cần lý do, chỉ cần vài trận banh, vài cú bi trượt là đủ để trở thành bạn thân.

Tuy những giải đấu tụi mình tham gia đều thua te tua, nhưng chính những thất bại đó lại đem đến những cảm xúc và trải nghiệm mà không một cúp vô địch nào có thể sánh bằng.`,
      `Sinh nhật này, tớ chúc bạn thật nhiều sức khỏe, hành trình du học ở Trung Quốc thuận buồm xuôi gió, học hành tấn tới.

Dù mai này có xa xôi cách trở, hãy luôn nhớ: xa mặt chứ đừng cách lòng. Chúc mừng sinh nhật bạn – người bạn không chỉ đá banh cùng, mà còn là một phần của thanh xuân tôi! 🎁🎉`
    ];

   giftBox.addEventListener('click', () => {
  console.log("🎁 Gift box clicked!");
      giftBox.style.display = 'none';
      message.style.display = 'block';

      // Play music
      birthdayMusic.play();

      // Confetti
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        document.body.appendChild(confetti);
      }

      // Start typewriter
      setTimeout(() => {
        typeWriter(texts, birthdayText);
      }, 1000);
    });

    function typeWriter(texts, element, textIndex = 0, i = 0) {
      if (textIndex < texts.length) {
        const text = texts[textIndex];
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          setTimeout(() => typeWriter(texts, element, textIndex, i + 1), 30);
        } else {
          element.innerHTML += "\n\n";
          setTimeout(() => typeWriter(texts, element, textIndex + 1), 1500);
        }
      }
    }
  </script>
</body>
</html>
