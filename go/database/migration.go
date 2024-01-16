package database

type Listbata struct {
	IdList    int    `gorm:"primarykey;autoIncrement" json:"id_list"`
	Namabrg   string `gorm:"column:nama_brg" json:"nama_brg"`
	Foto      []byte `gorm:"column:foto" json:"gambar"`
	Detailbrg string `gorm:"column:detail_brg" json:"detail_brg"`
	Jumlah    int    `gorm:"column:jumlah" json:"jumlah"`
	Harga     string `gorm:"column:harga_brg" json:"harga_brg"`
}

type Bata struct {
	IdList    int    `gorm:"primarykey;autoIncrement" json:"id_list"`
	Namabrg   string `gorm:"column:nama_brg" json:"nama_brg"`
	Foto      []byte `gorm:"column:foto" json:"gambar"`
	Detailbrg string `gorm:"column:detail_brg" json:"detail_brg"`
	Jumlah    int    `gorm:"column:jumlah" json:"jumlah"`
	Harga     string `gorm:"column:harga_brg" json:"harga_brg"`
}

type Roster struct {
	IdList    int    `gorm:"primarykey;autoIncrement" json:"id_list"`
	Namabrg   string `gorm:"column:nama_brg" json:"nama_brg"`
	Foto      []byte `gorm:"column:foto" json:"gambar"`
	Detailbrg string `gorm:"column:detail_brg" json:"detail_brg"`
	Jumlah    int    `gorm:"column:jumlah" json:"jumlah"`
	Harga     string `gorm:"column:harga_brg" json:"harga_brg"`
}

type User struct {
	IdUser   int    `gorm:"primaryKey;autoIncrement" json:"id_user"`
	Username string `gorm:"column:username" json:"username"`
	Nama     string `gorm:"column:nama_user" json:"nama_user"`
	Email    string `gorm:"column:email" json:"email"`
	NoTelp   string `gorm:"column:no_telp" json:"no_telp"`
	Alamat   string `gorm:"column:alamat" json:"alamat"`
	Password string `gorm:"column:password" json:"-"`
}

func (Listbata) TableName() string {
	return "listbata"
}

func (Roster) TableName() string {
	return "roster"
}

func (Bata) TableName() string {
	return "bata"
}

func (User) TableName() string {
	return "user"
}
