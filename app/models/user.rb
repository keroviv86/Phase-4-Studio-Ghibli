class User < ApplicationRecord
    has_many :user_join_films
    has_many :films, through: :user_join_film
    has_secure_password
end
