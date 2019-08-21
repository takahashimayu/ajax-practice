'use strict';

window.onload = function() {

const btn = document.getElementById('btn');

// 「検索」ボタンクリック時
btn.addEventListener('click', function(){
    // script要素を生成
    const script = document.createElement('script');

    //  script要素のsrc属性にリクエストURLを指定
    const url = '//zipcloud.ibsnet.co.jp/api/search';
    const zipcode = document.getElementById('zipcode').value;

    script.setAttribute('src', `${url}?zipcode=${zipcode}&callback=callback`);

    // body要素の末尾にscript要素を追加
    document.body.appendChild(script);

    // body要素のscript要素を削除
    document.body.removeChild(script);

}, false);

}

// 住所取得時
function callback(data) {
    if(data.results) {
        const result = data.results[0];

        // 都道府県の欄に都道府県名を表示
        document.getElementById('prefecture').value = result.address1;

        // 市区町村の欄に市区町村名を表示
        document.getElementById('city').value = result.address2;

        // 住所の欄に町域名を表示
        document.getElementById('address').value = result.address3;        
    }
    else {
        alert('該当するデータが見つかりませんでした');
    }
}
