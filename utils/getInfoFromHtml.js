data = Array
.from(
	document.getElementsByTagName('tr')
)
.map(e =>
	Array.from(e.children).map(j => j.innerText)/*.join(';')*/
);

JSON.stringify(data);

var header = data[0];
var json = data.filter((e, i) => i != 0).map((e, i) => ());

var downloadLink = document.createElement("a");
var blob = new Blob(["\ufeff", csv]);
var url = URL.createObjectURL(blob);
downloadLink.href = url;
downloadLink.download = "data.csv";

document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);