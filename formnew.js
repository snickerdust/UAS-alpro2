const form = document.getElementById('form');
const income = document.getElementById('income');
const services = document.getElementById('services');
const hotels = document.getElementById('hotels');
const fashion = document.getElementById('fashion');
const agehead = document.getElementById('agehead');
const houseage = document.getElementById('houseage');
const luas = document.getElementById('luas');
const cigrates = document.getElementById('cigrates');
const anggota = document.getElementById('anggota');
const elektronik = document.getElementById('elektronik');
const hp = document.getElementById('hp');
var terisi;

form.addEventListener('submit', function(e) {
	e.preventDefault();

	checkInputs();

	if(terisi == 11) {
		runfetch();
	}


});

function runfetch() {
	let dic = { 
        'gaji': parseInt(document.getElementById('form').elements[0].value),
        'restodanhotel':parseInt(document.getElementById('form').elements[1].value),
		'barangdanjasa':parseInt(document.getElementById('form').elements[2].value),
		'pakaian':parseInt(document.getElementById('form').elements[3].value),
		'umur':parseInt(document.getElementById('form').elements[4].value),
		'luasrumah':parseInt(document.getElementById('form').elements[5].value),
		'umurrumah':parseInt(document.getElementById('form').elements[6].value),
		'rokokdanalkohol':parseInt(document.getElementById('form').elements[7].value),
		'anggotakeluarga':parseInt(document.getElementById('form').elements[8].value),
		'elektronik':parseInt(document.getElementById('form').elements[9].value),
		'hp':parseInt(document.getElementById('form').elements[10].value)
	};

    fetch('http://10:10:10:243:5000/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(dic),
        })
        .then(function (response) {
            return response.json()
        })      
        .then(function (data) {
			hasilTree = data.hasil_tree
            hasilReg = data.hasil_reg.toLocaleString('en-US').replace(/,/g, ".")
            //document.getElementById('hasil').innerHTML = `Perkiraan pengeluaran : Rp. ${hasilReg}`+"<br />"+`Kategori status : ${hasilTree}`
			if (hasilTree == "aman"){
				document.getElementById('aman').classList.add('succes')
				document.getElementById('aman').innerHTML = `kondisi keuangan anda sekarang berada pada status aman, artinya dengan gaya hidup dan pendapatan anda yang sekarang anda masih bisa menyisihkan uang untuk disimpan dalam bentuk dana darurat yang sewaktu – waktu dapat anda gunakan bila keadaan darurat`;
			}
			else if (hasilTree == "waspada"){
				document.getElementById('waspada').classList.add('succes')
				document.getElementById('waspada').innerHTML = `kondisi keuangan anda sekarang berada pada status waspada, artinya perkiraan pengeluaran  anda hampir sama dengan total pendapatan anda. Sehingga anda memiliki sedikit kemungkinan untuk tidak bisa menyisihkan uang untuk disimpan dalam bentuk dana darurat yang sewaktu – waktu dapat anda gunakan bila keadaan darurat.`;
			}
			else if(hasilTree == "bahaya") {
				document.getElementById('bahaya').classList.add('succes')
				document.getElementById('bahaya').innerHTML = `kondisi keuangan anda sekarang berada pada status bahaya, artinya perkiraan pengeluaran  anda sama bahkan bisa melebihi dengan total pendapatan anda. Sehingga besar kemungkinan anda tidak bisa menyisihkan uang untuk disimpan dalam bentuk dana darurat yang sewaktu – waktu dapat anda gunakan bila keadaan darurat.`;
			}
			document.getElementById('hasil').classList.add('succes')
			document.getElementById('hasil').innerHTML = `Perkiraan pengeluaran : Rp. ${hasilReg}`
        })
        .catch((error) => {
        console.error('Error:', error);
        });
}

function checkInputs() {
	// trim to remove the whitespaces
	const incomeValue = income.value.trim();
	const serValue = services.value.trim();
	const hotValue = hotels.value.trim();
	const fashValue = fashion.value.trim();
	const ageValue = agehead.value.trim();
	const luasValue = luas.value.trim();
	const houseageValue = houseage.value.trim();
	const cigValue = cigrates.value.trim();
	const anggValue = anggota.value.trim();
	const elektronikValue = elektronik.value.trim();
	const hpValue = hp.value.trim();
	
	terisi = 0;

	if(incomeValue === '') {
		setErrorFor(income, 'Harus diisi');
	} else {
		setSuccessFor(income);
		terisi = terisi + 1;
	}

	if(serValue === '') {
		setErrorFor(services, 'Harus diisi');
	} else {
		setSuccessFor(services);
		terisi = terisi + 1;
	}

	if(hotValue === '') {
		setErrorFor(hotels, 'Harus diisi');
	} else {
		setSuccessFor(hotels);
		terisi = terisi + 1;
	}

	if(fashValue === '') {
		setErrorFor(fashion, 'Harus diisi');
	} else {
		setSuccessFor(fashion);
		terisi = terisi + 1;
	}

	if(ageValue === '') {
		setErrorFor(agehead, 'Harus diisi');
	} else {
		setSuccessFor(agehead);
		terisi = terisi + 1;
	}

	if(luasValue === '') {
		setErrorFor(luas, 'Harus diisi');
	} else {
		setSuccessFor(luas);
		terisi = terisi + 1;
	}

	if(houseageValue === '') {
		setErrorFor(houseage, 'Harus diisi');
	} else {
		setSuccessFor(houseage);
		terisi = terisi + 1;
	}

	if(cigValue === '') {
		setErrorFor(cigrates, 'Harus diisi');
	} else {
		setSuccessFor(cigrates);
		terisi = terisi + 1;
	}

	if(anggValue === '') {
		setErrorFor(anggota, 'Harus diisi');
	} else {
		setSuccessFor(anggota);
		terisi = terisi + 1;
	}

	if(elektronikValue === '') {
		setErrorFor(elektronik, 'Harus diisi');
	} else {
		setSuccessFor(elektronik);
		terisi = terisi + 1;
	}

	if(hpValue === '') {
		setErrorFor(hp, 'Harus diisi');
	} else {
		setSuccessFor(hp);
		terisi = terisi + 1;
	}

	return terisi
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

