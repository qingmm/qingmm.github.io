function copy()
{
    var Url2=document.getElementById("1").innerText;
    var oInput = document.createElement('input');
    oInput.class = 'form-control'
    oInput.value = Url2;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    oInput.className = 'oInput';
    oInput.style.display='none';
    alert('复制成功');
}
