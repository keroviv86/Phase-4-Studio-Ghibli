class User < ApplicationRecord
    has_many :reviews
    has_many :films, through: :reviews
    has_secure_password
end
