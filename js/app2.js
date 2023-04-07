/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

window.addEventListener('load', function(){
  //下記particles-js↓のところはHTMLで指定したidと合わせてください
	particlesJS('particles-js2',{
		//パーティクルの設定
		"particles": {
			//シェイプの数
			"number": {
				"value": 30,//シェイプの数
				"density": {
					"enable": true,//密度を変更する
					"value_area": 200//密集度
				}
			},
			//色
			"color": {
				// "value": ["26B7BC","008FB3","FAF44B","5B98D2","4DE2D6"]
				// "value": ["1B245D","28232B","FFFFFF"]
				"value": ["000000"]
			},
			//シェイプの形状
			"shape": {
				"type": "circle",//シェイプの形(円)
				"stroke": {
					"width": 0,//外線つけない
					"color": "#ffcc00"//つける場合の線色
					},
				//※typeがpolygon(多角形)の場合
				"polygon": {
					"nb_sides": 5//角の数
					},
				//typeがimageの場合
				"image": {
					"src": "img/gazou.png",//画像の指定
					"width": 100,//画像の幅
					"height": 100//画像の高さ
				}
			},
			//シェイプの透明度
			"opacity": {
				"value": .5,//透明度(1で不透明)
				"random": false,//透明度をランダムにしない
				//randomがtrueの場合
				"anim": {
					"enable": false,//透明度のアニメーションをしない
					"speed": 1,//アニメーションスピード
					"opacity_min": 0.1,//透明度の最小値
					"sync": false//各シェイプを同時に動かさない
				}
			},
			//シェイプの大きさ
			"size": {
				"value": 5,//大きさ
				"random": true,//大きさをランダムにする falseで均一
				"anim": {
					"enable": false,//シェイプの大きさをアニメーションしない
					"speed": 10,//アニメーションのスピード
					"size_min": 0.1,//サイズの最小値
					"sync": false//各シェイプを同時に動かさない
				}
			},
			//シェイプ間を結ぶ線
			"line_linked": {
				"enable_auto": true,//線をつけない
				"distance": 150,//繋がりの数
				"color": "#000000",//線の色
				"opacity": .6,//透明度　1で不透明
				"width": 1//線の太さ
			},
			//シェイプの動き
			"move": {
				"enable": true,//動きを付ける
				"speed": 7,//シェイプが動くスピード数値が大きいと早い
				"direction": "none",//動きの方向(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-left)
				"straight": false,//動きを動きを止めるか否か
				"out_mode": "bounce",//外枠に達した際のシェイプの動き　bounce→跳ね返る　out→フレームアウト
				/*シェイプを引き寄せる*/
				"attract": {
					"enable": false,//引き寄せない
					"rotateX": 600,//横軸の指定
					"rotateY": 1200//横軸の指定
				}
			}
		},
		//相互作用
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				//カーソルを乗せた時の動き
				"onhover": {
					"enable": true,//無効
					"mode": "repulse"//enableがtrueの場合の動き(下の★のリストの名前入れるとその動きが発動)
				},
				//クリックしたときの動き
				"onclick": {
					"enable": false,//無効
					"mode": "push"//(下の★のリストの名前入れるとその動きが発動)
				},
				"resize":true//リサイズしたとき拡縮しない
			},
			//各モード設定した場合の動き
			"modes": {
				//★シェイプとカーソルの間に線ができる
				"grab": {
					"distance": 100,//カーソルからの反応距離
					"line_linked": {
					"opacity": 1//線の不当明度
					}
				},
				//★シェイプが膨らむ
				"bubble": {
					"distance": 400,//カーソルからの反応距離
					"size": 40,//膨らむ際の大きさ
					"duration": 2,//持続時間
					"opacity": 8,//透明度
					"speed": 3//速度
					},
				//★シェイプに触れるとカーソルから逃げる
				"repulse": {
					"distance": 100//カーソルからの反応距離
					},
				//★シェイプを増やす
				"push": {
					"particles_nb": 4//数
					},
				//★シェイプを減らす
				"remove": {
					"particles_nb": 2//数
				}
			}
		},
			"retina_detect": true,//Retina Display(*高画素密度のディスプレイ)を対応する
		}
	); 
}); 