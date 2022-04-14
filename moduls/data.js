let dataUsers = [
    {
        "nama":"Rahmat",
        "nim": 12345611,
        "jurusan":"Teknik Informatika",
        "alamat":"Jl.Jalan",
        "no_tlpn":"0819172726",
        "email":"rahmat@email.com"
    },
    {
        "nama":"Rahma",
        "nim": 12345612,
        "jurusan":"Teknik Informatika",
        "alamat":"Jl.Jala",
        "no_tlpn":"0819172723",
        "email":"rahma@email.com"
    },
    {
        "nama":"Rama",
        "nim": 12345601,
        "jurusan":"Teknik Informatika",
        "alamat":"Jl.lan",
        "no_tlpn":"0819170726",
        "email":"rama@email.com"
    },
]
module.exports ={
    getUsers : dataUsers,
    addUsers : (req) =>{
        const newData = {
            nim: req.body.nim,
            nama: req.body.nama,
            jurusan : req.body.jurusan,
            alamat : req.body.alamat,
            no_tlpn : req.body.no_tlpn,
            email : req.body.email,
        };
        dataUsers.push(newData);
        return dataUsers;
    }
}