class FilmSerializer < ActiveModel::Serializer
  attributes :id, :title, :original_title, :image, :description, :director, :producer, :release_date, :running_time, :rt_score, :people, :species
  has_many :user_join_films
end
