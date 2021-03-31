function calculateEMI(){
    var P=document.getElementById('principalAmount').value;
    var R=document.getElementById('interestRate').value;
    var N=document.getElementById('tenure').value;
    // alert(P);

    
    var monthlyInterestRatio = R/(100*12);
    var top = Math.pow((1+monthlyInterestRatio),N);
    var bottom = top -1;
	var sp = top / bottom;
	var emi = ((P * monthlyInterestRatio) * sp);
    document.getElementById('result').innerHTML="<p> EMI is Rs."+emi.toFixed(2)+"</p>";

    return false;
}