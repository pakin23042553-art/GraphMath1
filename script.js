function draw() {
  // รับค่า a b c (แปลงเป็นตัวเลข)
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);
  let c = Number(document.getElementById("c").value);

  // แสดงสมการ (แค่แสดง ไม่ได้คำนวณ)
  document.getElementById("output").innerHTML =
    `ฟังก์ชันคือ y = ${a}x² + ${b}x + ${c}`;

  // canvas
  const canvas = document.getElementById("graph");
  const ctx = canvas.getContext("2d");

  // ล้างกราฟเก่า
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // จุดกึ่งกลาง
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const scale = 20;

  // แกน X Y
  ctx.beginPath();
  ctx.moveTo(0, centerY);
  ctx.lineTo(canvas.width, centerY);
  ctx.moveTo(centerX, 0);
  ctx.lineTo(centerX, canvas.height);
  ctx.strokeStyle = "gray";
  ctx.stroke();

  // วาดกราฟ
  ctx.beginPath();
  ctx.strokeStyle = "red";

  for (let x = -centerX; x < centerX; x++) {
    let realX = x / scale;
    let y = a * realX * realX + b * realX + c;

    let canvasX = centerX + x;
    let canvasY = centerY - y * scale;

    if (x === -centerX) {
      ctx.moveTo(canvasX, canvasY);
    } else {
      ctx.lineTo(canvasX, canvasY);
    }
  }

  ctx.stroke();
}
