class UserJoinFilmSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :film_id, :comment, :rating
  has_one :user
  has_one :film

  
  
end
