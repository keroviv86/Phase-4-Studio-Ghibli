class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :films
  has_many :reviews
end
