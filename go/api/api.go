package api

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"

	"toko/api/auth"
	"toko/api/bata"
)

func API(r *gin.Engine, db *gorm.DB) {
	auth.Auth(r, db)
	bata.Bata(r, db)
}
