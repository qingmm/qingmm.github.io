function copy()
{
    var answer = '';
    for(var i = 1; i <= 26; i ++) {
        id = i.toString();
        value = document.getElementById(id).value;
        answer += id + '.' + value + ', ';
    }
    alert(answer);
    var oInput = document.createElement('input');
    oInput.class = 'form-control'
    oInput.value = answer;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    oInput.className = 'oInput';
    oInput.style.display='none';
    alert('提交成功');
}

function upload()
{
    var answer = '';
    for(var i = 1; i <= 26; i ++) {
        id = i.toString();
        value = document.getElementById(id).value;
        answer += id + '.' + value + ', ';
    }
    alert(answer);
    input = document.getElementById('veditor');
    input.value = "测试";
    document.getElementsByClassName('vsubmit')[0].click();
}