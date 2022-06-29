let nhapNam = parseInt(prompt("Nhap Nam"));
if (nhapNam % 4 == 0) {
    if (nhapNam % 100 == 0) {
        alert("nam nhuan")
    } else {
        alert("khong nhuan")
    }
} else {
    if (nhapNam % 100 == 0 && nhapNam % 400 > 0) {
        alert("khong nhuan")
    } else {
        alert("nam nhuan")
    }
}


