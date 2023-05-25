window.onload = () => {
  init()
}

// サイズを指定
const width = window.innerWidth;
const height = window.innerHeight - 200;
let rot = 0;
let rot2 = 0;
let mouseX = 0;

const init = () => {
  const canvasElement = document.querySelector('#canvas');
  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
    alpha: true, //追加 背景を透明にする
    antialias: true, //追加 アンチエイリアス
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  //const camera = new THREE.OrthographicCamera(-480, +480, 270, -270, 1, 2000);
  camera.position.set(0, 0, +1000);

  // 立方体を作成
  const geometry1 = new THREE.BoxGeometry(150, 150, 150);
  const geometry2 = new THREE.BoxGeometry(100, 100, 100);
  const geometry3 = new THREE.BoxGeometry(60, 60, 60);
  const geometry4 = new THREE.BoxGeometry(80, 80, 80);
  const geometry5 = new THREE.BoxGeometry(70, 70, 70);
  const geometry6 = new THREE.BoxGeometry(70, 70, 70);
  const geometry7 = new THREE.BoxGeometry(50, 50, 50);
  const geometry8 = new THREE.BoxGeometry(50, 50, 50);

  // // マテリアルにテクスチャーを設定
  const loadPic = new THREE.TextureLoader();
  let material1 = [
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/python-logo.png') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/python-logo.png') })
  ];
  let material2 = [
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/flask.png') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/flask.png') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') })
  ];
  let material3 = [
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/github.png') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/github.png') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') })
  ];
  let material4 = [
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/html.png') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/html.png') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') })
  ];
  let material5 = [
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/css.png') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/css.png') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') })
  ];
  let material6 = [
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/vscode.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/vscode.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') })
  ];
  let material7 = [
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/Three.js.png') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/Three.js.png') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') })
  ];
  let material8 = [
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/unity.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/unity.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') })
  ];

  // メッシュを作成
  const earthMesh1 = new THREE.Mesh(geometry1, material1);
  const earthMesh2 = new THREE.Mesh(geometry2, material2);
  const earthMesh3 = new THREE.Mesh(geometry3, material3);
  const earthMesh4 = new THREE.Mesh(geometry4, material4);
  const earthMesh5 = new THREE.Mesh(geometry5, material5);
  const earthMesh6 = new THREE.Mesh(geometry6, material6);
  const earthMesh7 = new THREE.Mesh(geometry7, material7);
  const earthMesh8 = new THREE.Mesh(geometry8, material8);

  earthMesh2.position.set(-100, -100, -500);
  earthMesh3.position.set(90, 130, -70);
  earthMesh4.position.set(350, 200, 350);
  earthMesh5.position.set(-400, 60, -50);
  earthMesh6.position.set(100, -100, 500);
  earthMesh7.position.set(300, -250, -250);
  earthMesh8.position.set(-300, 200, 250);

  // 3D空間にメッシュを追加
  scene.add(earthMesh1);
  scene.add(earthMesh2);
  scene.add(earthMesh3);
  scene.add(earthMesh4);
  scene.add(earthMesh5);
  scene.add(earthMesh6);
  scene.add(earthMesh7);
  scene.add(earthMesh8);

  // 平行光源
  const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
  directionalLight.position.set(1, 1, 1);

  // シーンに追加
  scene.add(directionalLight);

  // マウス座標はマウスが動いた時のみ取得できる
  document.addEventListener("mousemove", (event) => {
    mouseX = event.pageX;
  });

  // 毎フレーム時に実行されるループイベントです
  function tick() {
    // マウスの位置に応じて角度を設定
    // マウスのX座標がステージの幅の何%の位置にあるか調べてそれを360度で乗算する
    const targetRot = (mouseX / window.innerWidth) * 360;
    // イージングの公式を用いて滑らかにする
    // 値 += (目標値 - 現在の値) * 減速値
    rot += (targetRot - rot) * 0.02;
    rot2 += 0.1;
    // ラジアンに変換する
    const radian = ((rot + rot2) * Math.PI) / 180;
    // 角度に応じてカメラの位置を設定
    camera.position.x = 1000 * Math.sin(radian);
    camera.position.z = 1000 * Math.cos(radian);
    // 原点方向を見つめる
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // 地球は常に回転させておく
    earthMesh1.rotation.x += 0.005;
    earthMesh1.rotation.y += 0.005;
    earthMesh1.rotation.z += 0.005;

    earthMesh2.rotation.x += 0.005;
    earthMesh2.rotation.y += 0.001;
    earthMesh2.rotation.z += 0.005;

    earthMesh3.rotation.x -= 0.02;
    earthMesh3.rotation.y += 0.002;
    earthMesh3.rotation.z += 0.005;

    earthMesh4.rotation.x += 0.003;
    earthMesh4.rotation.y -= 0.003;
    earthMesh4.rotation.z += 0.003;

    earthMesh5.rotation.x -= 0.001;
    earthMesh5.rotation.y += 0.001;
    earthMesh5.rotation.z -= 0.001;

    earthMesh6.rotation.x -= 0.001;
    earthMesh6.rotation.y -= 0.001;
    earthMesh6.rotation.z += 0.001;

    earthMesh7.rotation.x -= 0.001;
    earthMesh7.rotation.y -= 0.05;
    earthMesh7.rotation.z -= 0.001;

    earthMesh8.rotation.x -= 0.001;
    earthMesh8.rotation.y -= 0.001;
    earthMesh8.rotation.z -= 0.001;
    // レンダリング
    renderer.render(scene, camera);

    requestAnimationFrame(tick);
  }

  tick();

}
