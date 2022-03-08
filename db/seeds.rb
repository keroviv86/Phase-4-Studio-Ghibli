# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🌱 Seeding data..."

u1 = User.create(name: 'Viv', email: "keroviv86@gmail.com", password: "12345", admin: false)
require 'rest-client'
rest_client = RestClient.get "https://ghibliapi.herokuapp.com/films"
rest_client_array = JSON.parse(rest_client)
rest_client_array.each do |film|
    Film.create(
        title: film["title"],
        original_title: film["original_title"],
        original_title_romanised: film["original_title_romanised"],
        image: film["image"],
        movie_banner: film["movie_banner"],
        description: film["description"],
        director: film["director"],
        producer: film["producer"],
        release_date: film["release_date"],
        running_time: film["running_time"],
        rt_score: film["rt_score"],
        people: film["people"],
        species: film["species"],
        locations: film["locations"],
        vehicles: film["vehicles"],
        url: film["url"],
    )
end


UserJoinFilm.create(film_id: 1, user_id: 1, comment: "Great movie", rating: 8)
UserJoinFilm.create(film_id: 2, user_id: 1, comment: "perfect", rating: 9)
