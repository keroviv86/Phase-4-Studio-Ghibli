class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :admin
end
