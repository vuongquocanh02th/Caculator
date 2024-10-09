
function cong(){
    let so1=document.getElementById('num1').value;
    let so2=document.getElementById('num2').value;
    let ketqua="Result add:"+(Number(so1)+Number(so2));
    document.getElementById('result').innerHTML=ketqua;

}
function tru(){
    let so1=document.getElementById('num1').value;
    let so2=document.getElementById('num2').value;
    let ketqua="Result subtraction:"+(Number(so1)-Number(so2));
    document.getElementById('result').innerHTML=ketqua;
}
function nhan(){
    let so1=document.getElementById('num1').value;
    let so2=document.getElementById('num2').value;
    let ketqua="Result multiplication:"+(Number(so1)*Number(so2));
    document.getElementById('result').innerHTML=ketqua;
}
function chia(){
    let so1=document.getElementById('num1').value;
    let so2=document.getElementById('num2').value;
    let ketqua="Result division:"+(Number(so1)/Number(so2));
    document.getElementById('result').innerHTML=ketqua;
}