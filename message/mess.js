exports.wait = () => {
	return`Mohon Tunggu Sebentar...`
}

exports.banned = (nomerowner) => {
	return`Sepertinya Kamu Telah Diblok/Diban, Hubungi Owner Untuk Mengetahui Cara Membuka Blok.\n\n*Owner : wa.me/${nomerowner}*`
}

exports.emror = () => {
	return`_Error Kak_`
}

exports.nsfw = () => {
	return`Fitur Nsfw Belum Diaktifkan Di Group Ini!`
}

exports.linkga = () => {
	return`Linknya Tidak Valid Kak!`
}

exports.groupo = () => {
	return`Perintah Ini Hanya Bisa Digunakan Di Dalam Group!`
}

exports.admin = () => {
	return`Perintah Ini Hanya Bisa Digunakan Oleh Admin Group!`
}

exports.badmin = () => {
	return`Bot Harus Admin Group!`
}

exports.nsfwoff = () => {
	return`Fitur Nsfw Belum Diaktifkan!`
}

exports.prem = () => { 
	return `Perintah Ini Hanya Bisa Digunakan Oleh Pengguna Premium!`
}

exports.limit = () => {
	return`Limit Anda Sudah Habis Tunggu Esok Hari!`
}

exports.wrongformat = (prefix, command) => {
	return`─「 *FORMAT SALAH* 」─\n• ${prefix + command} on\nUntuk Mengaktifkan\n• ${prefix + command} off\nUntuk Menonaktifkan`
}
