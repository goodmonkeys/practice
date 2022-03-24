// 1. 박스 2개
// 2. 드랍다운 리스트
// 3. 환율정보
// 4. 드랍다운 리스트 아이템 선택
// 5. 금액 입력시 환전
// 6. 리스트 선택시 리프레쉬
// 7. 숫자 한국어로 읽기
// 8. 어느박스를 바꿔도 나머지 박스가 바뀜

let currencyRatio = {
    USD: {
        KRW: 1184.36,
        USD: 1,
        VND: 22972.5,
        unit: "달러"

    },
    KRW: {
        KRW: 1,
        USD: 0.00084,
        VND: 19.4,
        unit: "원"
    },
    VND: {
        KRW: 0.052,
        USD: 0.000044,
        VND: 1,
        unit: "동"
    }
}
// console.log(currencyRatio.USD.unit) console.log(currencyRatio["VND"]["UNIT"])
let fromCurrency = 'USD'
let toCurrency = "USD"

// from_currency_list 이 태그안에 있는 a를 다 가져온다
document
    .querySelectorAll("#from_currency_list a")
    .forEach((menu) => menu.addEventListener("click", function () {
        document
            .getElementById("from_btn")
            .textContent = this.textContent;

        fromCurrency = this.textContent;
        
        document.getElementById("from_input").value=null;
        convert();
    }));

document
    .querySelectorAll("#to_currency_list a")
    .forEach((menu) => menu.addEventListener("click", function () {
        document
            .getElementById("to_btn")
            .textContent = this.textContent;

        toCurrency = this.textContent;
        
        document.getElementById("to_input").value=null;
        convert1();
    }));

function convert() {
    let amount = document
        .getElementById("from_input")
        .value;
    
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    
    // console.log(String(amount).lengt/h);
    // amount=String(amount);
    // abc='hello'
    // abc=abc.split('')
    // console.log(abc)
    k_unit = ["만", "억", "조", "경", "해"]
    

    


    amount=amount.split('');
    // console.log(amount);
    console.log(amount.length);
    if (amount.length > 4)
        // console.log("출력")
        console.log(amount.splice(4, 0, "만"));
    console.log(amount);   

    // var arr = ['a', 'b', 'c'];
    // if (arr.length > 2)
    //     arr.splice(2, 0, 'd');



    // console.log(arr);



        

    document
        .getElementById("to_input")
        .value = convertedAmount;
    document.getElementById("from_unit").textContent=amount+currencyRatio[fromCurrency]["unit"];
    document.getElementById("to_unit").textContent=convertedAmount+currencyRatio[toCurrency]["unit"];

}

function convert1() {
    let amount = document
        .getElementById("to_input")
        .value;
    console.log(amount)
    
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency]

    
    
    

    document
        .getElementById("from_input")
        .value = convertedAmount;
    document.getElementById("from_unit").textContent=amount+currencyRatio[fromCurrency]["unit"];
    document.getElementById("to_unit").textContent=convertedAmount+currencyRatio[fromCurrency]["unit"];
}