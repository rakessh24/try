package session

import (
	"errors"
	"net/http"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

var (
	secretKey       = []byte("toko")
	ErrMissingToken = errors.New("missing JWT token")
	ErrTokenInvalid = errors.New("invalid JWT token")
)

func GenerateToken() (map[string]interface{}, error) {
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)

	expirationTime := time.Now().Add(time.Hour)
	claims["exp"] = expirationTime.Unix()

	tokenString, err := token.SignedString(secretKey)
	if err != nil {
		return nil, err
	}

	expiresIn := time.Until(expirationTime)

	additionalInfo := map[string]interface{}{
		"token":      tokenString,
		"expires_in": expiresIn.String(),
	}
	return additionalInfo, nil
}

func ExtractToken(c *gin.Context) error {
	tokenString, err := c.Cookie("token")
	if err != nil {
		return ErrMissingToken
	}

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return secretKey, nil
	})

	if err != nil || !token.Valid {
		return ErrTokenInvalid
	}

	return nil
}

func ClearToken(c *gin.Context) {
	c.SetCookie("token", "", -1, "/", "localhost", false, true)
	// c.SetCookie("token", "", -1, "/", "xhaeffer.me:11092", false, true)
}

func VerifyToken() gin.HandlerFunc {
	return func(c *gin.Context) {
		if err := ExtractToken(c); err != nil {
			if err == ErrMissingToken {
				c.JSON(http.StatusUnauthorized, gin.H{"error": "Token tidak ditemukan, Silahkan login terlebih dahulu!"})
			} else {
				c.JSON(http.StatusUnauthorized, gin.H{"error": "Token tidak valid, Silahkan login ulang!"})
			}
			c.Abort()
			return
		}
	}
}
