class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :film_id, :comment, :rating
  has_one :user
end
