class CreateUserJoinFilms < ActiveRecord::Migration[6.1]
  def change
    create_table :user_join_films do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :film, null: false, foreign_key: true

      t.timestamps
    end
  end
end
