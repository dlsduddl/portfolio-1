console.clear();
$("#fullpage").fullpage({
  menu: ".line"
});

$(".circle")
  .circleProgress({
  
    // 그래프 시작 위치
    // Math.PI = 3.14
    startAngle: -Math.PI/2,
    // 방향 반전 여부
    reverse:true,
    // 그래프 사이즈
    size: 160,
    // 그래프 모서리, 지울 시 각진 모양
    lineCap:'round',
    // 그래프 두께
    thickness: 38,
    // 그래프 색상
    fill: {
      gradient: ["skyblue", "#AF06FF"]
    }
  })

  // 그래프 수치 출력
  .on("circle-animation-progress", function (event, progress, stepValue) {
    $(this)
      .find(".percent")
      .text(parseInt(stepValue * 100) + "%");
  });
$(".circle-1")
  .circleProgress({
    // 그래프 수치
    value: 0.9,
  })
$(".circle-2")
  .circleProgress({
    // 그래프 수치
    value: 0.8,
  })
$(".circle-3")
  .circleProgress({
    // 그래프 수치
    value: 0.7,
  })
$(".circle-4")
  .circleProgress({
    // 그래프 수치
    value: 0.8,
  })
$(".circle-5")
  .circleProgress({
    // 그래프 수치
    value: 0.7,
  })
$(".circle-6")
  .circleProgress({
    // 그래프 수치
    value: 0.7,
  })

// section-5
function sendEmailForm(form) {
  if ( form.email.value.length == 0 ) {
    alert('이메일 주소를 입력해주세요.');
    form.email.focus();
    return;
  }
  
  if ( form.message.value.length == 0 ) {
    alert('메세지를 입력해주세요.');
    form.message.focus();
    return;
  }
  
  form.submit();
  
  form.email.value = '';
  form.message.value = '';
  form.submit.innerHTML = '전송되었습니다.';
  form.submit.disabled = true;
}