# WIL 내용을 적어주세요.
이번 시간에는 축제로 인해서 온라인으로라도 외부의 API를 이용해서 실제로 데이터를 어떻게 가져오는지를 확인해볼 수 있었다. 대중적인 가짜 API이기는 하지만 이것을 내 서버로 끌고 와서 내 프로그램에 쓸 수 있는 데이터로 가동하는 것이었다. 또한 이번에 처음으로 쓰게 된 기능이 하나 있었는데, 바로 button 이다. button 하나를 만든 다음, 이를 눌렀을 때 외부 API에서 받았던 정보들을 모두 화면 밖으로 뽑아내는 것이다. 사실 예전부터 이런 비주얼적인 기능을 프로그램에서 구현해보고 싶은 마음은 있었다. 그러나 이렇게 외부 API를 사용해보는 것은 처음이었는데, API라는 것 자체를 예전에는 아예 쓸 생각을 못했다. 여기에서 어쩌면 좀 더 이런 기능들을 배워갈 수 있을 지도 모른다는 생각이 들어 더 기대가 된다.

## 코드 블럭을 만들어요.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TODO LIST</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <h1 id="head">TODO LIST</h1>
    <button id="call">TODO LIST 불러오기</button>
    <div id="root"></div>
    <script src="./script.js"></script>
  </body>
</html>

