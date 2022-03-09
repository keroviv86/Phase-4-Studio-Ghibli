class FilmSerializer < ActiveModel::Serializer
  attributes :id, :title, :original_title, :image, :description, :director, :producer, :release_date, :running_time, :rt_score, :people, :species, :reviews
  
  def reviews
    object.user_join_films.collect do |review|
      {:id => review.id, :user_name => review.user.name, :comment => review.comment, :rating => review.rating}
    end
  end
end
