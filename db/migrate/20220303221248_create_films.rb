class CreateFilms < ActiveRecord::Migration[6.1]
  def change
    create_table :films do |t|
      t.string :title
      t.string :original_title
      t.string :original_title_romanised
      t.string :image
      t.string :movie_banner
      t.string :description
      t.string :director
      t.string :producer
      t.integer :release_date
      t.integer :running_time
      t.integer :rt_score
      t.string :people
      t.string :species
      t.string :locations
      t.string :vehicles
      t.string :url

      t.timestamps
    end
  end
end
