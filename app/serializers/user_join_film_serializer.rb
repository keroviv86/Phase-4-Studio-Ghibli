class UserJoinFilmSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating
  has_one :user
  has_one :film
  
end
