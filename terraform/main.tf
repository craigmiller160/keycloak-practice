terraform {
  required_providers {
    keycloak = {
      source = "mrparkers/keycloak"
      version = "4.1.0"
    }
  }
}

provider "keycloak" {
  client_id     = "terraform"
  client_secret = "7VoYvjCRdOjtSUnwLQeFn0j5IG0SclHo"
  url           = "http://localhost:8080"
}