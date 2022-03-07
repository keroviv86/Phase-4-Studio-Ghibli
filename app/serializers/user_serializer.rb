class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :admin
  has_many :films
  has_many :user_join_films
end
