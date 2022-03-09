class Film < ApplicationRecord
    has_many :user_join_films
    has_many :users, through: :user_join_films
end
