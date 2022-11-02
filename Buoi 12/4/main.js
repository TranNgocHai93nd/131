
// Tạo Object với key là thuộc tính để kiểm tra user input
let validatorRules =  {
    required: function (value) {
        return value ? undefined : 'Vui lòng nhập vào trường này!';
    },
    email: function (value) {
        let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regEx.test(value) ? undefined : 'Lỗi định dạng Email không đúng!';
    },
    min: function (min) {
        return function (value) {
            return value.length >= min ? undefined: `Vui lòng nhập vào it nhất ${min} ký tự!`;
        }
    },
    confirm: function (value) {
        const inputPass = document.getElementById('password').value;
        return value === inputPass ? undefined : "Mật khẩu không khớp!"
        
    }
}
validatorRules.min
//Hàm lấy data trong DOM để từ đó xác định với các quy tắc tự đặt ra ở trên
 function Validator (formSelector) {
    let formRules = {};
    const formElement = document.querySelector(formSelector);
    // Chỉ sử dụng các Element có trong Dom
    if (formElement) {
        let  inputs = formElement.querySelectorAll('[name][rules]');
        for (let input of inputs) {
            let rules = input.getAttribute("rules").split('|') // nhận về các thuộc tính của rules bên DOM và nhận về mảng
            for (var rule of rules){
                let isRuleHasValue = rule.includes(':')
                let ruleInfo;
                if (isRuleHasValue){
                    ruleInfo = rule.split(':')// tách giá trị min:6
                    rule = ruleInfo[0]// ghi đè để lây min còn ruleInfo[1]=6
                }
                let ruleFunc = validatorRules[rule];
                if (isRuleHasValue){
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }
                // tien hanh push vao 1 mang rong
                if (Array.isArray(formRules[input.name])) {
                    // tat nhien la lan dau khong dung vi no dang la strings
                    formRules[input.name].push(ruleFunc)
                }else{
                    formRules[input.name] = [ruleFunc];
                }
            }
            // Lắng nghe sự kiện:
            input.onblur = handleValidate;
            function handleValidate (event) {
                let rules = formRules[event.target.name];
                let errorMessage;
                for (let rule of rules) {
                    errorMessage = rule(event.target.value)
                    if (errorMessage) {break;}
                }
                // rules.find ( function (rule) {// tan dung ham find khi tim dc thi dung
                //     errorMessage = rule(event.target.value)
                //     return errorMessage;
                // });
                // Hiện thị lỗi ra web và xoa khi nhap dung
                let current = document.getElementById(event.target.name)
                let sibling = current.nextElementSibling;
                if (errorMessage) {
                    sibling.innerHTML = errorMessage;
                }else{
                    sibling.innerHTML = "";
                }
                return !errorMessage;
            }
        }
        //console.log(formRules);
        
    }
    // Xử lý Submit
    formElement.onsubmit = function (event) {
        event.preventDefault();
        let  inputs = formElement.querySelectorAll('[name][rules]');
        let isValid= true ;
        for (let input of inputs){
            if (!handleValidate ({ target : input})){
                isValid = false;
            }  
        } 
        console.log(isValid); 
        // KHi không có lỗi thì submit form
        if (isValid) {
            formElement.submit();
        }
    }
}


 

