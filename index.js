const giftBox = document.getElementById('giftBox');
const message = document.getElementById('message');
const birthdayText = document.getElementById("birthdayText");
const birthdayMusic = document.getElementById("birthdayMusic");

const texts = [
  "Chúc mừng sinh nhật bạn Gia Huy – Người đồng đội trên sân cỏ và tri kỷ tuổi học trò!

Nhớ những ngày tháng “chinh chiến” trên sân đá banh, từng trận đấu không phân thắng bại, từng cú sút căng như đời học sinh năm cuối. Mồ hôi thì chảy như suối, nhưng tình bạn thì cũng vì thế mà lớn dần theo từng nhịp bóng lăn. Mình đâu ngờ những buổi chiều tưởng chỉ đá cho vui lại trở thành một phần ký ức quý giá của tuổi trẻ. 🥳🔥",
  "Rồi những hôm kéo nhau đi Luxury Billiard, đứa thì đánh bi, đứa thì lo canh giờ, đứa thì… bày trò chọc phá. Cứ thế mà quen nhau, gắn bó chẳng cần lý do, chỉ cần vài trận banh, vài cú bi trượt là đủ để trở thành bạn thân. Ngày đó, bọn mình nghĩ rằng thời gian còn dài lắm, chẳng bao giờ phải xa nhau. Ấy vậy mà bây giờ, mỗi đứa đã có một hành trình riêng.

Tuy những giải đấu tụi mình tham gia đều thua te tua, nhưng chính những thất bại đó lại đem đến những cảm xúc và trải nghiệm mà không một cúp vô địch nào có thể sánh bằng. Những trận đấu mà khán giả chẳng ai quan tâm, nhưng tụi mình thì lại hò hét, đá tới bến, và cười như được mùa. Vui nhất là có lần tôi thua vì… không nỡ để bạn bị loại một mình. Đúng là tình bạn đôi khi cũng “hy sinh” âm thầm như vậy đó!

Lúc mới gặp nhau, ai mà ngờ tụi mình sẽ thân thiết đến thế? Thế nhưng ông trời hình như đã sắp đặt để chúng ta có cơ hội ở bên nhau – để rồi từ những người xa lạ, lại trở thành một phần trong cuộc đời nhau. Đừng để tình bạn này chỉ là kỷ niệm, hãy giữ nó sống mãi, bạn nhé.",
  "Sinh nhật này, tớ chúc bạn thật nhiều sức khỏe, hành trình du học ở Trung Quốc thuận buồm xuôi gió, học hành tấn tới. Sau này về thì nhớ giữ lời hứa là buôn thuốc lá cho nhà – không phải chỉ trong nước đâu, mà còn xuất khẩu sang các tiểu hành tinh khác trên vũ trụ!

Dù mai này có xa xôi cách trở, hãy luôn nhớ: xa mặt chứ đừng cách lòng.

Chúc mừng sinh nhật bạn – người bạn không chỉ đá banh cùng, mà còn là một phần của thanh xuân tôi!🎁🎉"
];

giftBox.addEventListener('click', () => {
    giftBox.style.display = 'none';
    setTimeout(() => {
  message.style.display = 'block';
}, 500);
    
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
            confetti.style.animationDelay = `${Math.random() * 5}s`;
            document.body.appendChild(confetti);
        }
    }, 1000);
    birthdayMusic.play();
});

function typeWriter(texts, element, textIndex = 0, i = 0) {
    if (textIndex < texts.length) {
        const text = texts[textIndex];
        if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(texts, element, textIndex, i + 1), 40); // Tốc độ gõ
        } else {
        setTimeout(() => {
            element.innerHTML += '<br>'; // Xóa nội dung cũ
            typeWriter(texts, element, textIndex + 1); // Chuyển sang đoạn văn tiếp theo
        }, 2000); // Đợi 2 giây rồi chuyển quan đoạn khác
        }
    } else {
        // Thêm gif
        setTimeout(() => {
        const imgGift = document.createElement('div');
        imgGift.classList.add('img-gift');
        message.appendChild(imgGift);
        }, 1500);
    }
}

giftBox.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.classList.add("show");

  setTimeout(() => {
    typeWriter(texts, birthdayText);
  }, 3500);
});
