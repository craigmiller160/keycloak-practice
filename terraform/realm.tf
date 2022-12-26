resource "keycloak_realm" "realm" {
  realm   = "my-realm"
  enabled = true
}

resource "keycloak_openid_client" "openid_client" {
  realm_id            = keycloak_realm.realm.id
  client_id           = "test-client"

  name                = "test client"
  enabled             = true

  access_type         = "CONFIDENTIAL"
  standard_flow_enabled = true
  valid_redirect_uris = [
    "http://localhost:3003/*"
  ]

  # TODO there are different themes?
  login_theme = "keycloak"
}
