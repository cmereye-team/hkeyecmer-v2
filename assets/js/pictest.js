var CDN_DOMAIN = 'https://e.yiyantong.vip';
export default [ 
    {
      id: "02",
      title: "散光測試",
      questions: [ {
              type: "closeeye",
              remind: "請閉上您的右眼",
              image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
          }, {
              type: "image",
              question: "請問您看到了什麼？",
              image: CDN_DOMAIN+"/images/02-1.png"
          }, {
              type: "question",
              question: "請問您看到了什麼？",
              options: [ "圓心處的線條更粗", "各方向線條粗細一致" ],
              whicheye: "leftEyeScore",
              score: [ 1, 0 ]
          }, {
              type: "image",
              question: "請問您看到了什麼？",
              image: CDN_DOMAIN+"/images/02-2.png"
          }, {
              type: "question",
              question: "請問您看到了什麼？",
              options: [ "圓心處的線條更粗", "各方向線條粗細一致" ],
              whicheye: "leftEyeScore",
              score: [ 1, 0 ]
          }, {
              type: "closeeye",
              remind: "請閉上您的左眼",
              image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
          }, {
              type: "image",
              question: "請問您看到了什麼？",
              image: CDN_DOMAIN+"/images/02-1.png"
          }, {
              type: "question",
              question: "請問您看到了什麼？",
              options: [ "圓心處的線條更粗", "各方向線條粗細一致" ],
              whicheye: "rightEyeScore",
              score: [ 1, 0 ]
          }, {
              type: "image",
              question: "請問您看到了什麼？",
              image: CDN_DOMAIN+"/images/02-2.png"
          }, {
              type: "question",
              question: "請問您看到了什麼？",
              options: [ "圓心處的線條更粗", "各方向線條粗細一致" ],
              whicheye: "rightEyeScore",
              score: [ 1, 0 ]
      } ]
    }, {
      id: "03",
      title: "近視遠視測試",
      questions: [ {
              type: "closeeye",
              remind: "請閉上您的右眼",
              image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
          }, {
              type: "image",
              question: "請觀察兩側字元的清晰度",
              image: CDN_DOMAIN+"/images/03-05-1.png"
          }, {
              type: "question",
              question: "請問哪個背景中的字元更清晰明亮？",
              options: [ "紅區字元", "綠區字元", "完全一樣" ],
              whicheye: "leftEyeScore",
              score: [ 1, 10, 100 ]
          }, {
              type: "image",
              question: "請觀察兩側字元的清晰度",
              image: CDN_DOMAIN+"/images/03-05-2.png"
          }, {
              type: "question",
              question: "請問哪個背景中的字元更清晰明亮？",
              options: [ "紅區字元", "綠區字元", "完全一樣" ],
              whicheye: "leftEyeScore",
              score: [ 1, 10, 100 ]
          }, {
              type: "image",
              question: "請觀察兩側字元的清晰度",
              image: CDN_DOMAIN+"/images/03-05-3.png"
          }, {
              type: "question",
              question: "請問哪個背景中的字元更清晰明亮？",
              options: [ "紅區字元", "綠區字元", "完全一樣" ],
              whicheye: "leftEyeScore",
              score: [ 1, 10, 100 ]
          }, {
              type: "closeeye",
              remind: "請閉上您的左眼",
              image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
          }, {
              type: "image",
              question: "請觀察兩側字元的清晰度",
              image: CDN_DOMAIN+"/images/03-05-1.png"
          }, {
              type: "question",
              question: "請問哪個背景中的字元更清晰明亮？",
              options: [ "紅區字元", "綠區字元", "完全一樣" ],
              whicheye: "rightEyeScore",
              score: [ 1, 10, 100 ]
          }, {
              type: "image",
              question: "請觀察兩側字元的清晰度",
              image: CDN_DOMAIN+"/images/03-05-2.png"
          }, {
              type: "question",
              question: "請問哪個背景中的字元更清晰明亮？",
              options: [ "紅區字元", "綠區字元", "完全一樣" ],
              whicheye: "rightEyeScore",
              score: [ 1, 10, 100 ]
          }, {
              type: "image",
              question: "請觀察兩側字元的清晰度",
              image: CDN_DOMAIN+"/images/03-05-3.png"
          }, {
              type: "question",
              question: "請問哪個背景中的字元更清晰明亮？",
              options: [ "紅區字元", "綠區字元", "完全一樣" ],
              whicheye: "rightEyeScore",
              score: [ 1, 10, 100 ]
          }
      ]
    }, {
      id: "04",
      title: "黃斑病變測試",
      questions: [ {
              type: "closeeye",
              remind: "請閉上您的右眼",
              image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
          }, {
              type: "image",
              question: "圖中的線條和方格是什麼樣的？",
              image: CDN_DOMAIN+"/images/04-1.png"
          }, {
              type: "question",
              question: "圖中的線條和方格是什麼樣的？",
              options: [ "有線條波浪或彎曲", "方格大小不一樣", "有線條丟失模糊或變色", "線條筆直且方格整齊" ],
              whicheye: "leftEyeScore",
              score: [ 1, 1, 1, 0]
          }, {
              type: "image",
              question: "圖中的線條和方格是什麼樣的？",
              image:CDN_DOMAIN+"/images/04-2.png"
          }, {
              type: "question",
              question: "圖中的線條和方格是什麼樣的？",
              options: [ "有線條波浪或彎曲", "方格大小不一樣", "有線條丟失模糊或變色", "線條筆直且方格整齊" ],
              whicheye: "leftEyeScore",
              score: [ 1, 1, 1, 0]
          }, {
              type: "closeeye",
              remind: "請閉上您的左眼",
              image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
          }, {
              type: "image",
              question: "圖中的線條和方格是什麼樣的？",
              image: CDN_DOMAIN+"/images/04-1.png"
          }, {
              type: "question",
              question: "圖中的線條和方格是什麼樣的？",
              options: [ "有線條波浪或彎曲", "方格大小不一樣", "有線條丟失模糊或變色", "線條筆直且方格整齊" ],
              whicheye: "rightEyeScore",
              score: [ 1, 1, 1, 0]
          }, {
              type: "image",
              question: "圖中的線條和方格是什麼樣的？",
              image: CDN_DOMAIN+"/images/04-2.png"
          }, {
              type: "question",
              question: "圖中的線條和方格是什麼樣的？",
              options: [ "有線條波浪或彎曲", "方格大小不一樣", "有線條丟失模糊或變色", "線條筆直且方格整齊" ],
              whicheye: "rightEyeScore",
              score: [ 1, 1, 1, 0]
      } ]
    }, {
      id: "09",
      title: "視神經測試",
      questions: [ {
              type: "closeeye",
              remind: "請閉上您的右眼",
              image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
          }, {
              type: "image",
              question: "緊盯圓心，觀察紅色",
              image: CDN_DOMAIN+"/images/09-1.png"
          }, {
              type: "image",
              question: "緊盯圓心，觀察紅色",
              image: CDN_DOMAIN+"/images/09-2.png"
          }, {
              type: "question",
              question: "前後兩張圖中的紅色一樣嗎？",
              options: [ "中央和後方的紅色上面有陰影", "後方的紅色偏橙色", "後方的紅色偏粉色", "中央和後方的紅色顏色一致", "都不是" ],
              whicheye: "leftEyeScore",
              score: [ 1, 1, 1, 0, 1 ]
          }, {
              type: "closeeye",
              remind: "請閉上您的左眼",
              image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
          }, {
              type: "image",
              question: "緊盯圓心，觀察紅色",
              image: CDN_DOMAIN+"/images/09-1.png"
          }, {
              type: "image",
              question: "緊盯圓心，觀察紅色?",
              image: CDN_DOMAIN+"/images/09-2.png"
          }, {
              type: "question",
              question: "前後兩張圖中的紅色一樣嗎？",
              options: [ "中央和後方的紅色上面有陰影", "後方的紅色偏橙色", "後方的紅色偏粉色", "中央和後方的紅色顏色一致", "都不是" ],
              whicheye: "rightEyeScore",
              score: [ 1, 1, 1, 0, 1 ]
      } ]
    }, {
      id: "10",
      title: "視覺敏感度測試",
      questions: [ {
              type: "closeeye",
              remind: "請閉上您的右眼",
              image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
          }, {
              type: "image",
              question: "請問您看到的是哪一個？",
              image: CDN_DOMAIN+"/images/10-1.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "leftEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "c"
          }, {
              type: "image",
              question: "",
              image:CDN_DOMAIN+"/images/10-2.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "leftEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "b"
          }, {
              type: "image",
              question: "",
              image: CDN_DOMAIN+"/images/10-3.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "leftEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "d"
          }, {
              type: "image",
              question: "",
              image: CDN_DOMAIN+"/images/10-4.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "leftEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "c"
          }, {
              type: "image",
              question: "",
              image: CDN_DOMAIN+"/images/10-5.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [ CDN_DOMAIN+"/images/10-option1.png",CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png",CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "leftEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "a"
          }, {
              type: "image",
              question: "",
              image: CDN_DOMAIN+"/images/10-6.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "leftEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "d"
          }, {
              type: "image",
              question: "",
              image: CDN_DOMAIN+"/images/10-7.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png",CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "leftEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "b"
          }, {
              type: "image",
              question: "",
              image: CDN_DOMAIN+"/images/10-8.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png",CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "leftEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "a"
          }, {
              type: "image",
              question: "",
              image: CDN_DOMAIN+"/images/10-9.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png",CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "leftEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "d"
          }, {
              type: "image",
              question: "",
              image: CDN_DOMAIN+"/images/10-10.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "leftEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "c"
          }, {
              type: "closeeye",
              remind: "請閉上您的左眼",
              image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
          }, {
              type: "image",
              question: "請問您看到的是哪一個？",
              image: CDN_DOMAIN+"/images/10-1.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "rightEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "c"
          }, {
              type: "image",
              question: "",
              image: CDN_DOMAIN+"/images/10-2.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "rightEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "b"
          }, {
              type: "image",
              question: "",
              image: CDN_DOMAIN+"/images/10-3.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "rightEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "d"
          }, {
              type: "image",
              question: "",
              image: CDN_DOMAIN+"/images/10-4.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "rightEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "c"
          }, {
              type: "image",
              question: "",
              image: CDN_DOMAIN+"/images/10-5.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images//10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "rightEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "a"
          }, {
              type: "image",
              question: "",
              image: CDN_DOMAIN+"/images//10-6.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png",CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "rightEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "d"
          }, {
              type: "image",
              question: "",
              image: CDN_DOMAIN+"/images/10-7.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [ CDN_DOMAIN+"/images/10-option1.png",CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "rightEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "b"
          }, {
              type: "image",
              question: "",
              image: CDN_DOMAIN+"/images/10-8.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "rightEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "a"
          }, {
              type: "image",
              question: "",
              image: CDN_DOMAIN+"/images/10-9.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [ CDN_DOMAIN+"/images/10-option1.png",CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "rightEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "d"
          }, {
              type: "image",
              question: "",
              image: CDN_DOMAIN+"/images/10-10.png"
          }, {
              type: "picQuestion",
              question: "請問您看到的是哪一個？",
              options: [ CDN_DOMAIN+"/images/10-option1.png",CDN_DOMAIN+"/images/10-option2.png",CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
              whicheye: "rightEyeScore",
              imageOptions: [ "a", "b", "c", "d" ],
              answer: "c"
      } ]
    }, {
      id: "11",
      title: "對比敏感度測試",
      questions: [ {
          type: "closeeye",
          remind: "請閉上您的右眼",
          image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
      }, {
          type: "image",
          question: "請問您看到的是哪一個？",
          image:'https://static.cmereye.com/imgs/2023/06/38e75fd5925bd3ef.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "leftEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "c"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/bec892f2df744bb8.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "leftEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "b"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/e88180a62116e77d.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "leftEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "d"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/526fd2c5033ac506.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "leftEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "c"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/56605f8bc327af8d.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "leftEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "a"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/8bb7506471eb340b.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "leftEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "d"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/80eb46c037ccf4d5.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "leftEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "b"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/439383c3ea134ef1.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "leftEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "a"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/ef9e7e6b439676b9.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "leftEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "d"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/859fb5911846e204.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "leftEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "c"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/4d19318710d3cae4.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "leftEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "b"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/bfed7a7760bfbada.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "leftEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "d"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/b910af0a106ed057.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "leftEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "c"
      }, {
          type: "closeeye",
          remind: "請閉上您的左眼",
          image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
      }, {
          type: "image",
          question: "請問您看到的是哪一個？",
          image:'https://static.cmereye.com/imgs/2023/06/38e75fd5925bd3ef.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "rightEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "c"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/bec892f2df744bb8.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "rightEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "b"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/e88180a62116e77d.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "rightEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "d"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/526fd2c5033ac506.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "rightEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "c"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/56605f8bc327af8d.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "rightEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "a"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/8bb7506471eb340b.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "rightEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "d"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/80eb46c037ccf4d5.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "rightEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "b"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/439383c3ea134ef1.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "rightEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "a"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/ef9e7e6b439676b9.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "rightEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "d"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/859fb5911846e204.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "rightEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "c"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/4d19318710d3cae4.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "rightEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "b"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/bfed7a7760bfbada.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "rightEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "d"
      }, {
          type: "image",
          question: "",
          image:'https://static.cmereye.com/imgs/2023/06/b910af0a106ed057.png'
      }, {
          type: "picQuestion",
          question: "請問您看到的是哪一個？",
          options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
          whicheye: "rightEyeScore",
          imageOptions: [ "a", "b", "c", "d" ],
          answer: "c"
      } ]
    } 
  ]